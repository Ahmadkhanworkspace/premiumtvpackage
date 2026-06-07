import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Premium TV Packages | Live Sports, Football & Movies",
    template: "%s | Premium TV Packages",
  },
  description: siteConfig.description,
  keywords: [
    "premium IPTV packages",
    "IPTV packages",
    "FIFA IPTV package",
    "FIFA schedule IPTV",
    "football IPTV package",
    "soccer IPTV package",
    "sports IPTV package",
    "IPTV South Africa",
    "IPTV Brazil",
    "IPTV USA",
    "IPTV Mexico",
    "IPTV Canada",
    "live TV packages",
    "premium sports TV package"
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Premium TV Packages | Live Sports & Entertainment",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium TV Packages | Live Sports & Entertainment",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-all duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          
          {/* Global Floating WhatsApp Button */}
          <WhatsAppButton variant="floating" message="Hello! I would like to get quick configuration setup support." />
        </ThemeProvider>
      </body>
    </html>
  );
}
