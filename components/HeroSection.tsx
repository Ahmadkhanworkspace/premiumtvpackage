"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { Tv, Sparkles, Trophy, ShieldCheck, PlayCircle } from "lucide-react";
import { getFlagUrl } from "@/data/config";

export default function HeroSection() {
  const targetCountries = [
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Canada", flag: "🇨🇦" },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-36 lg:pb-40">
      {/* Background Neon Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] h-72 w-72 rounded-full bg-primary-glow filter blur-3xl opacity-60 animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-accent/10 filter blur-3xl opacity-50 animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-sm font-semibold"
            >
              <Trophy className="h-4 w-4 text-accent" />
              <span className="text-foreground/90">Premium Football & Global Sports TV Packages</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
            >
              Premium IPTV Packages for{" "}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                Sports, Movies & Live TV
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Stream premium channels in 4K/UHD quality. Get specialized guides for major football tournaments, upcoming match schedules, series VODs, kids channels, and news, optimized for viewers in South Africa, Brazil, USA, Mexico, and Canada.
            </motion.p>

            {/* Target Countries Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mr-2">
                Supported Regions:
              </span>
              {targetCountries.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center space-x-1.5 rounded-full border border-card-border bg-card-bg/50 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                >
                  <img
                    src={getFlagUrl(c.flag)}
                    alt={c.name}
                    className="w-4.5 h-3 object-cover rounded-sm"
                  />
                  <span className="text-foreground/80">{c.name}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                href="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/95 text-white px-7 py-3.5 text-base font-bold shadow-lg shadow-primary-glow hover:scale-102 active:scale-98 transition-all duration-200"
              >
                <PlayCircle className="h-5 w-5" />
                <span>View Packages</span>
              </Link>
              
              <Link
                href="/schedule"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-card-bg hover:bg-primary/10 text-foreground px-7 py-3.5 text-base font-semibold hover:scale-102 active:scale-98 transition-all duration-200"
              >
                <span>Check FIFA Schedule</span>
              </Link>

              <WhatsAppButton
                text="Inquire on WhatsApp"
                message="Hi! I saw your website and would like to get details/prices on your TV Packages."
                variant="accent"
                className="w-full sm:w-auto py-3.5"
              />
            </motion.div>

            {/* Value Pros */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-foreground/60 border-t border-card-border/60"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
                <span>Verified Channel Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4.5 w-4.5 text-amber-500" />
                <span>99.9% Server Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tv className="h-4.5 w-4.5 text-blue-500" />
                <span>All Devices Supported</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical/Mockup Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-2xl border border-card-border bg-card-bg p-6 glass-panel shadow-2xl overflow-hidden group">
              {/* Premium Gradient Overlay */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 to-accent/5 opacity-40 group-hover:scale-105 transition-transform duration-700" />

              {/* Floating Cards content inside graphic */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-card-border/80 pb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-foreground/50">
                    Live Streaming Showcase
                  </span>
                  <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-rose-500 relative">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping" />
                  </span>
                </div>

                {/* Match Card Showcase */}
                <div className="rounded-xl bg-background/80 p-4 border border-card-border">
                  <div className="flex justify-between items-center text-xs text-foreground/60 mb-2">
                    <span>LIVE BROADCAST</span>
                    <span className="font-semibold text-primary">4K UHD</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={getFlagUrl("🇧🇷")}
                        alt="Brazil"
                        className="w-5.5 h-4 object-cover rounded-sm border border-card-border"
                      />
                      <span className="font-bold text-sm">Brazil</span>
                    </div>
                    <span className="text-xs font-bold text-foreground/40 px-2 py-1 bg-card-bg rounded-md">VS</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm">Argentina</span>
                      <img
                        src={getFlagUrl("🇦🇷")}
                        alt="Argentina"
                        className="w-5.5 h-4 object-cover rounded-sm border border-card-border"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-foreground/50 text-center mt-2 border-t border-card-border/50 pt-2">
                    FIFA Qualifiers - Watch live on Premium Sports 1
                  </p>
                </div>

                {/* Streaming Channel Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-background/50 border border-card-border/60 p-2.5 flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-md bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold text-[10px]">SP</div>
                    <span className="font-semibold">Sports Premium</span>
                  </div>
                  <div className="rounded-lg bg-background/50 border border-card-border/60 p-2.5 flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-[10px]">MV</div>
                    <span className="font-semibold">UHD Cinema</span>
                  </div>
                  <div className="rounded-lg bg-background/50 border border-card-border/60 p-2.5 flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-[10px]">KD</div>
                    <span className="font-semibold">Cartoon Kids</span>
                  </div>
                  <div className="rounded-lg bg-background/50 border border-card-border/60 p-2.5 flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-[10px]">GL</div>
                    <span className="font-semibold">Global News</span>
                  </div>
                </div>

                <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 flex justify-between items-center text-xs">
                  <div className="space-y-0.5">
                    <p className="font-bold text-primary">Ultimate Configuration Help</p>
                    <p className="text-foreground/70 text-[10px]">Our team assists you with 5-minute setup</p>
                  </div>
                  <span className="rounded-full bg-primary px-2 py-0.5 font-bold text-[10px] text-white">Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
