import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { seoCountries } from "@/data/seo/countries";
import { seoSports } from "@/data/seo/sports";
import { generateCountrySportSEO } from "@/data/seo/templates";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import { Trophy, HelpCircle, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ country: string; sport: string }>;
}

export async function generateStaticParams() {
  const paths: { country: string; sport: string }[] = [];
  
  seoCountries.forEach((c) => {
    seoSports.forEach((s) => {
      paths.push({
        country: c.slug,
        sport: s.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { country: countrySlug, sport: sportSlug } = await params;
  const countryObj = seoCountries.find((c) => c.slug === countrySlug);
  const sportObj = seoSports.find((s) => s.slug === sportSlug);

  if (!countryObj || !sportObj) {
    return {
      title: "Sports Guide Not Found",
    };
  }

  const seo = generateCountrySportSEO(countryObj, sportObj);
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: `/iptv/${countrySlug}/${sportSlug}`,
    },
  };
}

export default async function ProgrammaticCountrySportPage({ params }: PageProps) {
  const { country: countrySlug, sport: sportSlug } = await params;
  const countryObj = seoCountries.find((c) => c.slug === countrySlug);
  const sportObj = seoSports.find((s) => s.slug === sportSlug);

  if (!countryObj || !sportObj) {
    notFound();
  }

  const seo = generateCountrySportSEO(countryObj, sportObj);
  const whatsappMsg = `Hello! I am viewing your ${sportObj.name} TV package guide for ${countryObj.name} and would like to verify sports channels.`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/10 via-card-bg to-accent/5 border border-card-border p-8 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-glow filter blur-3xl opacity-40 animate-pulse-glow" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-xs font-semibold text-primary">
            <Trophy className="h-4 w-4 text-accent animate-bounce" />
            <span>Live sports configurations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {seo.h1}
          </h1>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {seo.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3.5 text-sm font-bold shadow-md shadow-primary-glow"
            >
              Check Packages
            </Link>
            <WhatsAppButton
              text="Inquire on WhatsApp"
              message={whatsappMsg}
              variant="accent"
              className="py-3.5"
            />
          </div>
        </div>
      </div>

      {/* Tournaments list and detailed view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Covered Tournaments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Watch Major {sportObj.name} Tournaments Legally
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            We configure channels that carry official live matchday coverage for major tournaments. Watch:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold text-foreground/90">
            {sportObj.tournaments.map((tour) => (
              <li key={tour} className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{tour}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-5 rounded-2xl border border-card-border bg-card-bg p-6 glass-panel space-y-4">
          <h3 className="font-bold text-base border-b border-card-border/60 pb-3">
            Anti-Freeze Setup
          </h3>
          <p className="text-xs text-foreground/70 leading-relaxed">
            Live sports streaming experiences high server traffic. Our channels guides map to high-bandwidth server links, preventing buffer flags during critical matchday goals.
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] text-foreground/60 font-bold">
            <span>#{sportObj.slug}-iptv</span>
            <span>#{countryObj.slug}-sports</span>
            <span>#watch-{sportObj.slug}-live</span>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center">
          FAQ - {sportObj.name} in {countryObj.name}
        </h2>
        <FAQAccordion items={seo.faqs} />
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title={`Selecting the Best ${sportObj.name} IPTV Packages in ${countryObj.name}`}
        description={`Live streaming ${sportObj.name} matches requires high-bitrate configurations. Our guide assists you with setting up your devices to load official broadcasters in ${countryObj.name}. Contact support on WhatsApp to confirm network requirements.`}
        keywords={[`${sportObj.slug} IPTV ${countryObj.slug}`, `watch ${sportObj.slug} live ${countryObj.slug}`, `${sportObj.slug} live TV package`]}
      />

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Sports Broadcasting Disclaimer:</strong> Tournament dates, kickoffs, and broadcaster channel lineups are subject to change. Channel configurations are technical assistance services. Contact support to verify details.
        </div>
      </div>

    </div>
  );
}
