import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFlagUrl } from "@/data/config";

interface CountryCardProps {
  name: string;
  slug: string;
  flag: string;
  sportsDesc: string;
}

export default function CountryCard({ name, slug, flag, sportsDesc }: CountryCardProps) {
  return (
    <div className="group rounded-2xl border border-card-border bg-card-bg p-6 glass-panel transition-all duration-200 hover:scale-102 hover:shadow-lg">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src={getFlagUrl(flag)}
          alt={name}
          className="w-10 h-7 object-cover rounded-md shadow-sm border border-card-border"
        />
        <div>
          <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
            Regional Hub
          </span>
        </div>
      </div>
      <p className="text-sm text-foreground/70 leading-relaxed mb-6">
        {sportsDesc}
      </p>
      <Link
        href={`/${slug}`}
        className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all"
      >
        <span>Access {name} Portal</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
