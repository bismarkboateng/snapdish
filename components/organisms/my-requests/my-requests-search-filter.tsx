import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/atoms/select";
import React from "react";
import { MyRequestsStatsProps } from "./my-requests-types";

const MyRequestsSearchFilter = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}: MyRequestsStatsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-500">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
        <input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-sm focus:shadow-md"
        />
      </div>
      <div className="w-[200px]">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full h-10 px-3 py-2 border border-border-light rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-sm focus:shadow-md">
            <Filter className="mr-2 h-4 w-4 text-text-tertiary" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="claimed">Claimed</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
            <SelectItem value="requested">Requested</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MyRequestsSearchFilter;
