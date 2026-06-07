export interface MatchSchedule {
  id: string;
  teams: {
    home: string;
    away: string;
    homeFlag: string;
    awayFlag: string;
  };
  league: string;
  category: "football" | "soccer" | "rugby" | "cricket" | "f1";
  dateTime: string; // ISO string or readable format
  channels: string[];
  status: "upcoming" | "live" | "completed";
}

export const scheduleData: MatchSchedule[] = [
  {
    id: "match-1",
    teams: {
      home: "Brazil",
      away: "Argentina",
      homeFlag: "🇧🇷",
      awayFlag: "🇦🇷",
    },
    league: "FIFA World Cup Qualifiers",
    category: "football",
    dateTime: "2026-06-12T19:00:00Z",
    channels: ["Premium Sports 1", "Latino Sports HD", "Global Football UHD"],
    status: "upcoming",
  },
  {
    id: "match-2",
    teams: {
      home: "Real Madrid",
      away: "Manchester City",
      homeFlag: "🇪🇸",
      awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    },
    league: "UEFA Champions League",
    category: "football",
    dateTime: "2026-06-15T20:00:00Z",
    channels: ["Europe Football 4K", "Premium Sports 2", "Super Soccer HD"],
    status: "upcoming",
  },
  {
    id: "match-3",
    teams: {
      home: "South Africa",
      away: "Nigeria",
      homeFlag: "🇿🇦",
      awayFlag: "🇳🇬",
    },
    league: "Africa Cup of Nations Qualifiers",
    category: "football",
    dateTime: "2026-06-18T18:00:00Z",
    channels: ["Africa Sports HD", "Premium Sports 3", "Super Soccer HD"],
    status: "upcoming",
  },
  {
    id: "match-4",
    teams: {
      home: "LA Galaxy",
      away: "Inter Miami",
      homeFlag: "🇺🇸",
      awayFlag: "🇺🇸",
    },
    league: "MLS Regular Season",
    category: "soccer",
    dateTime: "2026-06-20T21:30:00Z",
    channels: ["North America Soccer", "Premium Sports 1", "Global Football UHD"],
    status: "upcoming",
  },
  {
    id: "match-5",
    teams: {
      home: "Mexico",
      away: "USA",
      homeFlag: "🇲🇽",
      awayFlag: "🇺🇸",
    },
    league: "CONCACAF Nations League",
    category: "soccer",
    dateTime: "2026-06-22T20:00:00Z",
    channels: ["Mexico Sports TV", "USA Soccer Stream", "Premium Sports 2"],
    status: "upcoming",
  },
  {
    id: "match-6",
    teams: {
      home: "Canada",
      away: "Costa Rica",
      homeFlag: "🇨🇦",
      awayFlag: "🇨🇷",
    },
    league: "CONCACAF Gold Cup",
    category: "soccer",
    dateTime: "2026-06-25T19:00:00Z",
    channels: ["Canada Sports 1", "CONCACAF Stream HD", "Premium Sports 4"],
    status: "upcoming",
  },
  {
    id: "match-7",
    teams: {
      home: "Flamengo",
      away: "River Plate",
      homeFlag: "🇧🇷",
      awayFlag: "🇦🇷",
    },
    league: "Copa Libertadores",
    category: "football",
    dateTime: "2026-06-28T22:00:00Z",
    channels: ["Copa Libertadores HD", "Latino Sports HD", "Premium Sports 3"],
    status: "upcoming",
  },
  {
    id: "match-8",
    teams: {
      home: "South Africa Springboks",
      away: "New Zealand All Blacks",
      homeFlag: "🇿🇦",
      awayFlag: "🇳🇿",
    },
    league: "The Rugby Championship",
    category: "rugby",
    dateTime: "2026-07-02T15:00:00Z",
    channels: ["Rugby World HD", "Premium Sports 1", "Global Sports UHD"],
    status: "upcoming",
  }
];
