export type RequestedUserDetailsResponse = {
  data?: {
    users?: { fullName: string; email: string; id: string }[];
  };
  message?: string;
};

export type DonationRequestActionResponse = {
  data?: {
    success: boolean;
    message: string;
    donationId: string;
    userId: string;
  };
  message?: string;
};

export type ApproveDeclineRequestParams = {
  donationId: string;
  userId: string;
};
