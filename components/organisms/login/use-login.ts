import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData } from "./login.types";
import { useState } from "react";
import { loginInitialValues, loginSchema } from "./login.utils";
import { useLogin } from "@/features/auth/hooks/use-login";

export function useLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginInitialValues,
  });

  const onSubmit = (values: LoginFormData) => {
    login(values);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    showPassword,
    setShowPassword,
    isPending,
  };
}
