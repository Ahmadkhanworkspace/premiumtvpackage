"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import PackageCard from "@/components/PackageCard";
import CountryCard from "@/components/CountryCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { packagesData } from "@/data/packages";
import { countriesData } from "@/data/countries";
import { testimonialsData } from "@/data/testimonials";
import { faqsData } from "@/data/faqs";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Tv,
  Tv2,
  Trophy,
  Film,
  Users,
  Smartphone,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const coreFeatures = [
    {
      title: "Anti-Buffer Technology",
      description: "Our package configurations route connections through local CDN nodes, providing stable, lag-free streams even during peak football match times.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "UHD & 4K Quality",
      description: "Enjoy live broadcasts, movies, and TV shows in crystal clear Full HD and 4K Ultra HD. Every seat feels like the front row.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Legal & Compliant Focus",
      description: "We focus on premium, authorized channels guides and configurations. No illegal streams or cracked feeds—only licensed regional guides.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "Multi-Device Compatibility",
      description: "Run streams on Firesticks, Smart TVs, Android boxes, iOS/Android mobile phones, Roku, or standard web browsers without issue.",
      icon: <Tv className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Why Premium TV Packages */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Unmatched Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Why Choose Our Premium Configurations?
          </h2>
          <p className="text-base text-foreground/75 leading-relaxed">
            Get high-end streaming results on your devices with our fully optimized guide configurations. We prioritize uptime, stability, and fast support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feat, i) => (
            <FeatureCard
              key={i}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. FIFA & Football Coverage Teaser */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl bg-primary/5 border border-primary/20 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary-glow filter blur-3xl opacity-40" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary">
              <Trophy className="h-3.5 w-3.5 text-accent" />
              <span>FIFA & International Football</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Never Miss a Matchday - Complete Sports Coverage Guides
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 max-w-3xl leading-relaxed">
              We cover international tournaments, World Cup qualifiers, Premier League, La Liga, Serie A, and local games like the PSL in South Africa or Brasileirão in Brazil. All feeds are high-bitrate and stable.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3 text-sm font-bold shadow-md shadow-primary-glow text-center"
            >
              Check Match Schedule
            </Link>
            <Link
              href="/fifa-coverage"
              className="inline-flex items-center justify-center rounded-xl border border-card-border bg-card-bg hover:bg-primary/10 text-foreground px-6 py-3 text-sm font-bold text-center"
            >
              FIFA Coverage Details
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Movies & Entertainment Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              VOD Library Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Thousands of Movies, Series & Documentaries
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed">
              Access extensive Video-on-Demand (VOD) libraries containing the latest cinema blockbusters, trending TV series, cartoons for kids, and award-winning nature documentaries. Check out customized language subtitles and localized audio tracks.
            </p>
            <ul className="space-y-3">
              {[
                "100,000+ movies & TV show episodes",
                "Updated weekly with new trending contents",
                "Multiple language sub-tracks and configurations",
                "Kids, anime, family, and localized sections included"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2.5 text-sm text-foreground/90 font-medium">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/channels"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all"
              >
                <span>Browse Channel Lineup Catalog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl border border-card-border bg-card-bg p-5 glass-panel text-center space-y-2">
                <Film className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-bold text-sm">Action & Sci-Fi</h4>
                <p className="text-xs text-foreground/50">Blockbusters in Ultra HD</p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card-bg p-5 glass-panel text-center space-y-2">
                <Users className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-bold text-sm">Family Classics</h4>
                <p className="text-xs text-foreground/50">Safe shows for all kids</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl border border-card-border bg-card-bg p-5 glass-panel text-center space-y-2">
                <Trophy className="h-8 w-8 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-sm">Sports Archive</h4>
                <p className="text-xs text-foreground/50">Match replays & highlights</p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card-bg p-5 glass-panel text-center space-y-2">
                <Tv2 className="h-8 w-8 text-purple-500 mx-auto" />
                <h4 className="font-bold text-sm">Documentaries</h4>
                <p className="text-xs text-foreground/50">Nature, history & science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Country-Specific Portals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Global Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Targeted Country Guides & Local Servers
          </h2>
          <p className="text-base text-foreground/75 leading-relaxed">
            Our package routing is fine-tuned to work with local ISPs in South Africa, Brazil, the US, Mexico, and Canada, minimizing lag times and avoiding ISP bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(countriesData).map((country) => (
            <CountryCard
              key={country.slug}
              name={country.name}
              slug={country.slug}
              flag={country.flag}
              sportsDesc={country.localSportsDesc}
            />
          ))}
        </div>
      </section>

      {/* 6. Pricing Packages Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20" id="pricing-packages">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Flexible Subscription Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Choose Your Premium TV Package
          </h2>
          <p className="text-base text-foreground/75 leading-relaxed">
            Choose a plan that fits your viewing habits. All plans include 4K UHD support, electronic guides (EPG), and 24/7 client setup support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pckg) => (
            <PackageCard
              key={pckg.id}
              pckg={pckg}
            />
          ))}
        </div>
      </section>

      {/* 7. Device Support Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Hardware Compatibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Watch on All Your Favorite Devices
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed">
              Setting up your subscription is simple. We provide files compatible with Firesticks, Smart TVs, Android boxes, smartphones, Apple TV, Roku, and Windows/Mac media players.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {[
                { name: "Smart TV", icon: "📺" },
                { name: "Firestick", icon: "🔥" },
                { name: "Android TV", icon: "🤖" },
                { name: "iPhone / iPad", icon: "🍎" },
                { name: "Android Mobile", icon: "📱" },
                { name: "Roku Player", icon: "📦" },
              ].map((dev, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-card-border bg-card-bg p-3.5 text-center flex flex-col justify-center items-center space-y-1 glass-panel"
                >
                  <span className="text-2xl select-none">{dev.icon}</span>
                  <span className="text-xs font-bold text-foreground">{dev.name}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/devices"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 border border-primary/20 px-5 py-2.5 text-xs font-bold text-primary hover:bg-primary/25 transition-all"
              >
                <span>View Setup Installation Guides</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 rounded-2xl border border-card-border bg-card-bg p-6 glass-panel space-y-4">
            <h3 className="font-extrabold text-lg border-b border-card-border/60 pb-3">
              Quick Setup In 3 Steps
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white font-bold text-xs">1</span>
                <div>
                  <p className="font-bold">Choose a Package</p>
                  <p className="text-xs text-foreground/60">Choose a monthly or yearly plan that fits your connections count.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white font-bold text-xs">2</span>
                <div>
                  <p className="font-bold">Contact us on WhatsApp</p>
                  <p className="text-xs text-foreground/60">Talk to our setup specialists to receive configuration files or codes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white font-bold text-xs">3</span>
                <div>
                  <p className="font-bold">Load App & Stream</p>
                  <p className="text-xs text-foreground/60">Load credentials inside your player and begin watching in 4K quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Customer Satisfaction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            What Our Premium Viewers Say
          </h2>
          <p className="text-base text-foreground/75 leading-relaxed">
            Read real feedback from clients in South Africa, Brazil, United States, Mexico, and Canada who rely on our streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-foreground/75">
            Got questions about setup, regional support, or payment methods? Find answers here.
          </p>
        </div>

        <FAQAccordion items={faqsData} />
      </section>

      {/* 10. Final CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 rounded-3xl bg-gradient-to-tr from-primary/10 via-card-bg to-accent/5 border border-card-border space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary-glow filter blur-3xl opacity-30" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Ready to Elevate Your TV Experience?
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
            Get set up with M3U playlists, Xtream API keys, or custom configuration files. Reach out to our technical support on WhatsApp for instant setup assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-7 py-3.5 text-sm font-bold shadow-md shadow-primary-glow"
            >
              Get Started Now
            </Link>
            <WhatsAppButton
              text="Chat on WhatsApp"
              message="Hi! I am ready to purchase/set up a Premium TV Package. Please help."
              variant="accent"
              className="w-full sm:w-auto py-3.5"
            />
          </div>
          <p className="text-[10px] text-foreground/45 max-w-md mx-auto italic leading-relaxed">
            Broadcaster channel availability, sports packages, and VOD listings may vary depending on regional licensing laws and broadcaster rights.
          </p>
        </div>
      </section>
    </div>
  );
}
