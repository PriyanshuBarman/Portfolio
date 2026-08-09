import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
