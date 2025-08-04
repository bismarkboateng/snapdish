const DashboardBarPriorities = () => {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#e02e2e] rounded-full"></div>
        <span className="text-sm text-[#6e6e6e]">High Priority (24hrs)</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#ffb84c] rounded-full"></div>
        <span className="text-sm text-[#6e6e6e]">Medium Priority (48hrs)</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#53b6ff] rounded-full"></div>
        <span className="text-sm text-[#6e6e6e]">Low Priority (7 days)</span>
      </div>
    </div>
  );
};

export default DashboardBarPriorities;
