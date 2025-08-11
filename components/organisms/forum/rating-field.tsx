import { Star } from "lucide-react";

interface RatingFieldProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  getRatingLabel: () => string;
}

export const RatingField = ({ rating, onRatingChange, getRatingLabel }: RatingFieldProps) => {
  return (
    <div>
      <div className="block text-sm font-medium text-[#1f1f1f] mb-2">
        Rate your experience
      </div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={`rating-${star}`}
            type="button"
            onClick={() => onRatingChange(star)}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Star
              className={`w-6 h-6 ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-[#6e6e6e]">
          {getRatingLabel()}
        </span>
      </div>
    </div>
  );
};
