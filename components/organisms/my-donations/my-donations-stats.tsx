import { Donation } from "./my-donations.types";

const MyDonationsStats = ({ donations }: { donations: Donation[] }) => {

 const getStatusCount = (status: string) => {
    if (status === "all") return donations.length;
    return donations.filter((d) => d.status === status).length;
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-[var(--color-surface)] rounded-2xl p-4 border border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
            <div className="w-4 h-4 bg-[var(--color-primary)] rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Total</p>
            <p className="text-xl font-bold text-[var(--color-text-primary)]">
              {getStatusCount("all")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-surface)] rounded-2xl p-4 border border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--color-status-success)]/10">
            <div className="w-4 h-4 bg-[var(--color-status-success)] rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Active</p>
            <p className="text-xl font-bold text-[var(--color-status-success)]">
              {getStatusCount("active")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-surface)] rounded-2xl p-4 border border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
            <div className="w-4 h-4 bg-[var(--color-primary)] rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Claimed</p>
            <p className="text-xl font-bold text-[var(--color-primary)]">
              {getStatusCount("claimed")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-surface)] rounded-2xl p-4 border border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--color-text-muted)]/10">
            <div className="w-4 h-4 bg-[var(--color-text-muted)] rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Expired</p>
            <p className="text-xl font-bold text-[var(--color-text-muted)]">
              {getStatusCount("expired")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonationsStats;
