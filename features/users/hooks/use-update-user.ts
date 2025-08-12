import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services";
import { UpdateUserDTO, UpdateUserResponse } from "../types";
import { toast } from "sonner";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateUserResponse, Error, UpdateUserDTO>({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: (error) => {
      toast.error(`Failed to update user: ${error.message}`);
    },
  });
};
