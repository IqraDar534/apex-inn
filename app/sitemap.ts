import type { MetadataRoute } from "next";

const publicRoutes = [
  "/",
  "/rooms",
  "/gallery",
  "/about",
  "/facilities",
  "/contact",
  "/booking",
  "/faq",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    // Replace the example.com placeholder with the real production domain before deployment.
    url: `https://example.com${path}`,
    lastModified: "2026-09-23",
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}