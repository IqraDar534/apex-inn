import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import { siteName, siteUrl } from "../lib/seo";
import { siteImages } from "../lib/siteImages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const defaultTitle = "Apex Inn Neelum Valley | Guest House in Neelum Valley";
const defaultDescription =
  "Apex Inn is a comfortable guest house in Neelum Valley, Azad Kashmir, with clean rooms, warm hospitality, free Wi-Fi and parking.";
const defaultImages = [{ url: siteImages.socialShare.src, alt: siteImages.socialShare.alt }];

// Fallbacks for any route without its own metadata; each page sets its own title, description,
// canonical URL and social tags via pageMetadata() in lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Apex Inn",
  },
  description: defaultDescription,
  applicationName: siteName,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    locale: "en_PK",
    type: "website",
    images: defaultImages,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: defaultImages,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
