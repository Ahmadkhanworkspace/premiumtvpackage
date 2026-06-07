"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Globe, Tv } from "lucide-react";
import { getFlagUrl } from "@/data/config";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "FIFA Coverage", href: "/fifa-coverage" },
    { label: "Live Schedule", href: "/schedule" },
    { label: "Channels", href: "/channels" },
    { label: "Devices", href: "/devices" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const countries = [
    { name: "South Africa", href: "/south-africa", flag: "🇿🇦" },
    { name: "Brazil", href: "/brazil", flag: "🇧🇷" },
    { name: "United States", href: "/usa", flag: "🇺🇸" },
    { name: "Mexico", href: "/mexico", flag: "🇲🇽" },
    { name: "Canada", href: "/canada", flag: "🇨🇦" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-card-border bg-navbar-bg backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary-glow">
                <Tv className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold tracking-tight text-transparent">
                Premium TV
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Country Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                onBlur={() => setTimeout(() => setIsCountryOpen(false), 200)}
                className="flex items-center space-x-1 rounded-full border border-card-border px-3 py-1 text-xs font-semibold text-foreground/80 hover:bg-card-bg transition-colors"
              >
                <Globe className="h-3.5 w-3.5 text-primary" />
                <span>Countries</span>
              </button>

              {isCountryOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-card-border bg-background p-2 shadow-xl glass-panel">
                  {countries.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-foreground/95 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <img
                        src={getFlagUrl(c.flag)}
                        alt={c.name}
                        className="w-4.5 h-3 object-cover rounded-sm shadow-sm"
                      />
                      <span>{c.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-card-bg border border-card-border text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4.5 w-4.5" />
              ) : (
                <Sun className="h-4.5 w-4.5 text-accent" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-1.5 hover:bg-card-bg border border-card-border text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4 text-accent" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2 hover:bg-card-bg border border-card-border text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-card-border bg-background p-4 shadow-inner">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-card-bg ${
                  isActive(link.href) ? "bg-primary/10 text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-card-border pt-3">
              <span className="px-3 text-xs font-semibold text-foreground/50 uppercase">
                Target Regions
              </span>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {countries.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 rounded-lg bg-card-bg px-3 py-2 text-xs font-medium border border-card-border text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <img
                      src={getFlagUrl(c.flag)}
                      alt={c.name}
                      className="w-4 h-2.5 object-cover rounded-sm shadow-sm"
                    />
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
