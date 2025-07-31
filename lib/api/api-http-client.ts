import { baseRequest } from "./api-https";
import { type ApiResult } from "./api-types";

export const http = {
  get: <TResponse = unknown>(endpoint: string): Promise<ApiResult<TResponse>> =>
    baseRequest<never, TResponse>(endpoint, "GET"),

  post: <TRequest = unknown, TResponse = unknown>(
    endpoint: string,
    body: TRequest,
  ): Promise<ApiResult<TResponse>> =>
    baseRequest<TRequest, TResponse>(endpoint, "POST", body),

  put: <TRequest = unknown, TResponse = unknown>(
    endpoint: string,
    body: TRequest,
  ): Promise<ApiResult<TResponse>> =>
    baseRequest<TRequest, TResponse>(endpoint, "PUT", body),

  patch: <TRequest = unknown, TResponse = unknown>(
    endpoint: string,
    body: TRequest,
  ): Promise<ApiResult<TResponse>> =>
    baseRequest<TRequest, TResponse>(endpoint, "PATCH", body),

  delete: <TRequest = unknown, TResponse = unknown>(
    endpoint: string,
    body?: TRequest,
  ): Promise<ApiResult<TResponse>> =>
    baseRequest<TRequest, TResponse>(endpoint, "DELETE", body),
};