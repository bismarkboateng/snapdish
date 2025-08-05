"use client";

import { useState, useMemo } from "react";
import { UseDonationGridReturn } from "./donation-grid.types";
import { filterDonations } from "./donation-grid.utils";
import { useGetAllDonations } from "@/features/donations/hooks/use-get-donations";
import { transformAppwriteDonations } from "./donation-adapter";

export const useDonationGrid = (): UseDonationGridReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const {
    data: donationsData,
    isLoading: isDonationsLoading,
    error: donationsError,
  } = useGetAllDonations();

  const donations = useMemo(() => {
    if (!donationsData?.documents) return [];
    
    const transformedDonations = transformAppwriteDonations(donationsData.documents);
    return transformedDonations.filter((donation) => donation.status === "active");
  }, [donationsData]);

  const filteredDonations = useMemo(
    () => filterDonations(donations, searchTerm, filterType),
    [donations, searchTerm, filterType]
  );

  return {
    donations,
    isLoading: isDonationsLoading,
    error: donationsError?.message || null,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    filteredDonations,
  };
};
