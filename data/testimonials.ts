export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarPlaceholder: string; // initials
  quote: string;
  rating: number;
  packagePurchased: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sipho Dlamini",
    location: "Johannesburg, South Africa",
    avatarPlaceholder: "SD",
    quote: "I was skeptical at first because streams usually buffer like crazy on my fiber connection during big PSL derbies. But their sports premium package configuration is incredibly stable. Outstanding uptime!",
    rating: 5,
    packagePurchased: "Sports Premium Package"
  },
  {
    id: "testimonial-2",
    name: "Thiago Silva",
    location: "São Paulo, Brazil",
    avatarPlaceholder: "TS",
    quote: "Suporte excelente em português pelo WhatsApp. O setup na minha Smart TV levou menos de 5 minutos. Consegui assistir à Libertadores sem travamentos e com imagem em HD impecável.",
    rating: 5,
    packagePurchased: "Ultimate Global Package"
  },
  {
    id: "testimonial-3",
    name: "David Miller",
    location: "Chicago, United States",
    avatarPlaceholder: "DM",
    quote: "Great value for money. Setup guides were detailed and easy to follow. Now my kids have their cartoon channels, and I can watch Premier League games without expensive cable subscriptions.",
    rating: 4.8,
    packagePurchased: "Family Entertainment Package"
  },
  {
    id: "testimonial-4",
    name: "Sofia Rodríguez",
    location: "Monterrey, Mexico",
    avatarPlaceholder: "SR",
    quote: "Muy contenta con el servicio. Me ayudaron a configurarlo en mi Firestick y celular Android. Los canales de fútbol de México y Europa funcionan genial. Excelente soporte 24/7.",
    rating: 5,
    packagePurchased: "FIFA Special Package"
  },
  {
    id: "testimonial-5",
    name: "Sarah Tremblay",
    location: "Toronto, Canada",
    avatarPlaceholder: "ST",
    quote: "Perfect setup for hockey fans in Canada. I haven't missed an NHL game this season. The streams load fast, and there's no lag at all. Highly recommend their support on WhatsApp.",
    rating: 5,
    packagePurchased: "Sports Premium Package"
  }
];
