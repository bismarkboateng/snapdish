import { useState, useMemo } from "react";
import { mockRequests } from "@/components/molecules/settings-panel/my-requests-mock";

export const useMyRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRequests = useMemo(() => {
    return mockRequests.filter((request) => {
      const matchesSearch =
        request.requestedFoodTypes.some((item: string) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || request.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const stats = useMemo(() => {
    const total = mockRequests.length;
    const open = mockRequests.filter((r) => r.status === "open").length;
    const fulfilled = mockRequests.filter(
      (r) => r.status === "fulfilled"
    ).length;
    const cancelled = mockRequests.filter(
      (r) => r.status === "cancelled"
    ).length;

    return { total, open, fulfilled, cancelled };
  }, []);

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredRequests,
    stats,
    clearFilters,
  };
};
