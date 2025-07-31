import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  forgotPasswordInitialValues,
  forgotPasswordSchema,
} from "./forgot-password.utils";
import { ForgotPasswordData } from "./forgot-password.types";

export function useForgotPassword() {
  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: forgotPasswordInitialValues,
  });

  const onSubmit = (values: ForgotPasswordData) => {
    console.log("Sending password reset email to:", values.email);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
  };
}
