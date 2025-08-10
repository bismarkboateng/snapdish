"use client";

import { Button } from "@/components/atoms/button";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { DonationRequestsManagerProps } from "./donation-grid.types";
import { useApproveDonationRequest } from "@/features/requests/hooks/use-donation-request-actions";

const DonationRequestsManager = ({
  donationId,
  isFetchingUserDetails,
  requests,
}: DonationRequestsManagerProps) => {
  const { mutate: approveRequest, isPending } = useApproveDonationRequest();
  const [processingRequest] = useState<string | null>(
    null
  );

  const handleApprove = (requestId: string) => {
    approveRequest({ donationId, userId: requestId });
  };

  const handleDecline = (requestId: string) => {
    alert(requestId)
  };

  if (!requests || requests.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          No requests yet for this donation
        </p>
      </div>
    );
  }

  if (isFetchingUserDetails) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          <Loader2 className="inline mr-2" /> Loading user details...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-sm">
          Donation Requests ({requests.length})
        </h4>
      </div>

      <div className="space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm text-gray-900">
                  {request.fullName}
                </p>
              </div>
              <p className="text-xs text-gray-600">{request.email}</p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Button
                size="sm"
                variant="outline"
                className="h-8 w-8 p-0 rounded-full border-green-300 hover:bg-green-50 hover:border-green-400"
                onClick={() => handleApprove(request.id)}
                disabled={processingRequest === request.id}
              >
                {isPending ? (
                  <Loader2 className="inline  text-green-600 h-4 w-4 animate-spin" />
                ) : (
                  <Check className="h-4 w-4 text-green-600" />
                )}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 w-8 p-0 rounded-full border-red-300 hover:bg-red-50 hover:border-red-400"
                onClick={() => handleDecline(request.id)}
                disabled={processingRequest === request.id}
              >
                <X className="h-4 w-4 text-red-600" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationRequestsManager;
