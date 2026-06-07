import { seoCountries, SEOCountry } from "./countries";
import { seoSports, SEOSport } from "./sports";
import { seoPackages, SEOPackage } from "./packages";
import { seoDevices, SEODevice } from "./devices";

// Helper: capitalize string
export function capitalize(str: string): string {
  return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// 1. Template generators for Country Pages: /iptv/[country]
export function generateCountrySEO(country: SEOCountry) {
  const primaryKeywords = country.localKeywords.join(", ");
  return {
    h1: `Premium TV Packages in ${country.name} - Stable Live Channels Guide`,
    metaTitle: `Premium TV Packages ${country.name} | Live Sports & Entertainment`,
    metaDescription: `Discover reliable, premium TV package configurations in ${country.name}. Watch live sports, international news, movies, and cartoons with ${country.ispList[0]} and more.`,
    intro: `Welcome to the ultimate guide to configuring premium TV packages in ${country.name}. ${country.introductionSnippet} With our custom M3U playlists and Xtream Codes setups, you can access your favorite networks on your Smart TV, smartphone, or Firestick. Enjoy stable streaming, optimized local routing, and 24/7 client support via WhatsApp.`,
    keywords: country.localKeywords,
    faqs: [
      ...country.faqSet,
      {
        question: `What speeds do I need in ${country.name}?`,
        answer: `For standard HD streams, we recommend a speed of 15 Mbps. For full 4K live sports and movie broadcasts on networks like ${country.ispList.slice(0,2).join(" or ")}, a stable fiber connection of 25 Mbps or higher is ideal.`
      }
    ]
  };
}

// 2. Template generators for Country + Sports Pages: /iptv/[country]/[sport]
export function generateCountrySportSEO(country: SEOCountry, sport: SEOSport) {
  const sportName = sport.name;
  const countryName = country.name;
  const isSoccer = sport.slug === "soccer" || sport.slug === "football" || sport.slug === "fifa";

  let h1 = `Watch Live ${sportName} in ${countryName} - Premium TV Packages`;
  let metaTitle = `${sportName} Live TV Package in ${countryName} | Premium Channels`;
  let metaDescription = `Access premium live ${sportName} broadcasts in ${countryName}. Get setup guides for ${sport.tournaments.slice(0, 3).join(", ")}, compatible with ${country.ispList.slice(0, 2).join(" and ")} networks.`;
  let intro = `Are you a fan of live ${sportName} in ${countryName}? Missing major tournaments can be highly frustrating. Our premium sports package configurations offer access to ${sport.description} This setup is designed specifically for networks in ${countryName} such as ${country.ispList.join(", ")}, reducing ping times and eliminating game-time buffering.`;

  if (sport.slug === "fifa") {
    h1 = `FIFA Live TV Packages & Schedules in ${countryName}`;
    metaTitle = `FIFA Match IPTV Coverage ${countryName} | Premium Football Packages`;
    metaDescription = `Follow FIFA international football qualifiers and schedules in ${countryName}. Secure stable, high-definition matchday streams. WhatsApp support.`;
    intro = `The biggest football tournaments are right around the corner, and football fans in ${countryName} need reliable coverage. Our FIFA Special package guide lists all networks broadcasting official FIFA qualification matches, group stages, and global friendlies. Configure your TV with local ${countryName} CDNs to stay updated.`;
  }

  return {
    h1,
    metaTitle,
    metaDescription,
    intro,
    faqs: [
      {
        question: `How can I stream ${sportName} matches legally in ${countryName}?`,
        answer: `Our service provides configuration guides that link you to official regional broadcasters. Depending on licensing in ${countryName}, matches will render on major sport networks. Contact our WhatsApp line to confirm your regional channel list.`
      },
      {
        question: `Which tournaments are covered in the ${countryName} ${sportName} setup?`,
        answer: `We cover all major tournaments including ${sport.tournaments.join(", ")}. Uptime and channel lists are verified constantly.`
      }
    ]
  };
}

// 3. Template generators for Country + Package Pages: /packages/[country]/[package]
export function generateCountryPackageSEO(country: SEOCountry, pckg: SEOPackage) {
  const packageName = pckg.name;
  const countryName = country.name;

  return {
    h1: `${packageName} Package in ${countryName} - Premium Channels Guide`,
    metaTitle: `${packageName} IPTV Package ${countryName} | Live TV & Movies`,
    metaDescription: `Get the best ${packageName} package in ${countryName}. Learn how to configure your account for ${pckg.targetFocus}. High uptime servers, 24/7 WhatsApp help.`,
    intro: `Looking for the perfect entertainment or sports setup in ${countryName}? The ${packageName} package is ${pckg.introHighlight} Fully optimized for users on ${country.name} network providers like ${country.ispList.slice(0, 3).join(", ")}, this configuration delivers outstanding performance for ${pckg.targetFocus}. Get set up in under 5 minutes with our guide.`,
    faqs: [
      {
        question: `What features are included in the ${packageName} package in ${countryName}?`,
        answer: `The package includes dedicated routing configuration files, support for ${pckg.targetFocus}, and compatibility with all major streaming players. Reach out on WhatsApp to receive the current pricing and channel lists.`
      },
      {
        question: `Can I try the ${packageName} package in ${countryName} before buying?`,
        answer: `Yes, we support low-cost trial configurations for clients in ${countryName}. Simply click the WhatsApp inquiry button to speak with a representative and set up your trial credentials.`
      }
    ]
  };
}

// 4. Template generators for FIFA Schedule Pages: /fifa-schedule/[country]
export function generateFifaScheduleSEO(country: SEOCountry) {
  const countryName = country.name;
  return {
    h1: `FIFA Football Match Schedules in ${countryName} - Premium IPTV`,
    metaTitle: `FIFA Schedule IPTV ${countryName} | Watch Live Soccer Online`,
    metaDescription: `Plan your soccer matchdays with the official FIFA schedule guide in ${countryName}. Get premium, low-latency live channel configurations for football fans.`,
    intro: `Stay ahead of the game with our dedicated FIFA match schedule guide for soccer fans in ${countryName}. We map out upcoming qualifying matches, continental cups, and friendly tournaments, providing you with precise channel listings and configuration guides. Bypassing regional blackout restrictions is simple when routing your connections via local CDN nodes on ${country.ispList[0]} or other networks.`,
    faqs: [
      {
        question: `Are all FIFA qualifier matches shown live in ${countryName}?`,
        answer: `Yes, we configure channels from international broadcasters that carry every official FIFA qualifier and friendly match. Contact us via WhatsApp to double check coverage for specific upcoming games.`
      },
      {
        question: `Is the schedule adjusted for the timezone of ${countryName}?`,
        answer: `Yes, our match cards display the GMT/UTC times which can easily be configured to your local ${countryName} time zone. We also send out live reminders to our premium subscribers on WhatsApp.`
      }
    ]
  };
}

// 5. Template generators for Device Pages: /devices/[deviceSlug]
export function generateDeviceSEO(device: SEODevice) {
  return {
    h1: `How to Setup Premium TV Package on ${device.name}`,
    metaTitle: `${device.name} IPTV Setup Guide | Premium TV Packages`,
    metaDescription: `Step-by-step setup instructions to install premium TV packages on your ${device.name}. Recommended players: ${device.recommendedApps.join(", ")}. Simple M3U/Xtream setup.`,
    intro: `Configuring your premium TV package on an ${device.name} is incredibly straightforward when you follow our optimized guide. Whether you are using ${device.recommendedApps.slice(0, 2).join(" or ")}, our servers deliver maximum speed and zero buffering. Follow the steps below to initialize your channel lists and begin watching live sports, movies, and news.`,
    faqs: [
      {
        question: `What is the easiest app for ${device.name} streaming?`,
        answer: `We highly recommend ${device.recommendedApps[0]} as it features a clean user interface, fast guide loading, and full compatibility with our electronic program guide (EPG).`
      },
      {
        question: `Is the setup difficulty high on ${device.name}?`,
        answer: `The setup difficulty is rated as ${device.difficulty}. Most users get their streams working in less than 5 minutes by following our step-by-step list.`
      }
    ]
  };
}
