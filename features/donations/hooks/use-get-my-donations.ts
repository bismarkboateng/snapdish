import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AppwriteDonationsResponse } from "../types";
import { getMyDonations } from "../services";
import { toast } from "sonner";

export const useGetMyDonations = () => {
  return useQuery<
    AppwriteDonationsResponse,
    Error,
    AppwriteDonationsResponse,
    ["my-donations"]
  >({
    queryKey: ["my-donations"],
    queryFn: getMyDonations,
    onSuccess: () => {
      toast.success(`Donations fetched successfully.`);
    },
    onError: () => {
      toast.error(`Failed to fetch donations: Please try again later.`);
    },
    refetchOnWindowFocus: false,
  } as UseQueryOptions<AppwriteDonationsResponse, Error, AppwriteDonationsResponse, ["my-donations"]>);
};
