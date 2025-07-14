import type { Metadata } from "next";
import { Navbar } from "@/components/molecules/navbar/navbar";
import { Footer } from "@/components/molecules/footer/footer";

export const metadata: Metadata = {
  title: "SnapDish - Donate and receive food",
  description: "This application helps people to donate and receive food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
