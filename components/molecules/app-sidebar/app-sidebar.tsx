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
import Logo from "../logo/logo";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="relative py-10 px-4">
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu className="space-y-4">
              {items.map((item) => {
                const isExactMatch =
                  item.route === "/dashboard" && pathname === "/dashboard";

                const isNestedMatch =
                  item.route !== "/dashboard" &&
                  pathname.startsWith(item.route);

                const isActive = isExactMatch || isNestedMatch;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`py-2 px-4  hover:bg-orange-base/7 rounded-tr-lg rounded-br-lg
                    ${
                      isActive
                        ? "border-l-2 border-orange-base/50 bg-orange-base/5"
                        : ""
                    }
                    `}
                  >
                    <SidebarMenuButton asChild>
                      <Link
                        className="flex items-center gap-3"
                        href={item.route}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-4">
        <SidebarMenuButton asChild className="px-6 py-2">
          <button
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => alert("Logging out...")}
          >
            <LogOut className="text-red-400" />
            <span className="text-red-400">Logout</span>
          </button>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
