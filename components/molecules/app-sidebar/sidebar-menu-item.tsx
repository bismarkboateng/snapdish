import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/atoms/sidebar";
import { SidebarMenuItemProps } from "./app-sidebar.types";

export function SidebarMenuItemComponent({
  item,
  pathname,
}: Readonly<SidebarMenuItemProps>) {
  const isExactMatch = item.route === "/dashboard" && pathname === "/dashboard";
  const isNestedMatch =
    item.route !== "/dashboard" && pathname.startsWith(item.route);
  const isActive = isExactMatch || isNestedMatch;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          className={`
            flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
            ${
              isActive
                ? "bg-[#009379] text-white shadow-sm"
                : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]"
            }
          `}
          href={item.route}
        >
          <item.icon
            className={`
              h-5 w-5 transition-colors duration-200
              ${
                isActive
                  ? "text-white"
                  : "text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]"
              }
            `}
          />
          <span
            className={`
              font-medium text-sm
              ${
                isActive
                  ? "text-white"
                  : "text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]"
              }
            `}
          >
            {item.title}
          </span>

          {isActive && (
            <div className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full"></div>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
