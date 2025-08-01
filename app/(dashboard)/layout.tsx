import { SidebarProvider } from "@/components/atoms/sidebar";
import AppSidebar from "@/components/molecules/app-sidebar/app-sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SnapDish - Dashboard",
  description: "Manage your food donations and requests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-20 pt-8">{children}</main>
    </SidebarProvider>
  );
}
