"use client";

import { DonationCard } from "@/components/molecules/settings-panel/donation-card";
import { Search } from "lucide-react";
import MyDonationsStats from "@/components/organisms/my-donations/my-donations-stats";
import MyDonationsSearchFilter from "@/components/organisms/my-donations/my-donations-search-filter";

import useDonations from "./use-donations";

const MyDonations = () => {
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredDonations,
  } = useDonations();

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
      <MyDonationsStats />
      <MyDonationsSearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDonations.length > 0 ? (
          filteredDonations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))
        ) : (
          <div className="col-span-full">
            <div className="bg-[var(--color-surface)] rounded-2xl p-12 border border-[var(--color-border)] text-center">
              <div className="w-16 h-16 bg-[var(--color-text-muted)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-[var(--color-text-muted)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                No donations found
              </h3>
              <p className="text-[var(--color-text-muted)] mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                }}
                className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
