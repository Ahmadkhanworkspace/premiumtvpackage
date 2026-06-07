import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { seoDevices } from "@/data/seo/devices";
import { generateDeviceSEO } from "@/data/seo/templates";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Smartphone, HelpCircle, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ deviceSlug: string }>;
}

export async function generateStaticParams() {
  return seoDevices.map((d) => ({
    deviceSlug: d.slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { deviceSlug } = await params;
  const deviceObj = seoDevices.find((d) => d.slug === deviceSlug);

  if (!deviceObj) {
    return {
      title: "Device Guide Not Found",
    };
  }

  const seo = generateDeviceSEO(deviceObj);
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: `/devices/${deviceSlug}`,
    },
  };
}

export default async function ProgrammaticDevicePage({ params }: PageProps) {
  const { deviceSlug } = await params;
  const deviceObj = seoDevices.find((d) => d.slug === deviceSlug);

  if (!deviceObj) {
    notFound();
  }

  const seo = generateDeviceSEO(deviceObj);
  const whatsappMsg = `Hello! I am viewing your IPTV setup guide for ${deviceObj.name} and would like to get quick set up support.`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/10 via-card-bg to-accent/5 border border-card-border p-8 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-glow filter blur-3xl opacity-40 animate-pulse-glow" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-xs font-semibold text-primary">
            <Smartphone className="h-4 w-4" />
            <span>Setup guide & apps recommendation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {seo.h1}
          </h1>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {seo.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/devices"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3.5 text-sm font-bold shadow-md shadow-primary-glow"
            >
              Browse General Devices
            </Link>
            <WhatsAppButton
              text="Get Activation Support"
              message={whatsappMsg}
              variant="accent"
              className="py-3.5"
            />
          </div>
        </div>
      </div>

      {/* Step by Step Setup List */}
      <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel shadow-md space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b border-card-border/60 pb-4 gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
              Step-by-Step Installation Guides
            </h2>
            <p className="text-xs text-foreground/50 mt-1 font-semibold uppercase">
              Difficulty: <span className="text-primary font-bold">{deviceObj.difficulty}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {deviceObj.recommendedApps.map((app) => (
              <span key={app} className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                {app}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {deviceObj.setupSteps.map((step, idx) => (
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
      </div>

      {/* FAQ section */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center">
          FAQ - Setup on {deviceObj.name}
        </h2>
        <FAQAccordion items={seo.faqs} />
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title={`Optimizing ${deviceObj.name} for Premium IPTV Packages`}
        description={`Our guides detail setting up players on ${deviceObj.name} using M3U play links and EPG. Ensure your home router has active connections capabilities. Talk to our technical specialists on WhatsApp for help.`}
        keywords={[`${deviceObj.slug}`, `${deviceObj.slug}-setup`, `${deviceObj.slug}-apps`, `premium IPTV packages`]}
      />

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Setup Disclaimer:</strong> Setup difficulty and player availability fluctuate depending on app store updates. All installation instructions are technical recommendations only. Contact support via WhatsApp for help.
        </div>
      </div>

    </div>
  );
}
