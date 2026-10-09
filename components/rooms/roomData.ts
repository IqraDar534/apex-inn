import { siteImages, type RoomImages } from "../../lib/siteImages";

export type Room = {
  name: string;
  slug: string;
  description: string;
  guests: string;
  bed: string;
  images: RoomImages;
};

export const featuredRooms: Room[] = [
  {
    name: "Deluxe Room",
    slug: "deluxe-room",
    description: "A comfortable and thoughtfully designed room for couples or solo travelers.",
    guests: "2 Guests",
    bed: "1 King Bed",
    images: siteImages.rooms["deluxe-room"],
  },
  {
    name: "Executive Room",
    slug: "executive-room",
    description: "A spacious room with extra comfort and modern amenities for a relaxing stay.",
    guests: "2 Guests",
    bed: "1 King Bed",
    images: siteImages.rooms["executive-room"],
  },
  {
    name: "Family Room",
    slug: "family-room",
    description: "A spacious accommodation designed for families and small groups.",
    guests: "4 Guests",
    bed: "2 Beds",
    images: siteImages.rooms["family-room"],
  },
];
