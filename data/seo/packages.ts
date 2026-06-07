export interface SEOPackage {
  slug: string;
  name: string;
  correspondingId: string;
  keywords: string[];
  introHighlight: string;
  targetFocus: string;
}

export const seoPackages: SEOPackage[] = [
  {
    slug: "sports",
    name: "Sports Premium",
    correspondingId: "sports-premium",
    keywords: ["sports IPTV package", "premium sports TV package", "watch sports live"],
    introHighlight: "tailored specifically for sports fans who cannot afford to miss a single second of their team's live broadcasts.",
    targetFocus: "live matches, 4K sport channels, and low-latency feeds"
  },
  {
    slug: "fifa",
    name: "FIFA Special",
    correspondingId: "fifa-special",
    keywords: ["FIFA IPTV package", "FIFA live TV", "soccer live TV package"],
    introHighlight: "designed to provide comprehensive coverage guides for international soccer, national qualifiers, and FIFA tournaments.",
    targetFocus: "international soccer matches, world cup coverage guides, and team matchday stats"
  },
  {
    slug: "family",
    name: "Family Entertainment",
    correspondingId: "family-entertainment",
    keywords: ["family IPTV packages", "kids TV packages", "entertainment channels IPTV"],
    introHighlight: "combining cartoon channels, movies, documentaries, and news to keep the whole household happy.",
    targetFocus: "kids cartoons, blockbuster VOD movies, family networks, and multiple device support"
  },
  {
    slug: "latino",
    name: "Latino Special",
    correspondingId: "ultimate-global", // maps to ultimate global for rich channels or custom regional configs
    keywords: ["latino IPTV packages", "brazil football IPTV", "spanish channel package"],
    introHighlight: "bringing the best of South American television, Portuguese and Spanish commentary, and local dramas straight to your screen.",
    targetFocus: "Spanish and Portuguese premium networks, local news, and global sports"
  },
  {
    slug: "premium",
    name: "Ultimate Global Premium",
    correspondingId: "ultimate-global",
    keywords: ["premium IPTV packages", "ultimate global IPTV", "best live TV packages"],
    introHighlight: "our flagship option with zero compromises, multiple connections, and access to all global networks and VOD libraries.",
    targetFocus: "all 20,000+ live channels, 100,000+ VOD options, 3 simultaneous device connections, and VIP servers"
  }
];
