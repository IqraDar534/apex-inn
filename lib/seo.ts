// Shared SEO helpers: the site URL, per-page metadata and JSON-LD serialisation.
import type { Metadata } from "next";
import { siteImages, type SiteImage } from "./siteImages";

// The preferred (canonical) origin. Canonical URLs, Open Graph URLs, robots.txt, the sitemap and
// structured data all use it. NEXT_PUBLIC_SITE_URL can override it, e.g. for a staging domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://apexinnneelumvalley.com"
).replace(/\/$/, "");

export const siteName = "Apex Inn Neelum Valley";

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

type PageMetadataOptions = {
  /** Full <title>, used as-is (no template) so each page controls its own wording. */
  title: string;
  description: string;
  /** Route path, e.g. "/rooms". Used for the canonical and Open Graph URLs. */
  path: string;
  image?: SiteImage;
};

// Open Graph and Twitter objects replace (not merge with) the root layout's, so every page
// builds the full set here.
export function pageMetadata({
  title,
  description,
  path,
  image = siteImages.socialShare,
}: PageMetadataOptions): Metadata {
  const images = [{ url: image.src, alt: image.alt }];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_PK",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

/** Serialises JSON-LD for a <script> tag, escaping "<" so content cannot close the tag. */
export const jsonLdScript = (data: object) => ({
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});
