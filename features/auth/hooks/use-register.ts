"use client";

import { useMutation } from "@tanstack/react-query";
import { RegisterUserDTO, RegisterUserResponse } from "../types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "../services";

type RegisterUserMutation = ReturnType<
  typeof useMutation<RegisterUserResponse, Error, RegisterUserDTO>
>;

export const useRegister = (): RegisterUserMutation => {
  const router = useRouter();

  return useMutation<RegisterUserResponse, Error, RegisterUserDTO>({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful! Redirecting to login..");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    },
    onError: (error) => {
      toast.error(`Registration failed: ${error.message}`);
    },  
  });
};
