"use client";

import React from "react";
import { getWhatsAppLink } from "@/data/config";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  variant?: "primary" | "secondary" | "floating" | "accent";
  className?: string;
}

export default function WhatsAppButton({
  text = "Contact on WhatsApp",
  message,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const link = getWhatsAppLink(message);

  if (variant === "floating") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white" />
      </a>
    );
  }

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all duration-200 active:scale-98 cursor-pointer";
  
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-primary hover:bg-primary/95 text-white hover:shadow-primary-glow";
  } else if (variant === "accent") {
    variantStyles = "bg-accent hover:bg-accent/95 text-slate-950 hover:shadow-amber-500/25";
  } else {
    variantStyles = "bg-card-bg border border-card-border hover:bg-primary/10 text-foreground";
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <MessageCircle className="h-4.5 w-4.5 fill-current" />
      <span>{text}</span>
    </a>
  );
}
