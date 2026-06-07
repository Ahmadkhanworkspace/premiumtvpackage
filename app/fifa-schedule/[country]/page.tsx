import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { seoCountries } from "@/data/seo/countries";
import { generateFifaScheduleSEO } from "@/data/seo/templates";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import ScheduleCard from "@/components/ScheduleCard";
import { scheduleData } from "@/data/schedule";
import { Trophy, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return seoCountries.map((c) => ({
    country: c.slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const countryObj = seoCountries.find((c) => c.slug === countrySlug);

  if (!countryObj) {
    return {
      title: "Schedule Not Found",
    };
  }

  const seo = generateFifaScheduleSEO(countryObj);
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: `/fifa-schedule/${countrySlug}`,
    },
  };
}

export default async function ProgrammaticFifaSchedulePage({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const countryObj = seoCountries.find((c) => c.slug === countrySlug);

  if (!countryObj) {
    notFound();
  }

  const seo = generateFifaScheduleSEO(countryObj);
  const whatsappMsg = `Hello! I am viewing the FIFA schedule guide for ${countryObj.name} and would like to confirm live channel configurations.`;

  // Filter only football/soccer/fifa schedules
  const footballMatches = scheduleData.filter(
    (m) => m.category === "football" || m.category === "soccer"
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/10 via-card-bg to-accent/5 border border-card-border p-8 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-glow filter blur-3xl opacity-40 animate-pulse-glow" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-xs font-semibold text-primary">
            <Trophy className="h-4 w-4 text-accent" />
            <span>FIFA Match schedules & guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {seo.h1}
          </h1>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {seo.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3.5 text-sm font-bold shadow-md shadow-primary-glow"
            >
              Browse General Schedules
            </Link>
            <WhatsAppButton
              text="Get Sports Channels List"
              message={whatsappMsg}
              variant="accent"
              className="py-3.5"
            />
          </div>
        </div>
      </div>

      {/* Match Schedules list */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
          Upcoming Soccer Matchday Fixtures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {footballMatches.map((match) => (
            <ScheduleCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* FAQ section */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center">
          FAQ - FIFA in {countryObj.name}
        </h2>
        <FAQAccordion items={seo.faqs} />
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title={`Optimizing Live Soccer Streaming in ${countryObj.name}`}
        description={`Follow FIFA schedules in ${countryObj.name} with reliable guide setups. Setting up backups protects your streams from ISP throttling during crucial match goals. Contact us on WhatsApp to verify setups.`}
        keywords={[`FIFA schedule IPTV ${countryObj.slug}`, `watch football online ${countryObj.slug}`, `sports IPTV package ${countryObj.slug}`]}
      />

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Broadcasting Notice:</strong> Soccer match schedules and broadcaster lineups fluctuate. We assist with configuration and support files for authorized links. Contact support on WhatsApp to confirm details.
        </div>
      </div>

    </div>
  );
}
