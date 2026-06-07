export interface SEODevice {
  slug: string;
  name: string;
  keywords: string[];
  recommendedApps: string[];
  difficulty: "Easy" | "Medium" | "Advanced";
  setupSteps: string[];
}

export const seoDevices: SEODevice[] = [
  {
    slug: "smart-tv-iptv",
    name: "Smart TV",
    keywords: ["smart TV IPTV setup", "IPTV on Samsung TV", "LG Smart TV IPTV guide"],
    recommendedApps: ["Smart STB", "IBO Player", "IPTV Smarters Pro", "Duplex Play"],
    difficulty: "Easy",
    setupSteps: [
      "Turn on your Smart TV and open the App Store (LG Content Store or Samsung Smart Hub).",
      "Search for and install a recommended media player app, such as 'IBO Player' or 'IPTV Smarters Pro'.",
      "Launch the app and write down the MAC Address or Device ID displayed on screen.",
      "Send your Device ID/MAC Address to our support agent on WhatsApp, or paste the M3U playlist URL provided by us into the app's upload portal.",
      "Restart the app to load your premium TV package channels guide!"
    ]
  },
  {
    slug: "android-tv-iptv",
    name: "Android TV",
    keywords: ["Android TV box IPTV", "setup IPTV Android TV", "best Android TV media player"],
    recommendedApps: ["TiviMate", "XCIPTV", "IPTV Smarters Pro", "Kodi"],
    difficulty: "Easy",
    setupSteps: [
      "Open the Google Play Store on your Android TV or Android Box.",
      "Search for and download 'TiviMate Companion' or 'XCIPTV Player'.",
      "Select 'Add Playlist' and choose the 'Xtream Codes API' login method.",
      "Enter the Portal URL, Username, and Password sent to you by our team via WhatsApp.",
      "Click 'Apply' and allow the application to download the channels guide and VOD library."
    ]
  },
  {
    slug: "firestick-iptv",
    name: "Amazon Firestick",
    keywords: ["Firestick IPTV setup", "install IPTV on Fire TV", "best Firestick streaming guide"],
    recommendedApps: ["IPTV Smarters Pro", "TiviMate", "Downloader App"],
    difficulty: "Medium",
    setupSteps: [
      "Go to Settings > My Fire TV > Developer Options and enable 'Apps from Unknown Sources' (if Developer Options is hidden, click 'About' and click the Fire TV name 7 times).",
      "Go back to the home screen, search for the 'Downloader' app, and install it.",
      "Open Downloader and enter the quick download code for IPTV Smarters Pro (e.g. 250931 or direct APK URL).",
      "Install the downloaded APK file and open IPTV Smarters Pro.",
      "Choose 'Log in with Xtream Codes API' and enter the credentials provided by our support team."
    ]
  },
  {
    slug: "iphone-iptv",
    name: "iPhone & iPad",
    keywords: ["IPTV on iOS", "iPhone IPTV setup guide", "best Apple TV IPTV apps"],
    recommendedApps: ["GSE Smart IPTV", "Smarters Player Lite", "Snappy IPTV"],
    difficulty: "Easy",
    setupSteps: [
      "Open the App Store on your iPhone or iPad.",
      "Search for and download 'Smarters Player Lite' or 'GSE Smart IPTV'.",
      "Open the application and select 'Add Playlist'.",
      "Enter the M3U playlist link we sent you on WhatsApp, or log in using your Xtream Codes credentials.",
      "Tap 'Load' and start watching your premium channels on the go."
    ]
  },
  {
    slug: "android-iptv",
    name: "Android Smartphone",
    keywords: ["Android phone IPTV", "setup IPTV on mobile", "best mobile IPTV player"],
    recommendedApps: ["IPTV Smarters Pro", "GSE IPTV", "VLC for Android"],
    difficulty: "Easy",
    setupSteps: [
      "Open the Google Play Store on your mobile device.",
      "Search for 'IPTV Smarters Pro' and install the app.",
      "Launch the app, select 'Login with Xtream Codes API'.",
      "Input the server URL, username, and password sent to you after subscription activation.",
      "Tap 'Login' to load and filter your live sports and movies lists."
    ]
  },
  {
    slug: "roku-iptv",
    name: "Roku",
    keywords: ["Roku IPTV channel", "setup IPTV on Roku", "Roku streaming player guide"],
    recommendedApps: ["Web Video Caster", "IPTV Smarters (Developer Mode)"],
    difficulty: "Advanced",
    setupSteps: [
      "Since Roku restricts standard IPTV apps, download 'Web Video Caster' on your iPhone or Android mobile device.",
      "Install the matching 'Web Video Receiver' app on your Roku player through the Roku Channel Store.",
      "Open Web Video Caster on your phone and load the M3U playlist URL we provided.",
      "Connect the phone app to your Roku device on the same Wi-Fi network.",
      "Select a channel on your phone, and cast it directly to your Roku TV in Full HD."
    ]
  }
];
