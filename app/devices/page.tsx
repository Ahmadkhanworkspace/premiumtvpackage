import React from "react";
import type { Metadata } from "next";
import DeviceCard from "@/components/DeviceCard";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Setup Guides for All Supported Streaming Devices | IPTV Setup Help",
  description: "Learn how to setup and configure premium TV packages on your Smart TV, Android Box, Amazon Firestick, Apple TV, iPhone, Android mobile, or Roku player.",
};

export default function DevicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Hardware Setup Guides
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Supported Devices & Installation Guides
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Select your streaming hardware below to see the step-by-step setup instructions. Get up and running in under 5 minutes.
        </p>
      </div>

      {/* Interactive Tabbed Device Setup Component */}
      <DeviceCard />

      {/* General Troubleshooting/Tips */}
      <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel space-y-6">
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight border-b border-card-border/60 pb-4">
          General Streaming Optimization Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">1. Use an Ethernet Cable</h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              Whenever possible, connect your Smart TV or Android Box directly to your router using an Ethernet cable. Hardwired connections are significantly more stable than Wi-Fi and reduce buffering to 0%.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">2. Check Internet Speed</h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              Make sure your internet speed meets the requirements. We recommend a minimum of 15 Mbps for Full HD channels and at least 25 Mbps for 4K Ultra HD sports feeds. Run a quick speed test on your network first.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">3. Restart Your Hardware Regularly</h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              Streaming devices like Firesticks can compile cache over time, causing lag. Restarting your Firestick or router weekly clears the RAM, improving streaming performance and application load speeds.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">4. Avoid Multiple Connections Over Limit</h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              If your plan permits 1 connection (like our Starter or Sports plans), running it on two devices simultaneously will trigger security blocks, causing streams to loop or freeze. Upgrade your plan if you require multi-room viewing.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Bypassing Throttling on Smart TV & Firestick IPTV Setups"
        description="Setting up premium packages on Amazon Firesticks or Samsung TVs is straightforward when using Xtream API keys. Some ISPs restrict bandwidth during high-audience football events. Using custom CDN parameters ensures your network packets bypass these speed blocks. For personalized help, speak directly with our WhatsApp technicians."
        keywords={["smart TV IPTV setup", "Firestick IPTV setup", "premium IPTV packages", "sports IPTV package"]}
      />

      {/* Info Notice */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/60 leading-relaxed flex gap-3">
        <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div>
          <strong>Setup Note:</strong> App names and layouts change periodically. We recommend referencing official app stores for player updates. All installation instructions are technical assistance recommendations only.
        </div>
      </div>

    </div>
  );
}
