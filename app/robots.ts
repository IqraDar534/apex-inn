import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Replace the example.com placeholder with the real production domain before deployment.
    sitemap: "https://example.com/sitemap.xml",
  };
}