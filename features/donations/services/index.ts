import { http } from "@/lib/api/api-http-client";
import { apiRoutes } from "@/lib/api/api-routes";
import {
  CreateDonationDTO,
  DonationResponse,
  AppwriteDonationsResponse,
  RequestDonationResponse,
  RequestDonationDTO,
} from "../types";

export const createDonation = async (
  data: CreateDonationDTO
): Promise<DonationResponse> => {
  try {
    const result = await http.post<CreateDonationDTO, DonationResponse>(
      apiRoutes.donations.create,
      data
    );

    if ("data" in result) return result.data!;
    return Promise.reject(
      new Error(result.message ?? "Creating donation failed")
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while creating donation");
  }
};

export const getDonations = async (): Promise<AppwriteDonationsResponse> => {
  try {
    const result = await http.get<AppwriteDonationsResponse>(
      apiRoutes.donations.all
    );

    if ("data" in result) return result.data!;
    return Promise.reject(
      new Error(result.message ?? "Fetching donations failed")
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while fetching donations");
  }
};

export const requestDonation = async (data: {
  id: string;
}): Promise<RequestDonationResponse> => {
  try {
    const result = await http.patch<
      RequestDonationDTO,
      RequestDonationResponse
    >(apiRoutes.donations.request, data);

    if ("data" in result) return result.data!;
    return Promise.reject(
      new Error(result.message ?? "Requesting donation failed")
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while requesting donation");
  }
};

export const getMyDonations = async (): Promise<AppwriteDonationsResponse> => {
  try {
    const result = await http.get<AppwriteDonationsResponse>(
      apiRoutes.donations.my
    );

    if ("data" in result) return result.data!;
    return Promise.reject(
      new Error(result.message ?? "Fetching my donations failed")
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while fetching my donations");
  }
};

export const getMyRequestedDonations =
  async (): Promise<AppwriteDonationsResponse> => {
    try {
      const result = await http.get<AppwriteDonationsResponse>(
        apiRoutes.donations.myRequested
      );

      if ("data" in result) return result.data!;
      return Promise.reject(
        new Error(result.message ?? "Fetching my requested donations failed")
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error(
        "An unexpected error occurred while fetching my requested donations"
      );
    }
  };
