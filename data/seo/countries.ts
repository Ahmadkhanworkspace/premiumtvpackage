export interface SEOCountry {
  slug: string;
  name: string;
  flag: string;
  localName: string;
  primarySport: string;
  soccerTerm: string; // soccer or football
  ispList: string[];
  localKeywords: string[];
  introductionSnippet: string;
  faqSet: { question: string; answer: string }[];
}

export const seoCountries: SEOCountry[] = [
  {
    slug: "south-africa",
    name: "South Africa",
    flag: "🇿🇦",
    localName: "Mzansi",
    primarySport: "football",
    soccerTerm: "football",
    ispList: ["Telkom", "Vodacom", "MTN", "Rain", "Cool Ideas"],
    localKeywords: ["IPTV South Africa", "South Africa football package", "best South Africa streams"],
    introductionSnippet: "South African viewers need high-fidelity configurations that work seamlessly with local network providers, bypassing load shedding outages and ISP connection throttling.",
    faqSet: [
      {
        question: "How do I configure my package in South Africa?",
        answer: "You can load the configuration M3U files on smart TV apps like Smart STB, IPTV Smarters, or XCIPTV. We provide complete setup guides via WhatsApp."
      },
      {
        question: "Which South African ISPs are fully compatible?",
        answer: "Major fiber and LTE network providers including Vodacom, MTN, Telkom, Rain, and Cool Ideas are optimized for lag-free playback."
      }
    ]
  },
  {
    slug: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    localName: "Brasil",
    primarySport: "futebol",
    soccerTerm: "futebol",
    ispList: ["Claro", "Vivo", "Oi", "TIM", "Copel"],
    localKeywords: ["IPTV Brasil", "futebol do Brasil", "pacotes de TV premium Brasil"],
    introductionSnippet: "Para os torcedores apaixonados no Brasil, oferecemos a melhor estabilidade para assistir ao Brasileirão e torneios internacionais sem perder nenhum gol devido a travamentos.",
    faqSet: [
      {
        question: "Como funciona a instalação no Brasil?",
        answer: "Nossos servidores são otimizados com CDNs no Brasil. A ativação leva poucos minutos enviando o login do aplicativo no WhatsApp."
      },
      {
        question: "Posso assistir no Claro ou Vivo Fibra?",
        answer: "Sim, os pacotes são 100% otimizados e seguros contra bloqueios ou lentidões das principais operadoras brasileiras."
      }
    ]
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    localName: "USA",
    primarySport: "soccer",
    soccerTerm: "soccer",
    ispList: ["Comcast Xfinity", "Spectrum", "AT&T", "Verizon Fios", "Cox"],
    localKeywords: ["IPTV USA", "soccer live TV package", "US premium sports IPTV"],
    introductionSnippet: "US users expect reliable, 4K-supported streams and instant customer support to watch major league tournaments and high-definition entertainment networks without cable.",
    faqSet: [
      {
        question: "Do I need a VPN to watch premium channels in the USA?",
        answer: "A VPN is not required due to our secure encrypted routing. However, you are free to use any VPN provider alongside our configurations."
      },
      {
        question: "Will I get local news and MLS streams in the US?",
        answer: "Yes, our configurations include detailed guidelines for regional networks broadcasting MLS, NFL, and local news."
      }
    ]
  },
  {
    slug: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    localName: "México",
    primarySport: "fútbol",
    soccerTerm: "fútbol",
    ispList: ["Telmex Infinitum", "Izzi", "Totalplay", "Megacable"],
    localKeywords: ["IPTV México", "paquetes premium México", "fútbol en vivo México"],
    introductionSnippet: "En México, la pasión por la Liga MX y las copas internacionales exige servidores locales de baja latencia para un streaming de alta definición sin molestos cortes.",
    faqSet: [
      {
        question: "¿Qué canales de la Liga MX están disponibles?",
        answer: "Se configuran todos los canales deportivos de alta demanda en México para ver los juegos de local y de visitante."
      },
      {
        question: "¿El servicio es compatible con Totalplay e Infinitum?",
        answer: "Sí, es totalmente compatible con todas las redes fijas y móviles en México sin restricciones."
      }
    ]
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    localName: "Canada",
    primarySport: "hockey",
    soccerTerm: "soccer",
    ispList: ["Rogers", "Bell", "Shaw", "Telus", "Cogeco"],
    localKeywords: ["IPTV Canada", "Canada soccer packages", "best Canadian sports streams"],
    introductionSnippet: "Canadian viewers demand stable streams for local hockey matchups and European soccer leagues, especially during peak weekend fixtures where ISP throttling might occur.",
    faqSet: [
      {
        question: "Can I watch NHL games and soccer in Canada?",
        answer: "Absolutely. Our packages provide complete guide listings for Canadian regional networks carrying hockey games and Premier League matchups."
      },
      {
        question: "How does the setup work with Rogers and Bell connections?",
        answer: "We bypass local ISP routing bottlenecks using CDN edge servers located in Montreal, Toronto, and Vancouver."
      }
    ]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    localName: "UK",
    primarySport: "football",
    soccerTerm: "football",
    ispList: ["BT", "Virgin Media", "Sky Broadband", "TalkTalk", "EE"],
    localKeywords: ["premium IPTV UK", "UK football IPTV packages", "watch sports online UK"],
    introductionSnippet: "UK football and sports enthusiasts can enjoy high-speed, buffer-free connection setups for major European leagues, standard entertainment, and news channels.",
    faqSet: [
      {
        question: "Is this optimized for UK ISPs?",
        answer: "Yes, we route traffic through premium UK-based CDN servers to prevent buffering on Sky, BT, and Virgin lines."
      },
      {
        question: "Can I watch Saturday 3 PM matches in the UK?",
        answer: "Our package configurations help you guide your setup to international networks that broadcast all weekend matches."
      }
    ]
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    localName: "Australia",
    primarySport: "cricket",
    soccerTerm: "football",
    ispList: ["Telstra", "Optus", "TPG", "Aussie Broadband"],
    localKeywords: ["IPTV Australia", "Australia sports packages", "best IPTV Sydney"],
    introductionSnippet: "Australian viewers require global routing systems to ensure standard TV and sports packages load instantly despite the geographic distance from European servers.",
    faqSet: [
      {
        question: "Do Australian users experience buffering due to distance?",
        answer: "No, our content distribution networks (CDNs) have nodes located in Sydney and Melbourne, ensuring lag-free loads."
      },
      {
        question: "Can I watch local AFL and rugby in Australia?",
        answer: "Yes, our custom guides configure channels broadcasting major Australian sports events."
      }
    ]
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    localName: "New Zealand",
    primarySport: "rugby",
    soccerTerm: "football",
    ispList: ["Spark", "One NZ", "2degrees", "Chorus"],
    localKeywords: ["IPTV NZ", "New Zealand sports packages", "premium TV Auckland"],
    introductionSnippet: "For fans in New Zealand, tracking the All Blacks and international rugby requires premium quality and high-definition streams that stay operational 24/7.",
    faqSet: [
      {
        question: "Is there support for Rugby channels in NZ?",
        answer: "Yes, we assist with setup guides for channels that carry Super Rugby, international tests, and global soccer."
      },
      {
        question: "How fast should my NZ fiber be?",
        answer: "A standard UFB connection of 15-20 Mbps is more than sufficient for clear Ultra HD playback."
      }
    ]
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    localName: "Deutschland",
    primarySport: "fussball",
    soccerTerm: "fussball",
    ispList: ["Telekom", "Vodafone", "1&1", "O2"],
    localKeywords: ["IPTV Deutschland", "premium TV Deutschland", "fussball live stream"],
    introductionSnippet: "Deutsche Zuschauer können erstklassige Streaming-Konfigurationen für die Bundesliga, europäische Pokale und internationales Fernsehen genießen, stabil und ohne Unterbrechungen.",
    faqSet: [
      {
        question: "Wie wird das IPTV in Deutschland eingerichtet?",
        answer: "Sie erhalten die Zugangsdaten und eine detaillierte Anleitung per WhatsApp. Die Einrichtung dauert weniger als 5 Minuten."
      },
      {
        question: "Gibt es Latenzprobleme bei Live-Sport in Deutschland?",
        answer: "Nein, unsere Hochgeschwindigkeitsserver mit Anti-Freeze-Technologie sorgen für eine minimale Latenz und erstklassige Bildqualität."
      }
    ]
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    localName: "France",
    primarySport: "football",
    soccerTerm: "football",
    ispList: ["Orange", "Free", "SFR", "Bouygues"],
    localKeywords: ["IPTV France", "chaines sport France", "IPTV premium francais"],
    introductionSnippet: "Les spectateurs en France exigent des flux en haute définition pour suivre la Ligue 1, la Champions League et les meilleures chaînes de divertissement sans saccades.",
    faqSet: [
      {
        question: "Puis-je regarder la Ligue 1 et le football européen?",
        answer: "Oui, les configurations comprennent les guides de chaînes diffusant tous les tournois majeurs européens."
      },
      {
        question: "Est-ce compatible avec la box Orange ou Free?",
        answer: "Tout à fait, nos formats s'adaptent parfaitement sur n'importe quelle box Android ou Smart TV connectée à votre réseau."
      }
    ]
  }
];
