import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Authentic Mithila Makhana | Premium Fox Nuts from Darbhanga, Bihar",
  description: "Buy premium quality Mithila Makhana (Fox Nuts) directly from Darbhanga, Bihar. Discover authentic plain, roasted, and flavored makhana with rich heritage from Mithila region.",
  keywords: "mithila makhana, darbhanga makhana, bihar makhana, fox nut mithila, authentic makhana, roasted makhana, flavored makhana",
  openGraph: {
    title: "Authentic Mithila Makhana | Premium Fox Nuts from Darbhanga, Bihar",
    description: "Buy premium quality Mithila Makhana directly from Darbhanga, Bihar",
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
      <body className={`${inter.variable} font-sans antialiased bg-amber-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
