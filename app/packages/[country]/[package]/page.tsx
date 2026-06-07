import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { seoCountries } from "@/data/seo/countries";
import { seoPackages } from "@/data/seo/packages";
import { generateCountryPackageSEO } from "@/data/seo/templates";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import { ShieldCheck, HelpCircle } from "lucide-react";
import { getFlagUrl } from "@/data/config";

interface PageProps {
  params: Promise<{ country: string; package: string }>;
}

export async function generateStaticParams() {
  const paths: { country: string; package: string }[] = [];
  
  seoCountries.forEach((c) => {
    seoPackages.forEach((p) => {
      paths.push({
        country: c.slug,
        package: p.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { country: countrySlug, package: packageSlug } = await params;
  const countryObj = seoCountries.find((c) => c.slug === countrySlug);
  const packageObj = seoPackages.find((p) => p.slug === packageSlug);

  if (!countryObj || !packageObj) {
    return {
      title: "Package Guide Not Found",
    };
  }

  const seo = generateCountryPackageSEO(countryObj, packageObj);
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: `/packages/${countrySlug}/${packageSlug}`,
    },
  };
}

export default async function ProgrammaticCountryPackagePage({ params }: PageProps) {
  const { country: countrySlug, package: packageSlug } = await params;
  const countryObj = seoCountries.find((c) => c.slug === countrySlug);
  const packageObj = seoPackages.find((p) => p.slug === packageSlug);

  if (!countryObj || !packageObj) {
    notFound();
  }

  const seo = generateCountryPackageSEO(countryObj, packageObj);
  const whatsappMsg = `Hello! I am viewing the ${packageObj.name} TV package guide for ${countryObj.name} and would like to get quick set up support.`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/10 via-card-bg to-accent/5 border border-card-border p-8 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-glow filter blur-3xl opacity-40 animate-pulse-glow" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-xs font-semibold">
            <img
              src={getFlagUrl(countryObj.flag)}
              alt=""
              className="w-4.5 h-3 object-cover rounded-sm border border-card-border"
            />
            <span className="text-foreground/90">Customised Regional Plans</span>
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
              Check Price Tables
            </Link>
            <WhatsAppButton
              text="Order Plan via WhatsApp"
              message={whatsappMsg}
              variant="accent"
              className="py-3.5"
            />
          </div>
        </div>
      </div>

      {/* Package highlight section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Target Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Optimized for {packageObj.targetFocus}
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            Every subscription profile is tuned for specific network packets. The {packageObj.name} package guide lists the necessary player parameters so you get high-resolution content without dropping audio/video synchronisation on networks like {countryObj.ispList[0]}.
          </p>
        </div>
        
        <div className="lg:col-span-5 rounded-2xl border border-card-border bg-card-bg p-6 glass-panel space-y-4">
          <h3 className="font-bold text-base border-b border-card-border/60 pb-3">
            Uptime Guarantee
          </h3>
          <p className="text-xs text-foreground/70 leading-relaxed">
            We prioritize server uptime. With redundant connections and round-the-clock administration support, you can enjoy uninterrupted movies and live sports.
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center">
          FAQ - {packageObj.name} in {countryObj.name}
        </h2>
        <FAQAccordion items={seo.faqs} />
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title={`Reviewing the ${packageObj.name} IPTV package in ${countryObj.name}`}
        description={`The ${packageObj.name} package is configured to target ${packageObj.targetFocus} in ${countryObj.name}. Ensure you possess a minimum of 25 Mbps bandwidth for 4K. Talk to us on WhatsApp to verify current channel lists.`}
        keywords={[`${packageObj.slug} IPTV ${countryObj.slug}`, `${packageObj.slug} package ${countryObj.slug}`, `premium IPTV packages ${countryObj.slug}`]}
      />

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Package Availability Disclaimer:</strong> Channel guides and broadcast packages vary by country and local telecommunications laws. Support and configuration files are delivered via WhatsApp. Contact us to verify details.
        </div>
      </div>

    </div>
  );
}
