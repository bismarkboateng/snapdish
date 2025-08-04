"use client";

import { Clock, MapPin, Users, Tag } from "lucide-react";
import { DonationCardProps } from "./settings-panel.types";
import { formatDate, getStatusColor } from "./settings-panel.utils";

export const DonationCard: React.FC<DonationCardProps> = ({ donation }) => {
  return (
    <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-[var(--color-primary)]/20">
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

        <div className="flex items-center gap-2 mb-4">
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

        <div className="flex flex-wrap gap-2 mb-4">
          {donation.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-background)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {donation.status === "claimed" && donation.recipient && (
          <div className="bg-[var(--color-primary)]/5 rounded-xl p-3 border border-[var(--color-primary)]/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white text-sm font-medium">
                {donation.recipient.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Claimed by
                </p>
                <p className="text-sm font-medium text-[var(--color-primary)]">
                  {donation.recipient.name}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
