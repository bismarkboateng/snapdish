import { SidebarProvider, SidebarTrigger } from "@/components/atoms/sidebar";
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
      <main className="w-full">
        <div className="md:hidden sticky top-0 z-40 bg-white border-b border-[var(--color-border)] px-4 py-3">
          <div className="flex items-center justify-between">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">Dashboard</h1>
            <div></div>
          </div>
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 pt-4 sm:pt-6 lg:pt-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
