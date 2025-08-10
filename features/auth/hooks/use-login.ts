"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginUserDTO, LoginUserResponse } from "../types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "../services";

type LoginUserMutation = ReturnType<
  typeof useMutation<LoginUserResponse, Error, LoginUserDTO>
>;

export const useLogin = (): LoginUserMutation => {
  const router = useRouter();

  return useMutation<LoginUserResponse, Error, LoginUserDTO>({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    },
    onError: () => {
      toast.error("Login failed. Please try again!");
    },
  });
};
