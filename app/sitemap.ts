import { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { seoCountries } from "@/data/seo/countries";
import { seoSports } from "@/data/seo/sports";
import { seoPackages } from "@/data/seo/packages";
import { seoDevices } from "@/data/seo/devices";
import { blogsData } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 1. Static base pages
  const staticPages = [
    "",
    "/packages",
    "/fifa-coverage",
    "/schedule",
    "/channels",
    "/devices",
    "/blog",
    "/contact",
    "/faq",
    "/south-africa",
    "/brazil",
    "/usa",
    "/mexico",
    "/canada",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? (1.0 as const) : (0.8 as const),
  }));

  // 2. Programmatic Country SEO: /iptv/[country]
  const countryPages = seoCountries.map((c) => ({
    url: `${baseUrl}/iptv/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Programmatic Country + Sport: /iptv/[country]/[sport]
  const countrySportPages: MetadataRoute.Sitemap = [];
  seoCountries.forEach((c) => {
    seoSports.forEach((s) => {
      countrySportPages.push({
        url: `${baseUrl}/iptv/${c.slug}/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  });

  // 4. Programmatic Country + Package: /packages/[country]/[package]
  const countryPackagePages: MetadataRoute.Sitemap = [];
  seoCountries.forEach((c) => {
    seoPackages.forEach((p) => {
      countryPackagePages.push({
        url: `${baseUrl}/packages/${c.slug}/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  });

  // 5. Programmatic FIFA Schedule: /fifa-schedule/[country]
  const fifaSchedulePages = seoCountries.map((c) => ({
    url: `${baseUrl}/fifa-schedule/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 6. Programmatic Devices: /devices/[device]
  const devicePages = seoDevices.map((d) => ({
    url: `${baseUrl}/devices/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // 7. Dynamic Blog detail pages: /blog/[slug]
  const blogPages = blogsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...countryPages,
    ...countrySportPages,
    ...countryPackagePages,
    ...fifaSchedulePages,
    ...devicePages,
    ...blogPages,
  ];
}
