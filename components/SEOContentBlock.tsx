import React from "react";

interface SEOContentBlockProps {
  title: string;
  description: string;
  keywords: string[];
}

export default function SEOContentBlock({ title, description, keywords }: SEOContentBlockProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-card-bg/40 p-6 sm:p-8 glass-panel">
      <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-sm text-foreground/80 leading-relaxed mb-6">
        {description}
      </p>
      
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">
          Topic Keywords Covered:
        </h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((kw, i) => (
            <span
              key={i}
              className="rounded-full bg-background border border-card-border px-3 py-1 text-xs text-foreground/60 font-semibold"
            >
              #{kw.toLowerCase().replace(/\s+/g, "-")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
