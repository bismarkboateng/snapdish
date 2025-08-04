import React from "react";

const MyRequestsStats = ({
  stats,
}: {
  stats: { total: number; open: number; fulfilled: number; cancelled: number };
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-text-primary">
          {stats.total}
        </div>
        <div className="text-text-secondary text-sm">Total Requests</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-orange">
          {stats.open}
        </div>
        <div className="text-text-secondary text-sm">Open</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-green">
          {stats.fulfilled}
        </div>
        <div className="text-text-secondary text-sm">Fulfilled</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-red">
          {stats.cancelled}
        </div>
        <div className="text-text-secondary text-sm">Cancelled</div>
      </div>
    </div>
  );
};

export default MyRequestsStats;
