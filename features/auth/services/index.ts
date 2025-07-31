import { apiRoutes } from "@/lib/api/api-routes";
import {
  LoginUserDTO,
  LoginUserResponse,
  RegisterUserDTO,
  RegisterUserResponse,
} from "../types";
import { http } from "@/lib/api/api-http-client";

export const registerUser = async (
  payload: RegisterUserDTO
): Promise<RegisterUserResponse> => {
  try {
    const result = await http.post<
      Omit<RegisterUserDTO, "confirmPassword">,
      RegisterUserResponse
    >(apiRoutes.auth.register, payload);

    if ("data" in result) return result.data!;
    return Promise.reject(new Error(result.message ?? "Registration failed"));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred during registration");
  }
};

export const loginUser = async (
  payload: LoginUserDTO
): Promise<LoginUserResponse> => {
  try {
    const result = await http.post<LoginUserDTO, LoginUserResponse>(
      apiRoutes.auth.login,
      payload
    );

    if ("data" in result) return result.data!;
    return Promise.reject(new Error(result.message ?? "Login failed"));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred during login");
  }
};
