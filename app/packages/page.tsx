"use client";

import React from "react";
import PackageCard from "@/components/PackageCard";
import SEOContentBlock from "@/components/SEOContentBlock";
import { packagesData } from "@/data/packages";
import { HelpCircle, Star, Tv } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Select Your Plan
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Premium IPTV Subscription Packages
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Unlock premium channels, live global sports, movies, kids cartoon networks, and international TV guides. Fast activation and anti-freeze setup support.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packagesData.map((pckg) => (
          <PackageCard
            key={pckg.id}
            pckg={pckg}
          />
        ))}
      </div>

      {/* Comparative Specs List */}
      <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel shadow-md space-y-6">
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight border-b border-card-border/60 pb-4">
          All Plans Include:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Tv className="h-4 w-4 text-primary" />
              <span>Full Hardware Compatibility</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              Every package supports loading credentials on Android boxes, smart TVs, Apple devices, firesticks, and web browsers.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Star className="h-4 w-4 text-accent" />
              <span>Electronic Program Guide</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              Never get lost in channel lineups. All configurations support active EPG systems to see what is currently broadcasting on air.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-emerald-500" />
              <span>Active WhatsApp Setup</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed text-xs">
              Our support team is online 24/7. Get assistances with loading app playlists, generating custom M3U codes, or troubleshooting buffers.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Selecting the Best Premium IPTV Packages for Your Region"
        description="Whether you are a soccer fan looking for World Cup qualifications or a family seeking general entertainment networks, selecting the correct package is crucial. We offer tailored bandwidth solutions to South Africa, Brazil, United States, Mexico, and Canada. Make sure to check connections count limit before ordering, as running multiple devices on a single connection package may result in buffering flags."
        keywords={["premium IPTV packages", "sports IPTV package", "soccer live TV package", "live TV packages"]}
      />

      {/* Regional Licensing note */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-foreground/70 leading-relaxed flex items-start gap-3">
        <span className="text-base select-none">⚠️</span>
        <div className="space-y-1">
          <p className="font-bold text-foreground">Regional Availability Disclaimer:</p>
          <p>
            Channel lists, sports broadcasts, and schedule availabilities are subject to licensing policies and changes. We assist with configuration setup, but regional accessibility depends on official broadcaster availability. Contact support on WhatsApp to confirm the specific lineup for your country.
          </p>
        </div>
      </div>

    </div>
  );
}
