import React from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import ScheduleCard from "@/components/ScheduleCard";
import { scheduleData } from "@/data/schedule";
import { Trophy, Globe, PlayCircle, ShieldAlert } from "lucide-react";
import { getFlagUrl } from "@/data/config";

export default function FifaCoveragePage() {
  const fansFocus = [
    {
      flag: "🇿🇦",
      country: "South Africa",
      desc: "Get South Africa football fans guides to stream international cup matches, local PSL tournaments, and world leagues without ISP throttling.",
      keyword: "IPTV South Africa football"
    },
    {
      flag: "🇧🇷",
      country: "Brazil",
      desc: "Transmissões esportivas e guias para torcedores no Brasil. Assista à Copa do Mundo, Eliminatórias e torneios sul-americanos com suporte total.",
      keyword: "IPTV Brazil football"
    },
    {
      flag: "🇺🇸",
      country: "United States",
      desc: "For US soccer fans tracking Major League Soccer (MLS) or European champions. Smooth setups on Apple TV, Firestick, and Roku.",
      keyword: "IPTV USA soccer"
    },
    {
      flag: "🇲🇽",
      country: "Mexico",
      desc: "Guía de canales para fanáticos en México. Sigue a la Selección Nacional en las eliminatorias de la FIFA y torneos de la CONCACAF en 4K.",
      keyword: "IPTV Mexico football"
    },
    {
      flag: "🇨🇦",
      country: "Canada",
      desc: "Canadian soccer fans guide for MLS matches, Gold Cup tournaments, and national qualifiers with stable CDN routing.",
      keyword: "IPTV Canada soccer"
    }
  ];

  // Filter FIFA / World Cup / Soccer matches
  const soccerMatches = scheduleData.filter(
    (m) => m.category === "football" || m.category === "soccer"
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
          <Trophy className="h-4 w-4 text-accent" />
          <span>FIFA World Cup & Football Coverage Guides</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Premium FIFA Live TV Packages & Match Schedules
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Stay up to date with matchday listings, timezone guides, and channel availability configs for global football fans. Stable 4K feeds for qualifiers and tournaments.
        </p>
      </div>

      {/* Intro block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
            Follow World Football & International Tournaments Legally
          </h2>
          <p className="text-sm text-foreground/85 leading-relaxed">
            Our specialized FIFA TV configurations help you guide your device to official sports networks broadcasting live games. Access UEFA Nations League, CONCACAF Gold Cup, Copa Libertadores, and World Cup Qualifiers. We provide pre-packaged M3U profiles that map to authorized channels, ensuring you do not experience blackout issues.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-primary-glow"
            >
              Browse Match Schedules
            </Link>
            <WhatsAppButton
              text="Ask about Channel Lineups"
              message="Hi! I am inquiring about the football/FIFA live TV package channels list."
              variant="secondary"
              className="py-2.5 text-xs"
            />
          </div>
        </div>
        
        <div className="lg:col-span-4 rounded-2xl bg-primary/10 border border-primary/25 p-5 text-center space-y-3">
          <Globe className="h-10 w-10 text-primary mx-auto" />
          <h3 className="font-bold text-sm text-foreground">Global CDN Infrastructure</h3>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Feeds are distributed via regional nodes in Montreal, New York, São Paulo, Johannesburg, and London, guaranteeing low buffer rates.
          </p>
        </div>
      </div>

      {/* FIFA Match Schedule Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight text-center">
          Upcoming FIFA & International Match Schedules
        </h2>
        <p className="text-sm text-foreground/75 text-center max-w-2xl mx-auto mb-10">
          Plan your streaming weekends. Here are the upcoming official qualifiers and club cup match schedules.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soccerMatches.map((match) => (
            <ScheduleCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* Fan Portals Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight text-center">
          Tailored Guides for International Football Fans
        </h2>
        <p className="text-sm text-foreground/75 text-center max-w-2xl mx-auto mb-10">
          Access specialized channel guides and configurations optimized for regional internet providers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fansFocus.map((fan, i) => (
            <div key={i} className="rounded-2xl border border-card-border bg-card-bg p-6 glass-panel flex flex-col justify-between transition-all hover:scale-102">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={getFlagUrl(fan.flag)}
                    alt={fan.country}
                    className="w-8 h-5.5 object-cover rounded-sm border border-card-border shadow-sm"
                  />
                  <h3 className="font-bold text-base text-foreground">{fan.country} Football Setup</h3>
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed">{fan.desc}</p>
              </div>
              
              <div className="border-t border-card-border/60 pt-4 mt-6 flex justify-between items-center text-[10px]">
                <span className="font-semibold text-primary uppercase">Target Keyword:</span>
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary font-bold">{fan.keyword}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Optimizing Football IPTV Packages for Live Matchday Streaming"
        description="To watch football channels online successfully, a stable connection is only half the battle. Using a premium sports IPTV guide setup prevents stream freeze when millions of soccer fans load the server simultaneously. Our systems configure backup links that activate automatically. Make sure to consult with support on WhatsApp to ensure your local ISP bandwidth parameters match the requirements."
        keywords={[
          "FIFA live TV packages",
          "FIFA schedule IPTV",
          "football IPTV packages",
          "soccer live TV package",
          "World Cup IPTV coverage",
          "premium sports IPTV",
          "watch football channels online"
        ]}
      />

      {/* Match Reminder CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-primary/15 via-card-bg to-accent/5 border border-card-border p-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
          Never Miss Another Goal. Get Matchday Alerts!
        </h3>
        <p className="text-sm text-foreground/70 max-w-xl mx-auto">
          Sign up for a premium plan and receive automatic timezone-adjusted schedules and channel notifications directly on your mobile device.
        </p>
        <div className="flex justify-center pt-2">
          <WhatsAppButton
            text="Activate Football Packages Alert"
            message="Hi! I want to configure my sports TV packages for the upcoming FIFA qualifiers and matches."
            variant="primary"
          />
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Compliance & Availability Disclaimer:</strong> All live soccer packages are subject to regional availability and broadcaster licensing rights. Broadcaster availability depends on third-party agreements and geo-licensing blocks. Please reach out to our active specialists on WhatsApp to confirm which specific networks are supported for your country code.
        </div>
      </div>

    </div>
  );
}
