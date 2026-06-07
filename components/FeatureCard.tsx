import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-card-bg p-6 glass-panel transition-all duration-300 hover:scale-102 hover:shadow-lg relative overflow-hidden group">
      {/* Decorative background glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-glow filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
        {icon}
      </div>
      
      <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
