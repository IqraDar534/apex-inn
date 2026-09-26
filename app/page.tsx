import AboutPreview from "../components/home/AboutPreview";
import BookingCTA from "../components/home/BookingCTA";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import FeaturedRooms from "../components/home/FeaturedRooms";
import GalleryPreview from "../components/home/GalleryPreview";
import Hero from "../components/home/Hero";
import LocationPreview from "../components/home/LocationPreview";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedRooms />
      <FacilitiesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <LocationPreview />
      <BookingCTA />
    </>
  );
}
