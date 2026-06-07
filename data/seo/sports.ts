export interface SEOSport {
  slug: string;
  name: string;
  keywords: string[];
  description: string;
  tournaments: string[];
}

export const seoSports: SEOSport[] = [
  {
    slug: "football",
    name: "Football",
    keywords: ["football IPTV packages", "watch football online", "live football channels"],
    description: "live broadcasts of the Premier League, La Liga, Serie A, UEFA Champions League, and African football tournaments.",
    tournaments: ["English Premier League", "UEFA Champions League", "La Liga", "Serie A", "Ligue 1", "CAF Champions League"]
  },
  {
    slug: "soccer",
    name: "Soccer",
    keywords: ["soccer live TV package", "soccer IPTV USA", "watch soccer matchday"],
    description: "comprehensive coverage of MLS, CONCACAF tournaments, Copa Libertadores, and elite global soccer leagues in crystal clear quality.",
    tournaments: ["Major League Soccer (MLS)", "CONCACAF Champions Cup", "Copa Libertadores", "Copa America", "FIFA World Cup Qualifiers"]
  },
  {
    slug: "fifa",
    name: "FIFA Matches",
    keywords: ["FIFA schedule IPTV", "FIFA live TV packages", "World Cup IPTV coverage"],
    description: "international qualifying matches, continental cups, and friendly fixtures featuring top national teams.",
    tournaments: ["FIFA World Cup Qualifiers", "FIFA Club World Cup", "International Friendlies", "UEFA Nations League"]
  },
  {
    slug: "rugby",
    name: "Rugby",
    keywords: ["rugby live stream TV", "Rugby Championship IPTV", "watch rugby premium"],
    description: "hard-hitting matches from Super Rugby, The Rugby Championship, Six Nations, and world rugby events.",
    tournaments: ["The Rugby Championship", "Super Rugby Pacific", "Six Nations Championship", "European Rugby Champions Cup"]
  },
  {
    slug: "cricket",
    name: "Cricket",
    keywords: ["cricket live TV package", "T20 World Cup IPTV", "watch cricket streams"],
    description: "thrilling matches across Test cricket, One Day Internationals (ODIs), and T20 leagues globally.",
    tournaments: ["ICC Men's T20 World Cup", "Indian Premier League (IPL)", "The Ashes Series", "Big Bash League"]
  },
  {
    slug: "formula-1",
    name: "Formula 1",
    keywords: ["F1 live TV packages", "watch Formula 1 online", "premium motorsport IPTV"],
    description: "all practice sessions, qualifying rounds, and grand prix main races from the pinnacle of motorsport.",
    tournaments: ["FIA Formula One World Championship", "Monaco Grand Prix", "Silverstone GP", "Austin GP", "São Paulo GP"]
  }
];
