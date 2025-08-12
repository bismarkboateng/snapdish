import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services";
import { UserProfileData } from "../types";

export const useCurrentUser = () => {
  return useQuery<UserProfileData, Error>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const result = await getCurrentUser();

      if (result.status === "success" && result.data) {
        return result.data;
      }

      throw new Error("Failed to get user data");
    },
    staleTime: 5 * 60 * 1000,
  });
};
