"use client";

import React, { useState } from "react";
import { channelsData, channelCategories, channelRegions } from "@/data/channels";
import { Search, Globe, Filter } from "lucide-react";

export default function ChannelCategoryCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  // Filter channels based on inputs
  const filteredChannels = channelsData.filter((channel) => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || channel.category === selectedCategory;
    const matchesRegion = selectedRegion === "All Regions" || channel.region === selectedRegion || channel.region === "Global";
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="space-y-6">
      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Search Input */}
        <div className="md:col-span-5 relative">
          <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-foreground/40" />
          <input
            type="text"
            placeholder="Search channels (e.g. Premium Sports)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-card-bg pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-foreground/45"
          />
        </div>

        {/* Region Filter */}
        <div className="md:col-span-3 relative">
          <Globe className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-foreground/40" />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-card-bg pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
          >
            {channelRegions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Categories Tabs in row */}
        <div className="md:col-span-4 flex overflow-x-auto gap-1 border border-card-border rounded-xl bg-card-bg p-1 scrollbar-none items-center">
          {channelCategories.slice(0, 4).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-1 text-center py-2 px-2.5 rounded-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10 text-foreground/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      {/* Main Categories Row Selector (Mobile support / Extra) */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        <span className="text-xs font-semibold text-foreground/50 flex items-center mr-2">
          <Filter className="h-3.5 w-3.5 mr-1" />
          Quick Categories:
        </span>
        {channelCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-4 py-1 text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === category
                ? "bg-primary border-primary text-white shadow-md shadow-primary-glow"
                : "border-card-border bg-card-bg hover:bg-primary/10 text-foreground/75"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Channels Grid display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredChannels.length > 0 ? (
          filteredChannels.map((channel, i) => (
            <div
              key={i}
              className="rounded-xl border border-card-border bg-card-bg p-4 flex items-center justify-between glass-panel transition-all hover:scale-102"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground tracking-tight">
                  {channel.name}
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] font-semibold text-foreground/50">
                  <span className="uppercase text-primary">{channel.category}</span>
                  <span>•</span>
                  <span>{channel.region}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-1">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary">
                  {channel.quality}
                </span>
                <span className="text-[9px] text-foreground/40">
                  {channel.language}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-card-border/80 p-12 text-center text-foreground/50">
            <p className="text-sm font-semibold">No channels match your search filter criteria.</p>
            <p className="text-xs mt-1">Contact our live WhatsApp support team to verify the availability of specific networks in your region.</p>
          </div>
        )}
      </div>

      {/* Region note */}
      <div className="rounded-xl bg-card-bg border border-card-border/80 p-4 text-xs text-foreground/60 leading-relaxed">
        <strong>Important Setup Note:</strong> Channel lineups depend on broadcaster licensing rights and are subject to change. The names shown here represent typical streaming groups. Please reach out to our active specialists via WhatsApp to confirm the currently authorized networks for your country code.
      </div>
    </div>
  );
}
