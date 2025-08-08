import { useState, useMemo } from "react";
import { useGetMyRequestedDonations } from "@/features/donations/hooks/use-get-my-requested-donations";
import { adaptAppwriteDonations } from "../my-donations/my-donations-adapter";
import { Donation } from "../my-donations/my-donations.types";

export const useMyRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data: requestedDonations, isPending } = useGetMyRequestedDonations();

  const requestedDonationsData: Donation[] = useMemo(() => {
    if (Array.isArray(requestedDonations)) {
      return adaptAppwriteDonations(requestedDonations);
    }

    if (
      requestedDonations?.documents &&
      Array.isArray(requestedDonations.documents)
    ) {
      return adaptAppwriteDonations(requestedDonations.documents);
    }

    return [];
  }, [requestedDonations]);

  const filteredRequests = useMemo(() => {
    return requestedDonationsData.filter((request) => {
      const matchesSearch =
        request.foodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || request.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter, requestedDonationsData]);

  const stats = useMemo(() => {
    const total = requestedDonationsData.length;
    const active = requestedDonationsData.filter(
      (r) => r.status === "active"
    ).length;
    const claimed = requestedDonationsData.filter(
      (r) => r.status === "claimed"
    ).length;
    const expired = requestedDonationsData.filter(
      (r) => r.status === "expired"
    ).length;
    const requested = requestedDonationsData.filter(
      (r) => r.status === "requested"
    ).length;

    return { total, active, claimed, expired, requested };
  }, [requestedDonationsData]);

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  return {
    isPending,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredRequests,
    stats,
    clearFilters,
  };
};
