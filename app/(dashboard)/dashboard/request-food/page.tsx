import { DonationGrid } from "@/components/organisms/donation-grid";
import { Button } from "@/components/atoms/button";
import { Plus } from "lucide-react";

export default function RequestFoodPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Request Food
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                Browse available food donations from your community or create a
                custom request to get the help you need.
              </p>
            </div>

            <div className="xl:flex-shrink-0">
              <Button className="cursor-pointer bg-[#009379] hover:bg-[#007566] text-white flex items-center gap-2 w-full xl:w-auto px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                <Plus className="w-5 h-5" />
                Create Custom Request
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          <DonationGrid className="gap-4 sm:gap-6" />
        </div>
      </div>
    </div>
  );
}
