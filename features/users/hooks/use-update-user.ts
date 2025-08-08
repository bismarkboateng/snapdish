import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services";
import { UpdateUserDTO, UpdateUserResponse } from "../types";
import { toast } from "sonner";

export const useUpdateUser = () => {
  return useMutation<UpdateUserResponse, Error, UpdateUserDTO>({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success("User updated successfully");
    },
    onError: (error) => {
      toast.error(`Failed to update user: ${error.message}`);
    },
  });
};
