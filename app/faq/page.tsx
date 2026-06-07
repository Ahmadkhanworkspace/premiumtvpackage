import React from "react";
import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import { faqsData } from "@/data/faqs";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | IPTV Setup Troubleshooting",
  description: "Read answers to common questions about premium TV configurations, buffering fixes, device compatibility, payments, and trials.",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
          <HelpCircle className="h-4 w-4" />
          <span>Setup Assistance FAQ</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Find answers to common questions about compatible players, bandwidth parameters, channel lineups, and setup procedures.
        </p>
      </div>

      {/* Accordion List */}
      <FAQAccordion items={faqsData} />

      {/* Ask a custom question CTA */}
      <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
          Still Have Questions?
        </h2>
        <p className="text-sm text-foreground/70 max-w-lg mx-auto">
          Our customer support agents are online 24/7 on WhatsApp. Send us your questions and we will respond in under 5 minutes.
        </p>
        <div className="flex justify-center pt-2">
          <WhatsAppButton
            text="Ask on WhatsApp"
            message="Hi! I have a question about setting up a premium TV package that wasn't answered in the FAQ."
            variant="primary"
          />
        </div>
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Troubleshooting Buffering on Premium IPTV Subscriptions"
        description="Most buffering issues on Firestick or Smart TVs are caused by ISP packet routing rather than server limits. Utilizing local CDN server IPs resolves network congestion. If you continue to see loading loops, make sure to clear your app cache or restart your fiber router to clear the network buffer."
        keywords={["premium IPTV packages", "sports IPTV package", "live TV packages", "FIFA schedule IPTV"]}
      />

    </div>
  );
}
