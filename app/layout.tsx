import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/atoms/sonner";
import { ReactQueryProvider } from "@/providers/react-query-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>
          {children}
          <Toaster expand={true} position="top-right" richColors={true} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
