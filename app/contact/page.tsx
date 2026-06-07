"use client";

import React, { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import { siteConfig } from "@/data/config";
import { Mail, Clock, MessageSquare, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "South Africa",
    packageInterest: "Sports Premium Package",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert(`Thank you for submitting your inquiry, ${formData.name}! A technical specialist will email you shortly. For instant, 5-minute configuration setups, we recommend clicking our WhatsApp contact link below.`);
  };

  const countries = ["South Africa", "Brazil", "United States", "Mexico", "Canada", "Other"];
  const packages = [
    "Starter Package",
    "Sports Premium Package",
    "Family Entertainment Package",
    "Ultimate Global Package",
    "FIFA Special Package",
    "Not Sure / General Inquiry",
  ];

  const contactMsg = `Hello! My name is ${formData.name || "Guest"}. I am based in ${formData.country} and I am interested in the ${formData.packageInterest}. ${formData.message ? `My message: ${formData.message}` : ""}`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Get Setup
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Contact Support & Sales
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Have questions about compatible media players, billing options, or channel guides? Talk to our setup technicians for instant activations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Support channel blocks */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel space-y-6">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight border-b border-card-border/60 pb-4">
              Premium Support Channels
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-foreground">24/7 WhatsApp Chat</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Our quickest support option. Speak with a technical specialist immediately to receive configuration codes, load playlists, or start trials.
                  </p>
                  <div className="pt-2">
                    <WhatsAppButton
                      text="Open WhatsApp Support"
                      message="Hi! I need assistance with setting up my premium TV package configuration."
                      variant="primary"
                      className="py-2.5 text-xs shadow-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-foreground">Email Support</h4>
                  <p className="text-xs text-foreground/70">
                    For billing inquiries, partnership requests, or formal communications.
                  </p>
                  <p className="text-xs font-bold text-foreground/90 pt-1">
                    {siteConfig.contactEmail}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-foreground">Support Hours</h4>
                  <p className="text-xs text-foreground/70">
                    Our network administration team monitors streams and router ports 24 hours a day, 365 days a year.
                  </p>
                  <p className="text-xs font-bold text-foreground/90 pt-1">
                    {siteConfig.supportHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="rounded-2xl border border-card-border bg-card-bg/40 p-6 glass-panel grid grid-cols-3 gap-2 text-center text-xs">
            <div className="space-y-1">
              <ShieldCheck className="h-5 w-5 text-emerald-500 mx-auto" />
              <p className="font-bold">100% Safe</p>
            </div>
            <div className="space-y-1">
              <Zap className="h-5 w-5 text-amber-500 mx-auto" />
              <p className="font-bold">Fast Activation</p>
            </div>
            <div className="space-y-1">
              <Sparkles className="h-5 w-5 text-primary mx-auto" />
              <p className="font-bold">Premium UHD</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel shadow-xl">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight border-b border-card-border/60 pb-4 mb-6">
              Send an Email Inquiry
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground/60 uppercase mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-foreground/35"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/60 uppercase mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-foreground/35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground/60 uppercase mb-2">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/60 uppercase mb-2">Package Interest</label>
                  <select
                    value={formData.packageInterest}
                    onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    {packages.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground/60 uppercase mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your streaming device, or list any questions about channels list..."
                  className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-foreground/35"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3.5 text-sm font-bold shadow-md cursor-pointer"
                >
                  Submit Inquiry
                </button>
                
                {formData.name && (
                  <WhatsAppButton
                    text="Submit via WhatsApp"
                    message={contactMsg}
                    variant="accent"
                    className="w-full sm:w-auto py-3.5"
                  />
                )}
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Contacting Premium TV Support for IPTV Configuration & Activation"
        description="Setting up a live TV packages subscription takes only minutes when routing is done correctly. If you experience buffering, or if a specific channel is not showing on your Smart TV player, our WhatsApp chat support is the fastest way to troubleshoot. We can verify if your country connection fits the required server Peering agreements."
        keywords={["premium IPTV packages", "sports IPTV package", "soccer live TV package", "live TV packages"]}
      />

    </div>
  );
}
