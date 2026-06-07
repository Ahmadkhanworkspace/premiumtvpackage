export interface CountryDetail {
  slug: string;
  name: string;
  flag: string;
  localSportsTitle: string;
  localSportsDesc: string;
  seoTitle: string;
  seoDescription: string;
  introText: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const countriesData: Record<string, CountryDetail> = {
  "south-africa": {
    slug: "south-africa",
    name: "South Africa",
    flag: "🇿🇦",
    localSportsTitle: "Premier Football & Rugby Coverage in South Africa",
    localSportsDesc: "Follow local PSL action, international rugby championships, Premier League, and global tournaments with high-end, buffer-free feeds.",
    seoTitle: "Premium IPTV Packages South Africa | Football & Sports TV",
    seoDescription: "Discover the best premium TV packages in South Africa. View local and international football schedules, PSL coverage guides, and premium live channels legally.",
    introText: "South African sports fans deserve high-fidelity live feeds. With our premium TV package configuration support, you can access international sports networks, local broadcasts, and top entertainment channels on your Smart TV or mobile devices. Avoid missing any matches, whether it's PSL, Premier League, or world tournaments.",
    benefits: [
      "Dedicated servers optimized for South African ISPs",
      "Full coverage of international soccer, rugby, and cricket tournaments",
      "Compatible with local streaming devices (Smart TV, Apple TV, Android box, Firestick)",
      "Anti-freeze technology to guarantee lag-free streaming during heavy matchdays"
    ],
    faqs: [
      {
        question: "Will I be able to watch PSL and Premier League matches in South Africa?",
        answer: "Yes, our packages provide detailed guides and setup configurations for international sports networks carrying the PSL, English Premier League, and UEFA Champions League."
      },
      {
        question: "Does the service work with local South African ISPs?",
        answer: "Our package configurations are optimized to work smoothly with major ISPs including Telkom, Vodacom, MTN, Rain, and Cool Ideas. We recommend a fiber connection of 15 Mbps or higher for stable 4K streams."
      },
      {
        question: "Are payment methods setup-friendly for South Africans?",
        answer: "Yes! When you contact us on WhatsApp, we can assist you with global payment links that work seamlessly with South African bank cards."
      }
    ]
  },
  "brazil": {
    slug: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    localSportsTitle: "Futebol ao Vivo e Conteúdo Premium no Brasil",
    localSportsDesc: "Assista ao Brasileirão, Copa Libertadores, Champions League e campeonatos internacionais com qualidade de cinema.",
    seoTitle: "Melhores Pacotes IPTV Brasil | Canais de Futebol Premium",
    seoDescription: "Explore pacotes de TV premium no Brasil. Obtenha acesso estável e legal a canais de futebol, séries e filmes em HD/4K. Suporte via WhatsApp.",
    introText: "Para os apaixonados por futebol no Brasil, oferecemos a melhor consultoria e pacotes de TV premium do mercado. Acesse os principais canais esportivos nacionais e internacionais, coberturas completas de campeonatos estaduais, Brasileirão, Libertadores e muito mais. Esqueça travamentos nos momentos cruciais do jogo.",
    benefits: [
      "Rotas de servidores otimizadas para conexões no Brasil",
      "Grade completa de esportes em português e canais internacionais",
      "Suporte exclusivo em português via WhatsApp para configuração rápida",
      "VOD atualizado com filmes e séries dublados e legendados"
    ],
    faqs: [
      {
        question: "Os canais transmitem os jogos do Brasileirão e Libertadores?",
        answer: "Sim, os pacotes incluem guias detalhados de transmissão para os canais detentores dos direitos do Brasileirão Série A e B, Copa do Brasil e Libertadores da América."
      },
      {
        question: "Qual a velocidade de internet recomendada para o Brasil?",
        answer: "Recomendamos uma conexão estável de pelo menos 15 Mbps para canais HD e acima de 25 Mbps para transmissões esportivas em 4K Ultra HD."
      },
      {
        question: "Como funciona a ativação do serviço?",
        answer: "A ativação é imediata. Assim que entrar em contato pelo WhatsApp e escolher seu pacote, enviaremos os dados de configuração e guia de instalação passo a passo para sua Smart TV ou celular."
      }
    ]
  },
  "usa": {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    localSportsTitle: "Premium US Soccer, Football & Global Leagues",
    localSportsDesc: "Catch MLS, Premier League, NFL, NBA, NHL, and major global sports networks in crystal clear 4K/UHD quality.",
    seoTitle: "Premium IPTV Packages USA | Live Sports & Soccer TV",
    seoDescription: "Looking for top-tier IPTV packages in the USA? Enjoy MLS, European soccer, and live entertainment channel configurations. Clean, legal, and premium streams.",
    introText: "US sports fans demand high standards. Our premium package configurations grant access to nationwide sports channels, regional sports networks (RSNs), local news, and global soccer leagues. Enjoy premium entertainment without cable clutter, running smoothly on Firestick, Roku, and Apple TV.",
    benefits: [
      "Ultra-low latency channels for real-time sports updates",
      "Comprehensive NFL, NBA, MLS, and European soccer coverage",
      "Geographic routing with high-speed US-based servers",
      "Fully compatible with Fire TV, Android TV, iOS, and Web browsers"
    ],
    faqs: [
      {
        question: "Can I watch European soccer and MLS matches in the US?",
        answer: "Absolutely. The packages provide full EPG setups for channels broadcasting Premier League, La Liga, Serie A, MLS, and international soccer tournaments."
      },
      {
        question: "Will I need a VPN to stream in the United States?",
        answer: "A VPN is not required as our servers utilize advanced encrypted routing. However, our streams are 100% compatible with all major VPN providers if you choose to use one."
      },
      {
        question: "How many devices can I connect simultaneously?",
        answer: "Connections depend on the package. Our Starter and Sports Premium packages allow 1 connection, the Family package includes 2 connections, and the Ultimate Global package supports up to 3 simultaneous devices."
      }
    ]
  },
  "mexico": {
    slug: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    localSportsTitle: "Fútbol Mexicano y Canales Internacionales en México",
    localSportsDesc: "Sigue la Liga MX, fútbol europeo, boxeo estelar y ligas internacionales con transmisiones estables y sin caídas.",
    seoTitle: "Paquetes de TV Premium México | Canales de Liga MX y Deportes",
    seoDescription: "Encuentra el mejor IPTV premium en México. Configuración de canales de Liga MX, Champions League y entretenimiento en HD/UHD. Soporte en WhatsApp.",
    introText: "El mejor fútbol de la Liga MX, los torneos internacionales y el boxeo de campeonato merecen una transmisión de alta calidad. En México, te ayudamos a configurar tu paquete de TV premium para disfrutar de canales deportivos, películas, series y canales locales en cualquier rincón del país con tecnología anti-interrupciones.",
    benefits: [
      "Servidores locales para una latencia mínima en México",
      "Todos los canales de deportes de México y Latinoamérica",
      "Películas y series en español latino, constantemente actualizados",
      "Asistencia en línea rápida a través de WhatsApp para tu Smart TV"
    ],
    faqs: [
      {
        question: "¿Puedo ver todos los partidos de la Liga MX?",
        answer: "Sí, a través de los canales deportivos premium incluidos, podrás acceder a las transmisiones de los partidos locales y visitantes de la Liga MX, así como la liguilla y la gran final."
      },
      {
        question: "¿Qué dispositivos son compatibles en México?",
        answer: "Es totalmente compatible con Smart TV (Samsung, LG, Hisense), TV Boxes de Android, Amazon Firestick, Roku, iPhones, celulares Android y computadoras."
      },
      {
        question: "¿Cómo contrato el servicio y qué formas de pago hay?",
        answer: "El proceso es rápido: haz clic en el botón de WhatsApp, dinos qué paquete te interesa y nuestro equipo te guiará con las opciones de pago y la configuración al instante."
      }
    ]
  },
  "canada": {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    localSportsTitle: "Hockey, MLS & Premium Soccer TV in Canada",
    localSportsDesc: "Never miss an NHL matchup, MLS game, Premier League soccer match, or winter sport event with stable 4K streams.",
    seoTitle: "Premium IPTV Packages Canada | NHL & Soccer Streaming TV",
    seoDescription: "Experience ultimate Canadian IPTV packages. Stream live hockey, Premier League, MLS, and global networks. High performance, 24/7 WhatsApp help.",
    introText: "From coast to coast, Canadian entertainment and sports fans trust our premium package configurations. Access high-definition live feeds of the NHL, MLS, MLS Cup, international soccer leagues, and top-tier family networks. Fast servers ensure no buffering even in freezing Canadian winters.",
    benefits: [
      "CDN edge servers located near Canadian metropolitan centers",
      "Full access to winter sports, hockey, soccer, and international packages",
      "Easy configuration files for Smart TVs, Firestick, and Roku",
      "Zero ISP throttling impact due to secure routing protocols"
    ],
    faqs: [
      {
        question: "Can I watch all NHL games and Premier League soccer in Canada?",
        answer: "Yes, our package structures allow you to configure and watch channels that broadcast regional NHL games, MLS games, and European soccer matches."
      },
      {
        question: "How do I configure my Firestick or Smart TV in Canada?",
        answer: "Upon subscribing, we send you a simple step-by-step setup guide and custom M3U/XC login codes via WhatsApp, getting you up and running in under 5 minutes."
      },
      {
        question: "What internet speed is required in Canada?",
        answer: "For Full HD streams, 15 Mbps is perfect. For Ultra HD/4K sports streams, we recommend a connection speed of 25 Mbps or higher."
      }
    ]
  }
};
