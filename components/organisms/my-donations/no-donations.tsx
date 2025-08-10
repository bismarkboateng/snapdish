import { Button } from "@/components/atoms/button";
import { Search } from "lucide-react";
import { NoDonationsProps } from "./my-donations.types";

const NoDonations = ({ setSearchTerm, setStatusFilter }: NoDonationsProps) => {
  return (
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
        <Button
          variant="default"
          onClick={() => {
            setSearchTerm("");
            setStatusFilter("all");
          }}
          className="px-4 py-2 bg-[#009379] text-white rounded-lg hover:bg-[var(--color-primary-dark)]
                transition-colors duration-200 cursor-pointer"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default NoDonations;
