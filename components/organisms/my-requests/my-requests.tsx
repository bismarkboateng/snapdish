"use client";

import { RequestCard } from "@/components/molecules/settings-panel/request-card";
import MyRequestsStats from "./my-requests-stats";
import MyRequestsSearchFilter from "./my-requests-search-filter";
import { useMyRequests } from "./use-my-requests";

const MyRequests = () => {
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredRequests,
    stats,
    clearFilters,
  } = useMyRequests();

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Requests</h1>
          <p className="text-text-secondary mt-1">
            Track and manage your food requests
          </p>
        </div>
      </div>

      <MyRequestsStats stats={stats} />

      <MyRequestsSearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {filteredRequests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-text-secondary mb-2">No requests found</div>
          {(searchTerm || statusFilter !== "all") && (
            <button
              onClick={clearFilters}
              className="text-primary hover:text-primary-700 text-sm underline"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
