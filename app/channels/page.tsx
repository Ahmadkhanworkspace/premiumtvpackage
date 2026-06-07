import React from "react";
import type { Metadata } from "next";
import ChannelCategoryCard from "@/components/ChannelCategoryCard";
import SEOContentBlock from "@/components/SEOContentBlock";
import { ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium TV Channel Showcase Catalog | Live Uptime Listings",
  description: "Browse our comprehensive premium TV channel listings. Access live sports networks, cinema blockbusters, local news, and children networks in Full HD/4K quality.",
};

export default function ChannelsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Broadcaster List
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Premium TV Packages Channel Catalog
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Filter and search through our curated groups of live channels, cinema movie networks, cartoons for kids, and international programming.
        </p>
      </div>

      {/* Interactive Channel Showcasing Card */}
      <ChannelCategoryCard />

      {/* Comparative SEO Block */}
      <SEOContentBlock
        title="Selecting and Verifying IPTV Channels Legally"
        description="Understanding channel distribution laws is vital. We help you configure links that correspond to regional broadcasters and packages. Make sure to consult with our WhatsApp technicians to verify if a particular local channel is authorized in your country, as lists fluctuate to accommodate licensing changes."
        keywords={["premium IPTV packages", "sports IPTV package", "live TV packages", "FIFA live TV packages"]}
      />

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Channel Listings Disclaimer:</strong> All channel names and logos are trademarks of their respective licensed broadcasters. Channel lineups fluctuate depending on regional agreements. Please contact our 24/7 support team via WhatsApp to verify current channel availability for your country code.
        </div>
      </div>

    </div>
  );
}
