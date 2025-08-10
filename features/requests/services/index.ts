import { http } from "@/lib/api/api-http-client";
import { apiRoutes } from "@/lib/api/api-routes";
import { RequestedUserDetailsResponse } from "../types";

export const getRequestedUserDetails = async (donationId: string) => {
  try {
    const result: RequestedUserDetailsResponse = await http.get(
      apiRoutes.donations.requestedUserDetails(donationId)
    );

    if ("data" in result && result.data?.users) {
      return result.data.users;
    }
    return Promise.reject(
      new Error(
        "message" in result
          ? result.message
          : "Fetching requested user details failed"
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(
      "An unexpected error occurred while fetching requested user details"
    );
  }
};


export const approveDonationRequest = async (donationId: string, userId: string) => {
  try {
    const result = await http.patch(apiRoutes.donations.approveRequest, {
      donationId,
      userId
    });

    if ("data" in result && result.data) {
      return result.data;
    }
    return Promise.reject(
      new Error(
        "message" in result
          ? result.message
          : "Approving donation request failed"
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(
      "An unexpected error occurred while approving the donation request"
    );
  }
}


export const declineDonationRequest = async (donationId: string, userId: string) => {
  try {
    const result = await http.patch(apiRoutes.donations.declineRequest, {
      donationId,
      userId
    });

    if ("data" in result && result.data) {
      return result.data;
    }
    return Promise.reject(
      new Error(
        "message" in result
          ? result.message
          : "Declining donation request failed"
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(
      "An unexpected error occurred while declining the donation request"
    );
  }
}