export interface PackagePlan {
  id: string;
  name: string;
  badgeText?: string;
  price: number;
  duration: string;
  channelsCount: string;
  vodCount: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const packagesData: PackagePlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    badgeText: "TRIAL",
    price: 15,
    duration: "1 Month",
    channelsCount: "45,000+",
    vodCount: "140,000+",
    description: "Perfect for testing our high-speed global routing infrastructure. Enjoy buffer-free streaming with our introductory one-month plan.",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ],
  },
  {
    id: "3-months",
    name: "3 Months",
    badgeText: "STARTER",
    price: 25,
    duration: "3 Months",
    channelsCount: "45,000+",
    vodCount: "140,000+",
    description: "Enjoy buffer-free streaming with our highly valued three-month plan. Perfect for continuous entertainment.",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ],
  },
  {
    id: "6-months",
    name: "6 Months",
    badgeText: "MOST POPULAR",
    price: 40,
    duration: "6 Months",
    channelsCount: "45,000+",
    vodCount: "140,000+",
    description: "Our highly recommended package. Offers the perfect balance of duration and value with complete channel listings and full setup guides.",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ],
    isPopular: true,
  },
  {
    id: "12-months",
    name: "12 Months",
    badgeText: "BEST VALUE",
    price: 65,
    duration: "12 Months",
    channelsCount: "45,000+",
    vodCount: "140,000+",
    description: "Get a full year of premium streaming. The most economical plan for households looking for uninterrupted high-definition entertainment.",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ],
  },
];
