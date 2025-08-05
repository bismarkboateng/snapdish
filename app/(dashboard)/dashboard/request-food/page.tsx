import { DonationGrid } from "@/components/organisms/donation-grid";
import { Button } from "@/components/atoms/button";
import { Plus } from "lucide-react";

export default function RequestFoodPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            Request Food
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl">
            Browse available food donations from your community or create a
            custom request.
          </p>
        </div>

        <Button className="bg-[#009379] hover:bg-[#007566] text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Custom Request
        </Button>
      </div>

      <DonationGrid />
    </div>
  );
}
