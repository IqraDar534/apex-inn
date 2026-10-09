import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

// Not linked from the site navigation (bookings go through /contact), so it stays out of search
// results and the sitemap to avoid competing with the Contact page.
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Booking Request | Apex Inn Neelum Valley",
    description: "Send a booking request for your stay at Apex Inn guest house in Neelum Valley.",
    path: "/booking",
  }),
  robots: { index: false, follow: true },
};

export default function BookingLayout({ children }: LayoutProps<"/booking">) {
  return children;
}