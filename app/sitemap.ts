import type { MetadataRoute } from "next";
import { featuredRooms } from "../components/rooms/roomData";
import { absoluteUrl } from "../lib/seo";

// Update when page content changes. /booking is noindex and intentionally left out.
const lastModified = "2026-09-27";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/rooms", priority: 0.9 },
  ...featuredRooms.map((room) => ({ path: `/rooms/${room.slug}`, priority: 0.8 })),
  { path: "/contact", priority: 0.8 },
  { path: "/facilities", priority: 0.7 },
  { path: "/gallery", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
