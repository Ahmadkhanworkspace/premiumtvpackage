"use client";

import React from "react";
import { PackagePlan } from "@/data/packages";
import WhatsAppButton from "./WhatsAppButton";
import { Check } from "lucide-react";

interface PackageCardProps {
  pckg: PackagePlan;
}

export default function PackageCard({ pckg }: PackageCardProps) {
  const orderMessage = `Hello! I would like to subscribe to the "${pckg.name}" package at $${pckg.price} USD. Please help me set it up.`;

  return (
    <div className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 glass-panel overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl ${
      pckg.isPopular ? "border-primary shadow-lg ring-1 ring-primary/25" : "border-card-border"
    }`}>
      {/* Most Popular Label on top of card */}
      {pckg.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl bg-primary px-4 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
          Most Popular
        </div>
      )}

      {/* Package Header */}
      <div className="pt-2">
        {pckg.badgeText && (
          <span className="block text-xs font-bold tracking-widest text-foreground/50 uppercase mb-2">
            {pckg.badgeText}
          </span>
        )}
        <h3 className="text-3xl font-extrabold text-foreground mb-4">
          {pckg.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline mb-6 border-b border-card-border/60 pb-6">
          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            ${pckg.price}
          </span>
          <span className="text-xs font-semibold text-foreground/50 ml-2 uppercase tracking-wide">
            USD / {pckg.duration}
          </span>
        </div>

        {/* Features list */}
        <ul className="space-y-3.5 mb-8">
          {pckg.features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm font-medium">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* WhatsApp order button */}
      <WhatsAppButton
        text="Subscribe Now"
        message={orderMessage}
        variant={pckg.isPopular ? "primary" : "secondary"}
        className="w-full py-3.5 font-bold"
      />
    </div>
  );
}
