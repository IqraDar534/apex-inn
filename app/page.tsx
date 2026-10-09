import AboutPreview from "../components/home/AboutPreview";
import BookingCTA from "../components/home/BookingCTA";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import FeaturedRooms from "../components/home/FeaturedRooms";
import GalleryPreview from "../components/home/GalleryPreview";
import Hero from "../components/home/Hero";
import LocationPreview from "../components/home/LocationPreview";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { jsonLdScript, pageMetadata } from "../lib/seo";
import { hotelJsonLd } from "../lib/structuredData";

export const metadata = pageMetadata({
  title: "Apex Inn Neelum Valley | Guest House in Neelum Valley",
  description:
    "Stay at Apex Inn, a comfortable guest house in Neelum Valley, Azad Kashmir, with Deluxe, Executive and Family rooms, free Wi-Fi, parking and 24/7 reception.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(hotelJsonLd)} />
      <Hero />
      <AboutPreview />
      <FeaturedRooms />
      <FacilitiesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <LocationPreview />
      <BookingCTA />
    </main>
  );
}
