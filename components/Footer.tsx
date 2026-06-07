import React from "react";
import Link from "next/link";
import { siteConfig, getFlagUrl } from "@/data/config";
import { Tv, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Premium Packages", href: "/packages" },
    { label: "FIFA Match Schedules", href: "/schedule" },
    { label: "Channel Lineups", href: "/channels" },
    { label: "Supported Devices", href: "/devices" },
    { label: "Guides & Blog", href: "/blog" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact Support", href: "/contact" },
  ];

  const countryLinks = [
    { label: "South Africa Portal", href: "/south-africa", flag: "🇿🇦" },
    { label: "Brazil Portal", href: "/brazil", flag: "🇧🇷" },
    { label: "United States Portal", href: "/usa", flag: "🇺🇸" },
    { label: "Mexico Portal", href: "/mexico", flag: "🇲🇽" },
    { label: "Canada Portal", href: "/canada", flag: "🇨🇦" },
  ];

  const pSeoLinks = [
    { label: "IPTV South Africa Guide", href: "/iptv/south-africa", flag: "🇿🇦" },
    { label: "IPTV Brazil Guide", href: "/iptv/brazil", flag: "🇧🇷" },
    { label: "IPTV USA Guide", href: "/iptv/usa", flag: "🇺🇸" },
    { label: "IPTV Mexico Guide", href: "/iptv/mexico", flag: "🇲🇽" },
    { label: "IPTV Canada Guide", href: "/iptv/canada", flag: "🇨🇦" },
  ];

  return (
    <footer className="bg-footer-bg text-footer-foreground border-t border-card-border mt-auto pt-16 pb-8 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Trust */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary-glow">
                <Tv className="h-4.5 w-4.5" />
              </div>
              <span className="text-white text-lg font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-footer-foreground/80 max-w-xs leading-relaxed">
              Premium configuration guides and subscription consulting services for global entertainment, movies, and live sports.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1 rounded-md bg-gray-900 border border-gray-800 px-2 py-1 text-xs text-white">
                <ShieldCheck className="h-3 w-3 text-emerald-500" />
                <span>100% Secure</span>
              </span>
              <span className="inline-flex items-center space-x-1 rounded-md bg-gray-900 border border-gray-800 px-2 py-1 text-xs text-white">
                <Zap className="h-3 w-3 text-amber-500" />
                <span>Fast Setup</span>
              </span>
              <span className="inline-flex items-center space-x-1 rounded-md bg-gray-900 border border-gray-800 px-2 py-1 text-xs text-white">
                <Sparkles className="h-3 w-3 text-purple-500" />
                <span>UHD Quality</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-foreground/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Country Landing Pages */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Regional Portals
            </h3>
            <ul className="space-y-2 mb-4">
              {countryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-foreground/80 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <img
                      src={getFlagUrl(link.flag)}
                      alt=""
                      className="w-4 h-2.5 object-cover rounded-sm"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-2">
              SEO Coverage Guides
            </h3>
            <ul className="space-y-1">
              {pSeoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-footer-foreground/60 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <img
                      src={getFlagUrl(link.flag)}
                      alt=""
                      className="w-3.5 h-2 object-cover rounded-sm"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </h3>
            <p className="text-sm text-footer-foreground/80 leading-relaxed">
              Have questions about compatible apps or channel guides? Talk to our setup specialists.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-white font-medium">WhatsApp:</span>{" "}
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message Online 24/7
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                <span className="text-footer-foreground/80">{siteConfig.contactEmail}</span>
              </p>
              <p>
                <span className="text-white font-medium">Hours:</span>{" "}
                <span className="text-footer-foreground/80">{siteConfig.supportHours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-800 pt-8 pb-4 text-xs text-footer-foreground/70 space-y-4">
          <p className="leading-relaxed">
            <strong>Legal Notice & Disclaimer:</strong> {siteConfig.name} is a technical consulting website that provides subscription config assistance, app setup documentation, and regional channel listings guide files. We do not host, broadcast, restream, retransmit, or sell actual streams, IPTV server subscriptions, or TV feed signals directly. All logos, match schedules, brand names, and copyrights listed are the property of their respective licensed broadcasters and owners. Channel lineup, sports coverage, and match transmission availability depend on your region, ISP configurations, and local broadcaster restrictions. Contact support via WhatsApp to verify current channel availability for your specific country.
          </p>
          <p className="text-center text-footer-foreground/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Optimised for speed, performance, and legal streaming compatibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
