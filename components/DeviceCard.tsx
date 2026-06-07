"use client";

import React, { useState } from "react";
import { seoDevices } from "@/data/seo/devices";
import { CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

export default function DeviceCard() {
  const [activeTab, setActiveTab] = useState(seoDevices[0].slug);

  const activeDevice = seoDevices.find((d) => d.slug === activeTab) || seoDevices[0];

  return (
    <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Device selector list (Tabs) */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-card-border/60 lg:pr-6">
          {seoDevices.map((device) => {
            const isActive = device.slug === activeTab;
            return (
              <button
                key={device.slug}
                onClick={() => setActiveTab(device.slug)}
                className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary-glow"
                    : "hover:bg-primary/10 text-foreground/85"
                }`}
              >
                <span className="text-base">{device.slug === "smart-tv-iptv" ? "📺" : device.slug === "android-tv-iptv" ? "🤖" : device.slug === "firestick-iptv" ? "🔥" : device.slug === "iphone-iptv" ? "🍎" : device.slug === "android-iptv" ? "📱" : "📦"}</span>
                <span>{device.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Device Setup Steps */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-card-border/60 pb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {activeDevice.name} Installation Setup
              </h3>
              <p className="text-xs text-foreground/50 mt-1 font-semibold uppercase tracking-wider">
                Difficulty Level: <span className="text-primary font-bold">{activeDevice.difficulty}</span>
              </p>
            </div>
            
            {/* Recommended Apps badges */}
            <div className="flex flex-wrap gap-1.5">
              {activeDevice.recommendedApps.map((app) => (
                <span
                  key={app}
                  className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Setup steps list */}
          <div className="space-y-4">
            {activeDevice.setupSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-extrabold text-xs">
                  {idx + 1}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-primary/5 border border-primary/25 p-4 flex gap-3 text-xs text-foreground/80">
            <HelpCircle className="h-5 w-5 text-primary shrink-0" />
            <div className="space-y-1">
              <p className="font-bold text-foreground">Need Technical Help?</p>
              <p className="leading-relaxed">
                Contact our support agents via WhatsApp. We can help you register your MAC address, configure your playlists, or send you custom step-by-step guides for other player applications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
