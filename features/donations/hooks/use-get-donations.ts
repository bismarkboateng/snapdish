import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AppwriteDonationsResponse } from "../types";
import { getDonations } from "../services";
import { toast } from "sonner";

export const useGetAllDonations = () => {
  return useQuery<AppwriteDonationsResponse, Error, AppwriteDonationsResponse, ["donations"]>(
    {
      queryKey: ["donations"],
      queryFn: getDonations,
      onSuccess: () => {
        toast.success(`Donations fetched successfully.`);
      },
      onError: () => {
        toast.error(`Failed to fetch donations: Please try again later.`);
      },
      refetchOnWindowFocus: false,
    } as UseQueryOptions<
      AppwriteDonationsResponse,
      Error,
      AppwriteDonationsResponse,
      ["donations"]
    >
  );
};
