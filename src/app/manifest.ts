import type { MetadataRoute } from "next";
import { siteConfig, basePath } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d4ed8",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
