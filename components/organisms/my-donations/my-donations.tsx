"use client";

import { DonationCard } from "@/components/molecules/settings-panel/donation-card";
import MyDonationsStats from "@/components/organisms/my-donations/my-donations-stats";
import MyDonationsSearchFilter from "@/components/organisms/my-donations/my-donations-search-filter";
import useDonations from "./use-donations";

import { GlobalLoader } from "@/components/molecules/global-loader/global-loader";
import { Button } from "@/components/atoms/button";
import { useState } from "react";
import RequestModal from "../donation-grid/donation-request-modal";

import NoDonations from "./no-donations";

const MyDonations = () => {
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredDonations,
    isPending,
  } = useDonations();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);

  if (isPending) {
    return (
      <GlobalLoader isVisible={isPending} message="Loading your donations" />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Donations</h1>
          <p className="text-text-secondary mt-1">
            Track and manage your food donations
          </p>
        </div>
      </div>
      <MyDonationsStats donations={filteredDonations} />
      <MyDonationsSearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDonations.length > 0 ? (
          filteredDonations.map((donation) => (
            <div key={donation.id}>
              <DonationCard key={donation.id} donation={donation} />
              <Button
                size="sm"
                onClick={() => setIsRequestModalOpen(true)}
                className="bg-[#009379] w-full hover:bg-[var(--color-primary-dark)]
              text-white rounded-tr-none rounded-tl-none py-5
                cursor-pointer"
              >
                View
              </Button>
              <RequestModal
                isOpen={isRequestModalOpen}
                onClose={() => setIsRequestModalOpen(false)}
                donation={donation}
              />
            </div>
          ))
        ) : (
          <NoDonations
            setSearchTerm={setSearchTerm}
            setStatusFilter={setStatusFilter}
          />
        )}
      </div>
    </div>
  );
};

export default MyDonations;
