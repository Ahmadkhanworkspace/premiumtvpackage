export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "setup" | "sports" | "billing";
}

export const faqsData: FAQItem[] = [
  {
    category: "general",
    question: "What is Premium TV Packages service?",
    answer: "We offer premium package configurations and support that allow you to watch live sports, entertainment, movies, and news from global networks. Our service provides setup support, optimized server routing, and custom channels guide configurations for your streaming devices."
  },
  {
    category: "general",
    question: "Is this service legal?",
    answer: "Yes, our packages are fully focused on providing licensed channel availability guides, setup assistance, and configuration templates. We do not restream, broadcast, or sell copyrighted signals directly. Channel availability depends on your region, broadcaster licenses, and individual subscription setups. We advise contacting our support via WhatsApp to check the availability of specific channels in your region."
  },
  {
    category: "setup",
    question: "Which devices are supported?",
    answer: "Our package configurations are compatible with almost all modern devices. This includes Smart TVs (Samsung, LG, Sony, Hisense), Android TV boxes, Amazon Firestick, Apple TV, iPhones, iPads, Android smartphones, Roku, MAG boxes, and standard web browsers on Windows and macOS."
  },
  {
    category: "setup",
    question: "How long does it take to activate after purchase?",
    answer: "Once you purchase a package, we will send you the credentials (M3U playlist URL, Xtream Codes API login, or instructions) via WhatsApp or email. Setup normally takes less than 5 minutes. Our agents are online 24/7 to help guide you through the process."
  },
  {
    category: "sports",
    question: "Can I watch live football (FIFA, Champions League, local leagues)?",
    answer: "Yes, our sports premium and FIFA special configurations are designed to route you to major sports broadcasters. This gives you coverage of the Premier League, La Liga, Serie A, MLS, PSL, Copa Libertadores, and World Cup matches. Note that actual channel availability can vary by region, so please contact support to verify."
  },
  {
    category: "billing",
    question: "Do you offer a free trial?",
    answer: "We offer low-cost trial packages and quick verification steps. Contact us on WhatsApp to check if a short-term trial setup is available for your device today."
  },
  {
    category: "billing",
    question: "What are your payment methods?",
    answer: "We support a wide range of secure payment methods, including Credit/Debit cards (Visa, Mastercard), PayPal, and localized fast payment options depending on your country. All payments are processed through secure global gateways."
  },
  {
    category: "billing",
    question: "Can I use my subscription on multiple devices?",
    answer: "Our basic plans (Starter and Sports Premium) support 1 active connection. The Family Entertainment package supports 2 active connections, and the Ultimate Global supports 3 active connections simultaneously. If you try to run more devices than your plan permits, the stream may freeze or buffer."
  }
];
