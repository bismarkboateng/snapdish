"use client";

import { Clock, MapPin, Users, AlertTriangle, Heart, X } from "lucide-react";
import { FoodRequest } from "./my-requests-mock";

interface RequestCardProps {
  request: FoodRequest;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  const getStatusColor = (status: FoodRequest["status"]) => {
    switch (status) {
      case "open":
        return "bg-[var(--color-status-success)]/10 text-[var(--color-status-success)] border-[var(--color-status-success)]/20";
      case "fulfilled":
        return "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20";
      case "cancelled":
        return "bg-[var(--color-text-muted)]/10 text-[var(--color-text-muted)] border-[var(--color-text-muted)]/20";
      default:
        return "bg-[var(--color-background)] text-[var(--color-text-muted)] border-[var(--color-border)]";
    }
  };

  const getUrgencyColor = (urgency: FoodRequest["urgency"]) => {
    switch (urgency) {
      case "high":
        return "bg-[var(--color-status-error)]/10 text-[var(--color-status-error)] border-[var(--color-status-error)]/20";
      case "medium":
        return "bg-[var(--color-status-warning)]/10 text-[var(--color-status-warning)] border-[var(--color-status-warning)]/20";
      case "low":
        return "bg-[var(--color-status-info)]/10 text-[var(--color-status-info)] border-[var(--color-status-info)]/20";
      default:
        return "bg-[var(--color-background)] text-[var(--color-text-muted)] border-[var(--color-border)]";
    }
  };

  const getUrgencyIcon = (urgency: FoodRequest["urgency"]) => {
    switch (urgency) {
      case "high":
        return <AlertTriangle className="h-3 w-3" />;
      case "medium":
        return <Clock className="h-3 w-3" />;
      case "low":
        return <Heart className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-[var(--color-primary)]/20">
      {/* Header with Status and Urgency */}
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
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(
                request.urgency
              )}`}
            >
              {getUrgencyIcon(request.urgency)}
              {request.urgency.charAt(0).toUpperCase() +
                request.urgency.slice(1)}
            </span>
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">
            {formatDate(request.createdAt)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-0">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-[var(--color-text-primary)] mb-2 line-clamp-1">
            {request.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
            {request.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
              <Users className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Servings</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {request.servings}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[var(--color-status-warning)]/10">
              <Clock className="h-3.5 w-3.5 text-[var(--color-status-warning)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">
                Needed by
              </p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {formatDate(request.neededBy)}
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-[var(--color-accent-orange)]/10">
            <MapPin className="h-3.5 w-3.5 text-[var(--color-accent-orange)]" />
          </div>
          <p className="text-sm text-[var(--color-text-muted)] flex-1">
            {request.location}
          </p>
        </div>

        {/* Requested Food Types */}
        <div className="mb-4">
          <p className="text-xs text-[var(--color-text-muted)] mb-2">
            Requested Food Types
          </p>
          <div className="flex flex-wrap gap-2">
            {request.requestedFoodTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-background)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Dietary Restrictions (if any) */}
        {request.dietaryRestrictions &&
          request.dietaryRestrictions.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-[var(--color-text-muted)] mb-2">
                Dietary Restrictions
              </p>
              <div className="flex flex-wrap gap-2">
                {request.dietaryRestrictions.map((restriction) => (
                  <span
                    key={restriction}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-status-warning)]/10 text-[var(--color-status-warning)] border border-[var(--color-status-warning)]/20 font-medium"
                  >
                    {restriction}
                  </span>
                ))}
              </div>
            </div>
          )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {request.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[var(--color-background)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Donor (if fulfilled) */}
        {request.status === "fulfilled" && request.donor && (
          <div className="bg-[var(--color-primary)]/5 rounded-xl p-3 border border-[var(--color-primary)]/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white text-sm font-medium">
                {request.donor.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Fulfilled by
                </p>
                <p className="text-sm font-medium text-[var(--color-primary)]">
                  {request.donor.name}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Cancelled Notice */}
        {request.status === "cancelled" && (
          <div className="bg-[var(--color-text-muted)]/5 rounded-xl p-3 border border-[var(--color-text-muted)]/10">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-full bg-[var(--color-text-muted)]/10">
                <X className="h-4 w-4 text-[var(--color-text-muted)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-muted)]">
                  Request Cancelled
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  This request is no longer active
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
