import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_INFO.url!,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
