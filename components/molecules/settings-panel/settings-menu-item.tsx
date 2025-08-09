import Link from "next/link";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { SettingsMenuItemProps } from "./settings-panel.types";

const SettingsMenuItem = ({
  href,
  label,
  icon: Icon,
  isActive,
}: SettingsMenuItemProps) => (
  <Link
    key={href}
    href={href}
    className={clsx(
      "flex items-center justify-between gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-200 group relative",
      isActive
        ? "bg-[#009379] text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-50 hover:text-[#009379] hover:shadow-sm"
    )}
  >
    <div className="flex items-center gap-2 lg:gap-3">
      <div
        className={clsx(
          "p-1.5 lg:p-2 rounded-md lg:rounded-lg transition-all duration-200",
          isActive
            ? "bg-white/20 text-white"
            : "bg-[#009379]/10 text-[#009379] group-hover:bg-[#009379]/20"
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <span
        className={clsx(
          "font-medium text-sm lg:text-base transition-colors duration-200",
          isActive ? "text-white" : "text-gray-700 group-hover:text-[#009379]"
        )}
      >
        {label}
      </span>
    </div>

    <ChevronRight
      className={clsx(
        "h-4 w-4 transition-all duration-200 hidden sm:block relative z-10",
        isActive
          ? "text-white opacity-100"
          : "text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
      )}
    />

    {isActive && (
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full hidden sm:block z-20" />
    )}
  </Link>
);

export default SettingsMenuItem;
