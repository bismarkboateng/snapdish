import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { type ApiResult, type ApiError } from "./api-types";

export const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error instanceof Error ? error : new Error("Request failed")
    );
  }
);

export const baseRequest = async <TRequest = unknown, TResponse = unknown>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: TRequest
): Promise<ApiResult<TResponse>> => {
  try {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      data: body,
    };
    
    const response = await axiosInstance(config);

    if (
      response.data &&
      typeof response.data === "object" &&
      "data" in response.data
    ) {
      return {
        status: "success",
        message: response.data.message,
        data: response.data.data,
      };
    } else {
      return {
        status: "success",
        message: response.data.message ?? undefined,
        data: response.data,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      switch (true) {
        case Boolean(error.response): {
          const errorData = error.response?.data as ApiError;
          return {
            status: "error",
            message:
              errorData?.message ||
              "An error occurred while processing your request.",
            errors: errorData?.errors,
          };
        }

        case Boolean(error.request):
          return {
            status: "error",
            message:
              "No response from server. Please check your network connection.",
          };

        default:
          return {
            status: "error",
            message: "An unexpected Axios error occurred.",
            errors: error,
          };
      }
    }

    return {
      status: "error",
      message: "An unexpected error occurred.",
      errors: error,
    };
  }
};
