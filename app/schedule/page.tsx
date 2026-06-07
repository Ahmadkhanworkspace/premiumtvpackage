"use client";

import React, { useState } from "react";
import ScheduleCard from "@/components/ScheduleCard";
import SEOContentBlock from "@/components/SEOContentBlock";
import { scheduleData } from "@/data/schedule";
import { CalendarRange, Filter, Search, ShieldAlert } from "lucide-react";

export default function SchedulePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Unique categories for filtering
  const categories = ["All", "football", "soccer", "rugby", "cricket"];

  // Filter matches
  const filteredMatches = scheduleData.filter((match) => {
    const matchesCategory = selectedCategory === "All" || match.category === selectedCategory;
    const matchesSearch =
      match.teams.home.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.teams.away.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.league.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Matchday Timings
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Live Sports & FIFA Match Schedules
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Stay informed on upcoming live soccer fixtures, rugby clashes, and motorsport races. Verify broadcaster channels and configure reminder alerts.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Search Input */}
        <div className="md:col-span-6 relative">
          <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-foreground/45" />
          <input
            type="text"
            placeholder="Search matchups (e.g. Brazil, Real Madrid)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-card-bg pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-foreground/45"
          />
        </div>

        {/* Category Filter selector */}
        <div className="md:col-span-6 flex overflow-x-auto gap-1 border border-card-border rounded-xl bg-card-bg p-1 scrollbar-none items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-bold transition-all uppercase shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10 text-foreground/85"
              }`}
            >
              {cat === "All" ? "All Sports" : cat}
            </button>
          ))}
        </div>

      </div>

      {/* Match Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <ScheduleCard key={match.id} match={match} />
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-dashed border-card-border/80 p-16 text-center text-foreground/50">
            <CalendarRange className="h-12 w-12 text-foreground/35 mx-auto mb-4" />
            <p className="text-sm font-semibold">No matches match your current query.</p>
            <p className="text-xs mt-1">Please try modifying your keywords or category filters.</p>
          </div>
        )}
      </div>

      {/* Dynamic SEO block */}
      <SEOContentBlock
        title="Tracking FIFA World Cup Schedules & IPTV Broadcaster Channels"
        description="Knowing which channel is broadcasting the match is crucial. Match schedules fluctuate due to regional tv licensing rules. We advise all sports package subscribers to check local schedules 24 hours prior to kickoff. Our guides help you configure multiple feed redundancies so you can transition immediately if a particular broadcast is blocked."
        keywords={["FIFA schedule IPTV", "FIFA live TV packages", "sports IPTV package", "soccer live TV package"]}
      />

      {/* Schedules Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Schedules & Channel Disclaimer:</strong> Schedules, tournament dates, kick-off times, and broadcaster availability may vary by region and licensing authority. All times listed are in GMT/UTC. Please reach out to our WhatsApp support team to confirm live channel coverage details for your country code.
        </div>
      </div>

    </div>
  );
}
