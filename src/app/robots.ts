import type { MetadataRoute } from "next";
import { siteConfig, basePath } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [`${basePath}/api/`]
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url
  };
}
