import { Filter, Search } from "lucide-react";
import { MyDonationsSearchFilterProps } from "./my-donations.types";

const MyDonationsSearchFilter = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}: MyDonationsSearchFilterProps) => {
  return (
    <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search donations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]
                placeholder:text-[var(--color-text-muted)] transition-all duration-200"
            />
          </div>
        </div>

        <div className="sm:w-48">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]
                text-[var(--color-text-primary)] transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="claimed">Claimed</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonationsSearchFilter;
