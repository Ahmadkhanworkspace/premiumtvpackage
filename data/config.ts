export const siteConfig = {
  name: "Premium TV Packages",
  description: "Get premium TV packages for sports, movies, and family entertainment. High-quality, reliable streams on all your favorite devices.",
  url: "https://premiumtvpackages.com",
  whatsappNumber: "+44 7988 595964", // WhatsApp number
  whatsappMessageDefault: "Hello! I am interested in your Premium TV Packages. Can you please provide more information?",
  contactEmail: "support@premiumtvpackages.com",
  supportHours: "24/7 Premium Support",
};

export function getWhatsAppLink(message?: string) {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  const encodedMsg = encodeURIComponent(message || siteConfig.whatsappMessageDefault);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

export function getFlagUrl(countryOrEmoji: string): string {
  const codeMap: Record<string, string> = {
    // Emojis
    "🇿🇦": "za",
    "🇧🇷": "br",
    "🇺🇸": "us",
    "🇲🇽": "mx",
    "🇨🇦": "ca",
    "🇦🇷": "ar",
    "🇳🇬": "ng",
    "🇨🇷": "cr",
    "🇳🇿": "nz",
    "🇪🇸": "es",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "gb-eng",
    
    // Slugs
    "south-africa": "za",
    "brazil": "br",
    "usa": "us",
    "united-states": "us",
    "mexico": "mx",
    "canada": "ca",
    "argentina": "ar",
    "spain": "es",
    "england": "gb-eng",
    "nigeria": "ng",
    "costa-rica": "cr",
    "new-zealand": "nz"
  };

  const normalized = countryOrEmoji.toLowerCase().trim();
  const code = codeMap[normalized] || normalized;
  return `https://flagcdn.com/${code}.svg`;
}
