import { Camera } from "lucide-react";

export const PhotoUploadField = () => {
  return (
    <div>
      <div className="block text-sm font-medium text-[#1f1f1f] mb-2">
        Photos (optional)
      </div>
      <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center bg-white/20 backdrop-blur-sm hover:border-[#009379]/50 transition-colors">
        <Camera className="w-8 h-8 text-[#6e6e6e] mx-auto mb-2" />
        <p className="text-sm text-[#6e6e6e]">Add photos to your review</p>
        <p className="text-xs text-[#6e6e6e] mt-1">Coming soon...</p>
      </div>
    </div>
  );
};
