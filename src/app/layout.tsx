import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mithila Makhana - Authentic Darbhanga Bihar Fox Nuts | Premium Quality",
  description: "Buy authentic Mithila Makhana (Fox Nuts) from Darbhanga, Bihar. Premium quality plain, roasted, and flavored makhana with traditional farming methods. Best makhana from the Mithila region.",
  keywords: "mithila makhana, darbhanga makhana, bihar makhana, fox nut mithila, premium fox nuts, authentic makhana",
  openGraph: {
    title: "Mithila Makhana - Authentic Darbhanga Bihar Fox Nuts",
    description: "Premium quality Makhana from the heartland of Mithila region",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
