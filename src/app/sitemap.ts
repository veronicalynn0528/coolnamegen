import { MetadataRoute } from "next";
import { generators } from "@/data/generators";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coolnamegen.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const generatorPages: MetadataRoute.Sitemap = generators.map((g) => ({
    url: `${baseUrl}/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: g.kd <= 15 ? 0.9 : g.kd <= 20 ? 0.8 : 0.7,
  }));

  return [...staticPages, ...generatorPages];
}
