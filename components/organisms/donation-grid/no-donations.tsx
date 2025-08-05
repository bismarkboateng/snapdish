import { Card } from "@/components/atoms/card";
import { Search } from "lucide-react";
import { NoDonationsProps } from "./donation-grid.types";

const NoDonations = ({ searchTerm, filterType }: NoDonationsProps) => {
  return (
    <Card className="p-12 text-center">
      <div className="space-y-3">
        <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
          <Search className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium">No donations found</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {searchTerm || filterType !== "all"
            ? "Try adjusting your search or filter criteria."
            : "There are no available donations at the moment. Check back later!"}
        </p>
      </div>
    </Card>
  );
};

export default NoDonations;
