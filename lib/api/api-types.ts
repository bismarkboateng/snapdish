export type ApiError<ErrorDetails = unknown> = {
  status: "error";
  message: string;
  errors?: ErrorDetails;
};

export type ApiSuccess<SuccessData = unknown> = {
  status: "success";
  message: string;
  data?: SuccessData;
};

export type ApiResult<SuccessData = unknown, ErrorDetails = unknown> =
  | ApiSuccess<SuccessData>
  | ApiError<ErrorDetails>;