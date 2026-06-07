import React from "react";
import { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-card-bg p-6 glass-panel flex flex-col justify-between transition-all duration-200 hover:shadow-lg">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4.5 w-4.5 ${
                i < Math.floor(testimonial.rating)
                  ? "fill-accent text-accent"
                  : "text-foreground/20"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-foreground/80 italic leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3 border-t border-card-border/60 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold text-sm shadow-md">
          {testimonial.avatarPlaceholder}
        </div>
        <div>
          <h4 className="font-bold text-sm text-foreground tracking-tight">
            {testimonial.name}
          </h4>
          <p className="text-[10px] text-foreground/50 font-medium">
            {testimonial.location}
          </p>
          <span className="inline-block mt-1 text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.25 rounded">
            {testimonial.packagePurchased}
          </span>
        </div>
      </div>
    </div>
  );
}
