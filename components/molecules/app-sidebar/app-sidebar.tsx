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
} from "@/components/atoms/sidebar";
import { items } from "./app-sidebar.utils";

import { usePathname } from "next/navigation";
import { LogOut, Search } from "lucide-react";
import Logo from "@/components/molecules/logo/logo";
import { SidebarMenuItemComponent } from "./sidebar-menu-item";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-[var(--color-surface)] border-r border-[var(--color-border)] w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-6">
            <Logo showText={true} size="w-10 h-10" className="scale-90" />
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
              {items.map((item) => (
                <SidebarMenuItemComponent
                  key={item.title}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <SidebarMenuButton asChild>
          <button
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 
            hover:bg-red-50 text-red-600 hover:text-red-700 cursor-pointer group border border-transparent hover:border-red-200"
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
