"use client";

import { Clock, MapPin, Users } from "lucide-react";
import { Donation } from "@/components/organisms/my-donations/my-donations.types";
import { formatDate, getStatusColor } from "./settings-panel.utils";

export const RequestCard: React.FC<{ request: Donation }> = ({ request }) => {
  return (
    <div
      className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]
    shadow-[var(--shadow-card)] overflow-hidden transition-all duration-200
    hover:shadow-lg hover:border-[var(--color-primary)]/20"
    >
      <div className="p-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                request.status
              )}`}
            >
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </span>
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">
            {formatDate(request.createdAt)}
          </span>
        </div>
      </div>

      <div className="p-4 pt-0">
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-[var(--color-text-primary)] mb-2 line-clamp-1">
            {request.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
            {request.description}
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
                {request.quantity}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-status-warning)]/10">
              <Clock className="h-3.5 w-3.5 text-[var(--color-status-warning)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">
                Expires At
              </p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {formatDate(request.expiresAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-[var(--color-accent-orange)]/10">
            <MapPin className="h-3.5 w-3.5 text-[var(--color-accent-orange)]" />
          </div>
          <p className="text-sm text-[var(--color-text-muted)] flex-1">
            {request.location}
          </p>
        </div>

        {request.foodType && (
          <div className="mb-4">
            <p className="text-xs text-[var(--color-text-muted)] mb-2">
              Food Type
            </p>
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-background)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-medium">
              {request.foodType}
            </span>
          </div>
        )}

        {request.dietaryInfo && request.dietaryInfo.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-[var(--color-text-muted)] mb-2">
              Dietary Info
            </p>
            <div className="flex flex-wrap gap-2">
              {request.dietaryInfo.map((info: string) => (
                <span
                  key={info}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-status-warning)]/10 text-[var(--color-status-warning)] border border-[var(--color-status-warning)]/20 font-medium"
                >
                  {info}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
