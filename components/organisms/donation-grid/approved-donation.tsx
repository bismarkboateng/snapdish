"use client";

import { Button } from "@/components/atoms/button";
import { CheckCircle, User } from "lucide-react";
import { ApprovedDonationProps } from "./donation-grid.types";

export default function ApprovedDonation({
  approvedUser,
  onClose,
}: Readonly<ApprovedDonationProps>) {
  return (
    <div className="pt-4">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-green-800">
              Donation Approved!
            </h4>
            <p className="text-sm text-green-600">
              You approved{" "}
              <span className="font-medium">{approvedUser.fullName}</span> for
              this donation
            </p>
          </div>
        </div>

        <div className="bg-white border border-green-100 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              Recipient Details:
            </span>
          </div>
          <div className="space-y-1 text-sm text-green-700">
            <p>
              <span className="font-medium">Name:</span> {approvedUser.fullName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {approvedUser.email}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
