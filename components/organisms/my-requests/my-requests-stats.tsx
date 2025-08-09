import React from "react";

const MyRequestsStats = ({
  stats,
}: {
  stats: {
    total: number;
    active: number;
    claimed: number;
    expired: number;
    requested: number;
  };
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-text-primary">
          {stats.total}
        </div>
        <div className="text-text-secondary text-sm">Total Requests</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-orange">
          {stats.active}
        </div>
        <div className="text-text-secondary text-sm">Active</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-green">
          {stats.claimed}
        </div>
        <div className="text-text-secondary text-sm">Claimed</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-red">
          {stats.expired}
        </div>
        <div className="text-text-secondary text-sm">Expired</div>
      </div>
      <div className="bg-background-secondary rounded-xl p-4 border border-border-light">
        <div className="text-2xl font-bold text-accent-yellow">
          {stats.requested}
        </div>
        <div className="text-text-secondary text-sm">Requested</div>
      </div>
    </div>
  );
};

export default MyRequestsStats;
