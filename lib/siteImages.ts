// Single source of truth for the photographs used in the site's page sections.
// Each image is assigned to exactly one place; the check at the bottom fails the
// build if the same file is referenced twice. The full /gallery page is separate
// (see galleryImages.ts) and intentionally shows the complete collection.

export type SiteImage = {
  src: string;
  alt: string;
  /** Tailwind object-position class used when the photo is cropped by object-cover. */
  position?: string;
};

export type RoomImages = {
  /** Home page Featured Rooms card. */
  featured: SiteImage;
  /** /rooms listing card. */
  card: SiteImage;
  /** /rooms/[slug] main photo followed by supporting photos. */
  detail: [SiteImage, ...SiteImage[]];
};

// Paths without an extension default to .jpg.
const photo = (path: string, alt: string, position?: string): SiteImage => ({
  src: `/images/apex-inn/${/\.\w+$/.test(path) ? path : `${path}.jpg`}`,
  alt,
  position,
});

export const siteImages = {
  homeHero: photo(
    "exterior/day-front-lawn.jpeg",
    "Apex Inn guest house above its stone-walled lawn with pine forest and Neelum Valley mountains behind",
    "object-[center_30%]",
  ),
  homeAbout: photo(
    "entrance/carved-entrance-night",
    "Carved wooden double doors under the lit timber porch at the Apex Inn entrance",
  ),
  homeWhyChooseUs: photo(
    "views/balcony-valley-view",
    "Covered balcony at Apex Inn overlooking green Neelum Valley hills and the river",
    "object-[center_60%]",
  ),
  homeGallery: [
    photo(
      "exterior/night-garden-side",
      "Apex Inn lit up at night above its terraced garden and stone fire pit",
    ),
    photo(
      "common/dining-hall-01",
      "Covered dining hall at Apex Inn with a wooden table, chairs and garden windows",
    ),
    photo(
      "common/sitting-nook-01",
      "Sitting nook with wooden armchairs under cube pendant lights at Apex Inn",
      "object-[center_70%]",
    ),
    photo(
      "outdoor/fire-pit-night",
      "Evening fire in the stone fire pit on the Apex Inn lawn",
      "object-[center_60%]",
    ),
    photo(
      "rooms/modern-king/modern-king-06",
      "Guest room with a wooden double bed, grey feature wall and wood floor at Apex Inn",
      "object-[center_65%]",
    ),
    photo(
      "exterior/day-valley-panorama-01",
      "Apex Inn and its gardens with the forested mountains of Neelum Valley behind",
      "object-[center_45%]",
    ),
  ],
  aboutPage: photo(
    "exterior/day-driveway-valley",
    "Apex Inn above its driveway and gardens, looking down Neelum Valley",
    "object-[center_45%]",
  ),
  facilitiesPage: photo(
    "common/reception-lounge-01",
    "Apex Inn reception desk with wooden sofas in the guest lounge",
  ),
  rooms: {
    "executive-room": {
      featured: photo(
        "rooms/modern-king/modern-king-01",
        "Executive Room at Apex Inn with a wooden king bed, grey feature wall and wood floor",
      ),
      card: photo(
        "rooms/modern-king/modern-king-02",
        "Executive Room with a carved headboard, teal rug and mirrored entry",
      ),
      detail: [
        photo(
          "rooms/modern-king/modern-king-03",
          "Spacious Executive Room with floor-length curtains and a round rug",
          "object-[center_60%]",
        ),
        photo(
          "rooms/modern-king/modern-king-04",
          "Executive Room bed beside a bedside table and wooden door",
          "object-[center_65%]",
        ),
        photo(
          "rooms/modern-king/modern-king-05",
          "Executive Room with wall mirror and warm wall light",
          "object-[center_65%]",
        ),
      ],
    },
    "deluxe-room": {
      featured: photo(
        "rooms/carved-king/carved-king-05",
        "Deluxe Room at Apex Inn with a hand-carved wooden king bed under warm lighting",
      ),
      card: photo(
        "rooms/carved-king/carved-king-01",
        "Deluxe Room with a hand-carved wooden king bed and pendant lanterns",
      ),
      detail: [
        photo(
          "rooms/carved-king/carved-king-03",
          "Deluxe Room with a carved king bed, built-in wardrobe and wooden floor",
          "object-[center_60%]",
        ),
        photo(
          "rooms/carved-king/carved-king-06",
          "Side view of the carved king bed with blue linen in the Deluxe Room",
          "object-[center_65%]",
        ),
        photo(
          "rooms/carved-king/carved-king-04",
          "Deluxe Room bed beside a wooden bedside table",
          "object-[center_65%]",
        ),
      ],
    },
    "family-room": {
      featured: photo(
        "rooms/family/family-room-01",
        "Spacious Family Room at Apex Inn with several beds and dark curtains",
      ),
      card: photo(
        "rooms/family/family-room-03",
        "Family Room with a wooden sofa set, rug and three beds",
      ),
      detail: [
        photo(
          "rooms/family/family-room-02",
          "Family Room with a double bed, extra bed and wooden armchairs",
        ),
        photo(
          "rooms/family/family-room-06",
          "Carved double bed with armchairs in the Family Room",
        ),
        photo(
          "rooms/family/family-room-04",
          "Family Room seating area beside the beds",
          "object-[center_65%]",
        ),
      ],
    },
  } satisfies Record<string, RoomImages>,
  /** Link-preview image for social sharing; not rendered on any page. */
  socialShare: photo(
    "exterior/day-valley-panorama-02",
    "Apex Inn guest house in Neelum Valley with forested mountains behind",
  ),
};

const renderedImages: SiteImage[] = [
  siteImages.homeHero,
  siteImages.homeAbout,
  siteImages.homeWhyChooseUs,
  ...siteImages.homeGallery,
  siteImages.aboutPage,
  siteImages.facilitiesPage,
  ...Object.values(siteImages.rooms).flatMap((room) => [room.featured, room.card, ...room.detail]),
  siteImages.socialShare,
];

const seen = new Set<string>();
for (const { src } of renderedImages) {
  if (seen.has(src)) {
    throw new Error(`Image is assigned more than once: ${src}`);
  }
  seen.add(src);
}
