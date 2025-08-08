import { http } from "@/lib/api/api-http-client";
import { UpdateUserData, UpdateUserDTO, UpdateUserResponse } from "../types";
import { apiRoutes } from "@/lib/api/api-routes";

export const updateUser = async (data: UpdateUserData) => {
  try {
    const result = await http.patch<UpdateUserDTO, UpdateUserResponse>(
      apiRoutes.users.update,
      data
    );

    if ("data" in result) return result.data!;
    return Promise.reject(new Error(result.message ?? "Updating user failed"));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while updating user");
  }
};
