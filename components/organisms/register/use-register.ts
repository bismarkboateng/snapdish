import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerInitialValues, registerSchema } from "./register.utils";
import { RegisterFormDataType } from "./register.types";
import { useState } from "react";
import { useRegister } from "@/features/auth/hooks/use-register";

export function useRegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: register, isPending } = useRegister();

  const form = useForm<RegisterFormDataType>({
    resolver: zodResolver(registerSchema),
    defaultValues: registerInitialValues,
  });

  const onSubmit = (values: RegisterFormDataType) => {
    const userData = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    };
    register(userData);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isPending,
  };
}
