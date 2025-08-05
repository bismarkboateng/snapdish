import { useGetMyDonations } from "@/features/donations/hooks/use-get-my-donations";
import { useState, useMemo } from "react";
import { adaptAppwriteDonations } from "./my-donations-adapter";
import { Donation } from "./my-donations.types";

const useDonations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { data: myDonationsData, isPending } = useGetMyDonations();

  const donations: Donation[] = useMemo(() => {
    if (Array.isArray(myDonationsData)) {
      return adaptAppwriteDonations(myDonationsData);
    }

    if (
      myDonationsData?.documents &&
      Array.isArray(myDonationsData.documents)
    ) {
      return adaptAppwriteDonations(myDonationsData.documents);
    }

    return [];
  }, [myDonationsData]);

  const filteredDonations = useMemo(() => {
    return donations.filter((donation) => {
      const matchesSearch =
        donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || donation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [donations, searchTerm, statusFilter]);

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredDonations,
    donations,
    isPending,
  };
};

export default useDonations;
