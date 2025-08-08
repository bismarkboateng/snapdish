import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AppwriteDonationsResponse } from "../types";
import { getMyRequestedDonations } from "../services";
import { toast } from "sonner";

export const useGetMyRequestedDonations = () => {
  return useQuery<
    AppwriteDonationsResponse,
    Error,
    AppwriteDonationsResponse,
    ["my-requests"]
  >({
    queryKey: ["my-requests"],
    queryFn: getMyRequestedDonations,
    onSuccess: () => {
      toast.success(`Fetched requested donations successfully.`);
    },
    onError: () => {
      toast.error(`Failed to fetch requested donations: Please try again later.`);
    },
    refetchOnWindowFocus: false,
  } as UseQueryOptions<AppwriteDonationsResponse, Error, AppwriteDonationsResponse, ["my-requests"]>);
};
