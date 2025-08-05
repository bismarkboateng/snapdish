"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
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
    <div className={`space-y-6 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search available donations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
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

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
                <div className="h-3 bg-muted rounded w-full"></div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {!isLoading && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
        <NoDonations searchTerm={searchTerm} filterType={filterType} />
      )}

      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        donation={selectedDonation}
      />
    </div>
  );
}
