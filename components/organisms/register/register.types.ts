import z from "zod";
import { registerSchema } from "./register.utils";

export interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterFormDataType = z.infer<typeof registerSchema>;
