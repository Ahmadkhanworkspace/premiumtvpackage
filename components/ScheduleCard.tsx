"use client";

import React, { useState } from "react";
import { MatchSchedule } from "@/data/schedule";
import WhatsAppButton from "./WhatsAppButton";
import { Calendar, Bell, BellRing, Tv } from "lucide-react";
import { getFlagUrl } from "@/data/config";

interface ScheduleCardProps {
  match: MatchSchedule;
}

export default function ScheduleCard({ match }: ScheduleCardProps) {
  const [hasReminder, setHasReminder] = useState(false);

  const matchDate = new Date(match.dateTime);
  const formattedDate = matchDate.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = matchDate.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleReminderClick = () => {
    setHasReminder(!hasReminder);
    if (!hasReminder) {
      alert(`Reminder configured! We will send you a reminder alert before the match begins. You can also contact support on WhatsApp to confirm which specific channel is broadcasting in your region.`);
    }
  };

  const matchMsg = `Hello! I would like to inquire about the live TV package configuration to watch the upcoming ${match.teams.home} vs ${match.teams.away} match in the ${match.league}. Can you please verify channel availability?`;

  return (
    <div className="rounded-2xl border border-card-border bg-card-bg p-5 glass-panel transition-all duration-200 hover:shadow-lg">
      <div className="flex justify-between items-center text-xs text-foreground/50 border-b border-card-border/60 pb-3 mb-4">
        <span className="font-bold tracking-wider uppercase bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
          {match.league}
        </span>
        <span className="flex items-center space-x-1">
          <Calendar className="h-3.5 w-3.5" />
          <span>{formattedDate}</span>
        </span>
      </div>

      {/* Teams Grid */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-4">
        {/* Home Team */}
        <div className="flex items-center space-x-3 w-full sm:w-2/5 justify-center sm:justify-start">
          <img
            src={getFlagUrl(match.teams.homeFlag)}
            alt={match.teams.home}
            className="w-8 h-5.5 object-cover rounded-sm border border-card-border shadow-sm"
          />
          <span className="font-bold text-base text-foreground tracking-tight">
            {match.teams.home}
          </span>
        </div>

        {/* VS / Time */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-1.5 rounded-xl bg-background/50 border border-card-border/40 shrink-0">
          <span className="text-[10px] font-bold text-primary tracking-wider uppercase mb-0.5">
            KICK OFF
          </span>
          <span className="text-base font-extrabold text-foreground tracking-tight">
            {formattedTime}
          </span>
          <span className="text-[10px] text-foreground/40 mt-0.5 uppercase">
            GMT/UTC
          </span>
        </div>

        {/* Away Team */}
        <div className="flex items-center space-x-3 w-full sm:w-2/5 justify-center sm:justify-end sm:text-right">
          <span className="font-bold text-base text-foreground tracking-tight order-2 sm:order-1">
            {match.teams.away}
          </span>
          <img
            src={getFlagUrl(match.teams.awayFlag)}
            alt={match.teams.away}
            className="w-8 h-5.5 object-cover rounded-sm border border-card-border shadow-sm order-1 sm:order-2"
          />
        </div>
      </div>

      {/* Broadcasting Channels Info */}
      <div className="mt-4 pt-3 border-t border-card-border/60">
        <div className="flex items-center space-x-1.5 text-xs text-foreground/60 mb-2">
          <Tv className="h-3.5 w-3.5 text-primary" />
          <span className="font-semibold">Broadcaster Channels Guide:</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {match.channels.map((chan, i) => (
            <span
              key={i}
              className="rounded-md border border-card-border bg-background px-2.5 py-1 text-[10px] text-foreground/80 font-medium"
            >
              {chan}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleReminderClick}
          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-card-border px-3 py-2 text-xs font-semibold hover:bg-primary/10 transition-colors ${
            hasReminder ? "bg-primary/15 text-primary border-primary/30" : "bg-background text-foreground/85"
          }`}
        >
          {hasReminder ? (
            <>
              <BellRing className="h-3.5 w-3.5 text-primary" />
              <span>Reminder Active</span>
            </>
          ) : (
            <>
              <Bell className="h-3.5 w-3.5" />
              <span>Set Reminder</span>
            </>
          )}
        </button>

        <WhatsAppButton
          text="Verify Channels"
          message={matchMsg}
          variant="secondary"
          className="flex-1 py-2 text-xs"
        />
      </div>
    </div>
  );
}
