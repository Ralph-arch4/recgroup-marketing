import type { MetadataRoute } from "next";
import { identity } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: identity.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
