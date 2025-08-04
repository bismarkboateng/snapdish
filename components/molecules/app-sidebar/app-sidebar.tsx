"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/atoms/sidebar";
import { items } from "./app-sidebar.utils";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { LogOut, Search } from "lucide-react";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-[var(--color-surface)] border-r border-[var(--color-border)] w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-8">
            <div className="flex items-center gap-3">
              <h2 className="font-bold text-xl text-[var(--color-text-primary)]">
                SnapDish
              </h2>
            </div>
          </SidebarGroupLabel>
        </SidebarGroup>

        <div className="px-6 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]
              placeholder:text-[var(--color-text-muted)] transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[var(--color-text-muted)] bg-[var(--color-border)] px-1.5 py-0.5 rounded">
              ⌘ K
            </div>
          </div>
        </div>

        <div className="px-6 py-2">
          <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
            Main Menu
          </p>
        </div>

        <SidebarGroup>
          <SidebarGroupContent className="px-3">
            <SidebarMenu className="space-y-1">
              {items.map((item) => {
                const isExactMatch =
                  item.route === "/dashboard" && pathname === "/dashboard";

                const isNestedMatch =
                  item.route !== "/dashboard" &&
                  pathname.startsWith(item.route);

                const isActive = isExactMatch || isNestedMatch;

                return (
                  <SidebarMenuItem key={item.title}>
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
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-[var(--color-border)]">
        <SidebarMenuButton asChild>
          <button
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 
            hover:bg-[var(--color-status-error)]/10 text-[var(--color-status-error)] hover:text-[var(--color-status-error-dark)] cursor-pointer group"
            onClick={() => alert("Logging out...")}
          >
            <LogOut className="h-4 w-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
