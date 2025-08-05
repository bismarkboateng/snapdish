"use client";

import { Button } from "@/components/atoms/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/atoms/sheet";

import { Separator } from "@/components/atoms/separator";
import { RequestModalProps } from "./donation-grid.types";

export default function RequestModal({
  isOpen,
  onClose,
  donation,
}: Readonly<RequestModalProps>) {
  if (!donation) return null;

  const handleRequest = () => {
    console.log("Requesting donation:", donation.id);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Request Food Donation</SheetTitle>
          <SheetDescription>
            Send a request for this food donation
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">{donation.title}</h3>
            <p className="text-sm text-muted-foreground">
              {donation.description}
            </p>
          </div>

          <Separator />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Food Type:</span>
              <span className="capitalize">{donation.foodType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Quantity:</span>
              <span>{donation.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span>{donation.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pickup Times:</span>
              <span>{donation.availablePickupTimes}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Expires:</span>
              <span>{new Date(donation.expiresAt).toLocaleDateString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contact:</span>
              <span>
                {donation.contactMethod === "email" && donation.email}
                {donation.contactMethod === "phone" && donation.phone}
                {donation.contactMethod === "both" && "Email & Phone available"}
              </span>
            </div>
            
            {donation.dietaryInfo && donation.dietaryInfo.length > 0 && (
              <div>
                <span className="text-muted-foreground">Dietary Info:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {donation.dietaryInfo.map((info) => (
                    <span
                      key={info}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-yellow-100 text-yellow-800 border border-yellow-200"
                    >
                      {info}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {donation.specialInstructions && (
            <>
              <Separator />
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-600 font-medium mb-1">Special Instructions</p>
                <p className="text-sm text-blue-800">{donation.specialInstructions}</p>
              </div>
            </>
          )}

          <Separator />

          <div className="flex gap-2 pt-4">
            <Button onClick={handleRequest} className="flex-1">
              Send Request
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
