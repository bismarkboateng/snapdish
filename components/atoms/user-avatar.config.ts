import { AvatarSize, AvatarVariant } from "./user-avatar.types";

export const sizeConfig: Record<
  AvatarSize,
  {
    container: string;
    icon: string;
    text: string;
  }
> = {
  sm: {
    container: "w-8 h-8",
    icon: "w-4 h-4",
    text: "text-xs",
  },
  md: {
    container: "w-10 h-10",
    icon: "w-5 h-5",
    text: "text-sm",
  },
  lg: {
    container: "w-12 h-12",
    icon: "w-6 h-6",
    text: "text-base",
  },
  xl: {
    container: "w-16 h-16",
    icon: "w-8 h-8",
    text: "text-lg",
  },
};

export const variantConfig: Record<
  AvatarVariant,
  {
    background: string;
    textColor: string;
    border: string;
    shadow: string;
  }
> = {
  default: {
    background: "bg-[#009379]",
    textColor: "text-white",
    border: "border-[#009379]/20",
    shadow: "shadow-sm",
  },
  gradient: {
    background: "bg-gradient-to-br from-[#009379] via-[#00a882] to-[#007a65]",
    textColor: "text-white",
    border: "border-[#009379]/30",
    shadow: "shadow-lg shadow-[#009379]/20",
  },
  minimal: {
    background: "bg-[#f0fdf4]",
    textColor: "text-[#009379]",
    border: "border-[#e5e7eb]",
    shadow: "shadow-sm",
  },
  success: {
    background: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    textColor: "text-white",
    border: "border-emerald-200",
    shadow: "shadow-lg shadow-emerald-500/20",
  },
  premium: {
    background: "bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600",
    textColor: "text-white",
    border: "border-amber-200",
    shadow: "shadow-lg shadow-amber-500/30",
  },
};
