"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { Input } from "@/components/atoms/input";

import { Button } from "@/components/atoms/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Card } from "@/components/atoms/card";

import { useDonationGrid } from "./use-donation-grid";
import { DonationGridProps } from "./donation-grid.types";

import type { Donation } from "@/components/molecules/settings-panel/my-donations-mock";
import { DonationCard } from "@/components/molecules/settings-panel/donation-card";
import { SimpleErrorState } from "@/components/molecules/simple-error-state/simple-error-state";
import RequestModal from "./donation-request-modal";
import NoDonations from "./no-donations";
import { FOOD_TYPE_FILTERS } from "./donation-grid.constants";

export function DonationGrid({
  className = "",
  onRequestFood,
}: Readonly<DonationGridProps>) {
  const {
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    filteredDonations,
  } = useDonationGrid();

  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(
    null
  );
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const handleRequestFood = (donation: Donation) => {
    setSelectedDonation(donation);
    setIsRequestModalOpen(true);
    onRequestFood?.(donation);
  };

  if (error) {
    return (
      <SimpleErrorState
        title="Failed to load donations"
        message={`Unable to fetch available food donations. ${error}`}
        showRetry={true}
        onRetry={() => window.location.reload()}
        variant="default"
      />
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 mb-4 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 xl:gap-4">
          <div className="flex-1 xl:max-w-md">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Donations
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="search"
                placeholder="Search by food type, location, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 border-gray-300 focus:border-[#009379] focus:ring-[#009379]"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 xl:flex-shrink-0">
            <div className="min-w-0">
              <label htmlFor="filter-type" className="block text-sm font-medium text-gray-700 mb-1">
                Food Type
              </label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter-type" className="w-full sm:w-48 h-11 border-gray-300">
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {FOOD_TYPE_FILTERS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-4 md:p-6 animate-pulse">
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                  <div className="h-3 bg-muted rounded w-full"></div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {!isLoading && filteredDonations.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredDonations.map((donation, index) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <DonationCard donation={donation} />

                <div>
                  <Button
                    size="sm"
                    onClick={() => handleRequestFood(donation)}
                    className="bg-[#009379] w-full hover:bg-[var(--color-primary-dark)]
                      text-white rounded-tr-none rounded-tl-none py-5
                      cursor-pointer"
                  >
                    Request
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isLoading && filteredDonations.length === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
            <div className="sm:col-span-2 xl:col-span-3 2xl:col-span-4 flex justify-center items-center min-h-[300px]">
              <NoDonations searchTerm={searchTerm} filterType={filterType} />
            </div>
          </div>
        )}
      </div>

      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        donation={selectedDonation}
      />
    </div>
  );
}
