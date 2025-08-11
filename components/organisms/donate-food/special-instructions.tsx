import { AlertCircle } from "lucide-react";
import React from "react";

const SpecialInstructions = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            Special Instructions Before Filling Donation Details
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>
              • One item per request (e.g., 10 bags = 10 separate donations)
            </li>
            <li>• Add a recent photo of the item</li>
            <li>• Clearly describe the food (type, quantity, condition)</li>
            <li>• Ensure it&apos;s safe, packaged, and not expired</li>
            <li>
              • Outside KNUST? Set Franco Hostel as location and send items
              there first
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialInstructions;
