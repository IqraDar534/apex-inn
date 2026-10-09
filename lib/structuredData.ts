// JSON-LD structured data. Only facts already shown on the website belong here — no ratings,
// reviews or prices, and no street address until the real one is published on the site.
import { featuredRooms } from "../components/rooms/roomData";
import { checkInTime, checkOutTime, location, telephoneInternational } from "./contact";
import { absoluteUrl, siteName } from "./seo";
import { siteImages } from "./siteImages";

export const hotelId = absoluteUrl("/#hotel");

// Mirrors the facilities listed on /facilities.
const amenities = [
  "Free Wi-Fi",
  "Free Parking",
  "Air Conditioning",
  "Room Service",
  "24/7 Reception",
  "Housekeeping",
];

export const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": hotelId,
  name: siteName,
  alternateName: "Apex Inn",
  description:
    "Apex Inn is a guest house in Neelum Valley, Azad Kashmir, offering Deluxe, Executive and Family rooms with free Wi-Fi, free parking and 24/7 reception.",
  url: absoluteUrl("/"),
  telephone: telephoneInternational,
  image: [siteImages.homeHero, siteImages.socialShare, siteImages.homeAbout].map((image) =>
    absoluteUrl(image.src),
  ),
  address: {
    "@type": "PostalAddress",
    addressLocality: location.locality,
    addressRegion: location.region,
    addressCountry: location.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.latitude,
    longitude: location.longitude,
  },
  hasMap: location.mapLink,
  checkinTime: checkInTime.iso,
  checkoutTime: checkOutTime.iso,
  amenityFeature: amenities.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  containsPlace: featuredRooms.map((room) => ({
    "@type": "HotelRoom",
    name: room.name,
    url: absoluteUrl(`/rooms/${room.slug}`),
  })),
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
