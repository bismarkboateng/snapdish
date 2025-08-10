"use client";

import {
  Clock,
  MapPin,
  Users,
  Tag,
  Phone,
  Mail,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { DonationCardProps } from "./settings-panel.types";
import { formatDate, getStatusColor } from "./settings-panel.utils";

export const DonationCard: React.FC<DonationCardProps> = ({ donation }) => {
  return (
    <div
      className="bg-[var(--color-surface)] rounded-tr-2xl rounded-tl-2xl border
    border-[var(--color-border)] shadow-[var(--shadow-card)] overflow-hidden transition-all
    duration-200 hover:shadow-lg hover:border-[var(--color-primary)]/20"
    >
      <div className="p-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
              donation.status
            )}`}
          >
            {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            {formatDate(donation.createdAt)}
          </span>
        </div>
      </div>

      <div className="p-4 pt-0">
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-[var(--color-text-primary)] mb-2 line-clamp-1">
            {donation.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
            {donation.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
              <Users className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Quantity</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {donation.quantity}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-secondary)]/10">
              <Tag className="h-3.5 w-3.5 text-[var(--color-secondary)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Type</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {donation.foodType}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-[var(--color-accent-orange)]/10">
            <MapPin className="h-3.5 w-3.5 text-[var(--color-accent-orange)]" />
          </div>
          <p className="text-sm text-[var(--color-text-muted)] flex-1">
            {donation.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-status-warning)]/10">
              <Clock className="h-3.5 w-3.5 text-[var(--color-status-warning)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Expires</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {formatDate(donation.expiresAt)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
              <Calendar className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Pickup</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {donation.availablePickupTimes}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-[var(--color-accent-blue)]/10">
            {donation.contactMethod === "email" && (
              <Mail className="h-3.5 w-3.5 text-[var(--color-accent-blue)]" />
            )}
            {donation.contactMethod === "phone" && (
              <Phone className="h-3.5 w-3.5 text-[var(--color-accent-blue)]" />
            )}
            {donation.contactMethod === "both" && (
              <Mail className="h-3.5 w-3.5 text-[var(--color-accent-blue)]" />
            )}
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Contact</p>
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              {donation.contactMethod === "email" && donation.email}
              {donation.contactMethod === "phone" && donation.phone}
              {donation.contactMethod === "both" && "Email & Phone"}
            </p>
          </div>
        </div>

        {donation.dietaryInfo && donation.dietaryInfo.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-[var(--color-status-info)]/10">
                <AlertCircle className="h-3.5 w-3.5 text-[var(--color-status-info)]" />
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">
                Dietary Info
              </p>
            </div>
            <div className="flex flex-wrap gap-1 ml-7">
              {donation.dietaryInfo.map((info) => (
                <span
                  key={info}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-status-info)]/10 text-[var(--color-status-info)] border border-[var(--color-status-info)]/20"
                >
                  {info}
                </span>
              ))}
            </div>
          </div>
        )}

        {donation.specialInstructions && (
          <div className="mb-4 p-3 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-muted)] mb-1">
              Special Instructions
            </p>
            <p className="text-sm text-[var(--color-text-primary)]">
              {donation.specialInstructions}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
