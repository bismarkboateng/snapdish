import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  forgotPasswordInitialValues,
  forgotPasswordSchema,
} from "./forgot-password.utils";
import { ForgotPasswordData } from "./forgot-password.types";
import { useForgotPassword } from "@/features/auth/hooks/use-forgot-password";

export function useForgotPasswordForm() {
  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: forgotPasswordInitialValues,
  });
  const { mutate: forgotPassword, isPending } = useForgotPassword(form);

  const onSubmit = (values: ForgotPasswordData) => {
    forgotPassword(values.email);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isPending,
  };
}
