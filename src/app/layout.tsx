import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteKeywords } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://mithila-makhana.example");

export const metadata: Metadata = {
  title: {
    default: "Authentic Mithila Makhana | Darbhanga Bihar",
    template: "%s | Mithila Makhana",
  },
  description:
    "Shop premium Mithila makhana from Darbhanga, Bihar. Plain, roasted, flavored, makhana powder, and gift packs with COD/UPI and fast delivery.",
  keywords: siteKeywords,
  metadataBase,
  openGraph: {
    title: "Authentic Mithila Makhana | Darbhanga Bihar",
    description:
      "Premium fox nuts sourced from Darbhanga farmers. Freshly roasted, lab tested, and shipped pan-India.",
    url: metadataBase,
    siteName: "Mithila Makhana",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Makhana bowl",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: metadataBase },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-white to-[#f9f3ea]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
