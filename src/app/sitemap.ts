import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/departments",
  "/doctors",
  "/services",
  "/facilities",
  "/gallery",
  "/faq",
  "/appointment",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "" ? "/" : `${route}/`}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
