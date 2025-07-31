import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SnapDish - Authentication",
  description: "This application helps people to donate and receive food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
      {children}
    </main>
  );
}
