import { http } from "@/lib/api/api-http-client";
import { apiRoutes } from "@/lib/api/api-routes";
import { CreateDonationDTO, DonationResponse } from "../types";

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
