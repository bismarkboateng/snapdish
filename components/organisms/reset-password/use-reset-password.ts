import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import {
  resetPasswordInitialValues,
  resetPasswordSchema,
} from "./reset-password.utils";
import { useResetPassword } from "@/features/auth/hooks/use-reset-password";

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

export function useResetPasswordForm(userId: string, secret: string) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: resetPassword, isPending } = useResetPassword();

  const form = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: resetPasswordInitialValues,
  });

  const onSubmit = (values: ResetPasswordData) => {
    resetPassword({
      userId,
      secret,
      password: values.password,
    });
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isPending
  };
}
