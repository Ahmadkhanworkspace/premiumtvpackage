export interface ChannelItem {
  name: string;
  category: string;
  quality: "HD" | "FHD" | "4K";
  region: string;
  language: string;
}

export const channelsData: ChannelItem[] = [
  // Sports
  { name: "Premium Sports 1", category: "Sports", quality: "4K", region: "Global", language: "English" },
  { name: "Premium Sports 2", category: "Sports", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Sports 3", category: "Sports", quality: "FHD", region: "Global", language: "English" },
  { name: "Super Soccer HD", category: "Sports", quality: "FHD", region: "Europe", language: "English" },
  { name: "Europe Football 4K", category: "Sports", quality: "4K", region: "Europe", language: "Multilingual" },
  { name: "Latino Sports HD", category: "Sports", quality: "FHD", region: "Latam", language: "Spanish" },
  { name: "Brasileiro Futebol TV", category: "Sports", quality: "FHD", region: "Brazil", language: "Portuguese" },
  { name: "Africa Sports HD", category: "Sports", quality: "FHD", region: "Africa", language: "English" },
  { name: "Canada Sports 1", category: "Sports", quality: "FHD", region: "Canada", language: "English/French" },
  { name: "USA Soccer Stream", category: "Sports", quality: "FHD", region: "USA", language: "English" },
  { name: "Motor Racing UHD", category: "Sports", quality: "4K", region: "Global", language: "English" },
  { name: "Fight Championship HD", category: "Sports", quality: "FHD", region: "Global", language: "English" },

  // Movies & Series
  { name: "Premium Action HD", category: "Movies", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Cinema 4K", category: "Movies", quality: "4K", region: "Global", language: "English" },
  { name: "Premium Comedy HD", category: "Movies", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Drama HD", category: "Movies", quality: "FHD", region: "Global", language: "English" },
  { name: "Latino Cine Max", category: "Movies", quality: "FHD", region: "Latam", language: "Spanish" },
  { name: "Cine Brasil HD", category: "Movies", quality: "FHD", region: "Brazil", language: "Portuguese" },
  { name: "Hollywood Hits HD", category: "Movies", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Documentaries", category: "Movies", quality: "FHD", region: "Global", language: "English" },

  // News
  { name: "Global News 24/7", category: "News", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Finance TV", category: "News", quality: "FHD", region: "Global", language: "English" },
  { name: "Latino Noticias 24", category: "News", quality: "HD", region: "Latam", language: "Spanish" },
  { name: "Notícias Brasil", category: "News", quality: "FHD", region: "Brazil", language: "Portuguese" },
  { name: "North America News", category: "News", quality: "FHD", region: "USA/Canada", language: "English" },

  // Kids
  { name: "Cartoon Premium HD", category: "Kids", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Kids Club", category: "Kids", quality: "FHD", region: "Global", language: "English" },
  { name: "Kids Latino TV", category: "Kids", quality: "HD", region: "Latam", language: "Spanish" },
  { name: "Desenhos Animados HD", category: "Kids", quality: "FHD", region: "Brazil", language: "Portuguese" },
  { name: "Premium Family Kids", category: "Kids", quality: "FHD", region: "Global", language: "English" },

  // Entertainment
  { name: "Premium Series HD", category: "Entertainment", quality: "FHD", region: "Global", language: "English" },
  { name: "Premium Reality TV", category: "Entertainment", quality: "FHD", region: "Global", language: "English" },
  { name: "Showcase Latino HD", category: "Entertainment", quality: "FHD", region: "Latam", language: "Spanish" },
  { name: "Entretenimento Brasil", category: "Entertainment", quality: "FHD", region: "Brazil", language: "Portuguese" },
  { name: "Global Lifestyle HD", category: "Entertainment", quality: "FHD", region: "Global", language: "English" }
];

export const channelCategories = [
  "All",
  "Sports",
  "Movies",
  "News",
  "Kids",
  "Entertainment"
];

export const channelRegions = [
  "All Regions",
  "Global",
  "USA",
  "Canada",
  "Brazil",
  "Latam",
  "Europe",
  "Africa"
];
