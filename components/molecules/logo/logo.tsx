import { Utensils } from "lucide-react";

const Logo = ({
  className = "",
  showText = true,
  size = "w-12 h-12",
}: {
  className?: string;
  showText?: boolean;
  size?: string;
}) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    <div className={`relative ${size}`}>
      <div
        className="w-full h-full bg-gradient-to-br from-[#009379] to-[#007566] rounded-2xl
      flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Utensils className="h-6 w-6 text-white" />
      </div>
      <div className="absolute inset-0 bg-[#009379]/10 rounded-2xl blur-lg -z-10" />
    </div>

    {showText && (
      <div className="flex flex-col">
        <div className="text-lg font-bold bg-gradient-to-r from-[#009379] to-[#007566] bg-clip-text text-transparent tracking-tight">
          SnapDish
        </div>
      </div>
    )}
  </div>
);

export default Logo;
