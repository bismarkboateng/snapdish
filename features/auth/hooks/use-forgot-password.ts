"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { forgotPassword } from "../services";
import { UseFormReturn } from "react-hook-form";

import { ForgotPasswordData } from "@/components/organisms/forgot-password/forgot-password.types";
import { ForgotPasswordMutation } from "../types";

export const useForgotPassword = (
  form: UseFormReturn<ForgotPasswordData, unknown, ForgotPasswordData>
): ForgotPasswordMutation => {
  return useMutation<void, Error, string>({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast("Password reset email sent successfully, check your inbox!");
      form.reset({ email: "" });
    },
    onError: () => {
      toast("Forgot password failed. Please try again!");
    },
  });
};
