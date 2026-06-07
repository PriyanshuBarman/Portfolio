import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/lib/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_INFO.name,
    short_name: SITE_INFO.shortName,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    scope: "/",
    start_url: "/",
    display: "standalone",
    screenshots: [
      {
        src: "https://res.cloudinary.com/dmtp3bdzx/image/upload/v1780824379/Screenshot_2026-06-07-14-49-51-22_40deb401b9ffe8e1df2f1cc5ba480b12_nvjluw.jpg",
        type: "image/jpg",
        sizes: "720x1604",
        form_factor: "narrow",
      },
      {
        src: "https://res.cloudinary.com/dmtp3bdzx/image/upload/v1780824403/Screenshot_2026-06-07-14-50-11-77_40deb401b9ffe8e1df2f1cc5ba480b12_q5yrdk.jpg",
        type: "image/jpg",
        sizes: "720x1604",
        form_factor: "narrow",
      },
      {
        src: "https://res.cloudinary.com/dmtp3bdzx/image/upload/v1780823781/Screenshot_2026-06-07_144454_q6w1bk.png",
        type: "image/png",
        sizes: "1918x1078",
        form_factor: "wide",
      },
      {
        src: "https://res.cloudinary.com/dmtp3bdzx/image/upload/v1780823831/Screenshot_2026-06-07_144623_fiyfue.png",
        type: "image/png",
        sizes: "1918x1078",
        form_factor: "wide",
      },
    ],
  };
}
