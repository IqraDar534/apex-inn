import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Replace this placeholder with the real production domain before deployment.
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Apex Inn | Comfortable Stay Away From Home",
    template: "%s | Apex Inn",
  },
  description:
    "Apex Inn offers comfortable accommodation, welcoming hospitality, thoughtfully prepared rooms, and a relaxing guest stay.",
  keywords: [
    "Apex Inn",
    "comfortable accommodation",
    "guest house",
    "welcoming hospitality",
    "rooms",
    "guest stay",
  ],
  openGraph: {
    title: "Apex Inn | Comfortable Stay Away From Home",
    description:
      "Apex Inn offers comfortable accommodation, welcoming hospitality, thoughtfully prepared rooms, and a relaxing guest stay.",
    siteName: "Apex Inn",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1600,
        height: 1100,
        alt: "Warm exterior of the Apex Inn guest house",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Inn | Comfortable Stay Away From Home",
    description:
      "Apex Inn offers comfortable accommodation, welcoming hospitality, thoughtfully prepared rooms, and a relaxing guest stay.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
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
