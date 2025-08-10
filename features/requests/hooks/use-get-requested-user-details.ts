import { useQuery } from "@tanstack/react-query";
import { getRequestedUserDetails } from "../services";

export const useGetRequestedUserDetails = (donationId: string) => {
  return useQuery({
    queryKey: ["requestedUserDetails", donationId],
    queryFn: () => getRequestedUserDetails(donationId),
  });
};
