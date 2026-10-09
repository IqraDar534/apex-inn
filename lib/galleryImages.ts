// Complete Apex Inn photo collection for the /gallery page.
// Unlike the rest of the site (see siteImages.ts), the gallery intentionally shows every
// real photo, so images used elsewhere may appear here too. Each file appears only once.

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GallerySection = {
  id: string;
  title: string;
  photos: GalleryPhoto[];
};

const portrait = (path: string, alt: string): GalleryPhoto => ({
  src: `/images/apex-inn/${path}.jpg`,
  alt,
  width: 960,
  height: 1280,
});

const landscape = (path: string, alt: string): GalleryPhoto => ({
  src: `/images/apex-inn/${path}.jpg`,
  alt,
  width: 1280,
  height: 960,
});

const sized = (path: string, alt: string, width: number, height: number): GalleryPhoto => ({
  src: `/images/apex-inn/${path}.jpg`,
  alt,
  width,
  height,
});

export const gallerySections: GallerySection[] = [
  {
    id: "guest-house",
    title: "The Guest House",
    photos: [
      portrait("exterior/day-pine-forest-01", "Apex Inn guest house surrounded by pine forest and gardens"),
      sized("exterior/day-valley-panorama-01", "Apex Inn with the forested mountains of Neelum Valley behind", 1280, 720),
      portrait("exterior/dusk-front-parking", "Front of Apex Inn at dusk with guest parking and sunflowers"),
      portrait("exterior/night-garden-side", "Apex Inn lit up at night above its terraced garden"),
      portrait("exterior/day-driveway-valley", "Apex Inn above its driveway, looking down Neelum Valley"),
      portrait("entrance/carved-entrance-night", "Carved wooden double doors under the lit timber porch at the Apex Inn entrance"),
      landscape("exterior/day-valley-panorama-02", "Apex Inn and its stone-walled garden under a cloudy sky"),
      portrait("exterior/night-roadside-01", "Apex Inn glowing with warm lights beside the valley road"),
      portrait("exterior/day-pine-forest-02", "Apex Inn with its red roof and tall pine trees behind"),
      portrait("exterior/night-driveway-sign", "Apex Inn sign and driveway leading to the guest house at night"),
      sized("exterior/day-garden-01", "Apex Inn seen across its lawn with pine-covered hills behind", 720, 1280),
      landscape("exterior/day-valley-panorama-03", "Apex Inn beside its garden with terraced fields on the hillside"),
      sized("exterior/night-front-cars", "Front of Apex Inn at night with cars parked outside", 720, 1280),
      portrait("exterior/night-gate", "Apex Inn gateway lit at night with the guest house beyond"),
      sized("exterior/day-garden-02", "Apex Inn and its garden path on an overcast day", 720, 1280),
      portrait("exterior/night-roadside-02", "Apex Inn lit up at night seen from the road"),
      sized("exterior/day-garden-03", "Apex Inn and its lawn beneath forested slopes", 720, 1280),
      landscape("parking/night-parking", "Guest parking at Apex Inn at night"),
    ],
  },
  {
    id: "views",
    title: "Balconies & Views",
    photos: [
      portrait("views/balcony-valley-view", "Covered balcony at Apex Inn overlooking green Neelum Valley hills and the river"),
      portrait("views/balcony-night-01", "Covered wooden balcony with hanging lights at night"),
      portrait("views/balcony-night-02", "Carved balcony arch with a hanging light and Neelum Valley at night"),
      landscape("views/night-overlook-01", "Night view from Apex Inn over the Neelum Valley road and nearby buildings"),
      portrait("views/balcony-night-03", "Balcony view of the moonlit garden and fire pit"),
      portrait("views/balcony-night-04", "Hanging balcony light glowing over the driveway at night"),
      portrait("views/night-overlook-02", "Night view down to the valley road from Apex Inn"),
    ],
  },
  {
    id: "outdoors",
    title: "Gardens & Outdoors",
    photos: [
      portrait("outdoor/fire-pit-night", "Evening fire in the stone fire pit on the Apex Inn lawn"),
      portrait("outdoor/garden-flowers-night", "Flowering garden beside the Apex Inn building at night"),
      portrait("outdoor/garden-night-01", "Moonlit garden path leading to the stone fire pit"),
    ],
  },
  {
    id: "common-areas",
    title: "Lounge & Dining",
    photos: [
      landscape("common/reception-lounge-01", "Apex Inn reception desk with wooden sofas in the guest lounge"),
      portrait("common/dining-hall-01", "Covered dining hall at Apex Inn with a wooden table, chairs and garden windows"),
      portrait("common/sitting-nook-01", "Sitting nook with wooden armchairs under cube pendant lights"),
      portrait("common/dining-hall-02", "Octagonal wooden dining table surrounded by chairs"),
      landscape("common/reception-lounge-02", "Guest lounge with wooden sofas and a reception desk"),
      portrait("common/sitting-nook-02", "Wooden armchairs beside a door under pendant lights"),
      portrait("common/dining-hall-03", "Dining hall with a timber ceiling and wooden furniture"),
      sized("common/corridor-01", "Hallway with pendant lights, artwork and wooden armchairs", 900, 1600),
      portrait("common/corridor-02", "Timber-panelled hallway with pendant lights and a seating corner"),
      portrait("common/corridor-03", "Hallway seating beside a door leading to a small terrace"),
    ],
  },
  {
    id: "rooms",
    title: "Rooms",
    photos: [
      portrait("rooms/modern-king/modern-king-01", "Executive Room at Apex Inn with a wooden king bed, grey feature wall and wood floor"),
      portrait("rooms/carved-king/carved-king-05", "Deluxe Room at Apex Inn with a hand-carved wooden king bed under warm lighting"),
      landscape("rooms/family/family-room-01", "Spacious Family Room at Apex Inn with several beds and dark curtains"),
      portrait("rooms/modern-king/modern-king-02", "Guest room with a carved headboard, teal rug and mirrored entry"),
      portrait("rooms/carved-king/carved-king-01", "Hand-carved wooden king bed with pendant lanterns"),
      landscape("rooms/twin/twin-room-01", "Twin room at Apex Inn with two single beds and a tiger tapestry"),
      portrait("rooms/modern-king/modern-king-03", "Spacious guest room with floor-length curtains and a round rug"),
      landscape("rooms/family/family-room-03", "Family room with a wooden sofa set, rug and three beds"),
      portrait("rooms/carved-king/carved-king-03", "Carved king bed beside a built-in wardrobe"),
      landscape("rooms/classic-double/classic-double-01", "Guest room with carved wooden beds and white timber-panelled walls"),
      portrait("rooms/modern-king/modern-king-04", "Wooden bed beside a bedside table and wooden door"),
      landscape("rooms/family/family-room-02", "Family room with a double bed, extra bed and wooden armchairs"),
      portrait("rooms/carved-king/carved-king-06", "Side view of a carved king bed with blue linen"),
      portrait("rooms/classic-double/classic-double-03", "Guest room with a carved wooden door, wooden beds and a round rug"),
      portrait("rooms/modern-king/modern-king-05", "Guest room with a wall mirror and warm wall light"),
      landscape("rooms/family/family-room-06", "Carved double bed with wooden armchairs"),
      portrait("rooms/twin/twin-room-02", "Bright twin room with two single beds and a wooden floor"),
      portrait("rooms/carved-king/carved-king-04", "Carved bed beside a wooden bedside table"),
      portrait("rooms/modern-king/modern-king-06", "Guest room with a wooden double bed and grey rug"),
      portrait("rooms/classic-double/classic-double-02", "Wooden beds with dark curtains and a carved headboard"),
      portrait("rooms/family/family-room-04", "Family room seating area beside the beds"),
      landscape("rooms/twin/twin-room-04", "Twin room with two single beds beneath a tiger tapestry"),
      portrait("rooms/modern-king/modern-king-07", "Guest room with a teal rug and wooden king bed"),
      portrait("rooms/carved-king/carved-king-02", "Carved wooden king bed with blue pillows and red blanket"),
      portrait("rooms/classic-double/classic-double-04", "Wooden beds under warm pendant lights"),
      portrait("rooms/family/family-room-05", "Family room double bed with armchairs"),
      portrait("rooms/modern-king/modern-king-08", "Guest room with grey curtains, wooden bed and wall mirror"),
      landscape("rooms/twin/twin-room-03", "Twin room with single beds and a wooden floor"),
      portrait("rooms/carved-king/carved-king-07", "Carved king bed with bedside tables and a rug"),
      portrait("rooms/classic-double/classic-double-05", "Wooden beds beside a bedside table and wall clock"),
      portrait("rooms/family/family-room-07", "Family room with a patterned bedspread and dark curtains"),
      sized("rooms/modern-king/modern-king-09", "Guest room with a wooden bed, grey rug and curtained wall", 900, 1600),
      portrait("rooms/classic-double/classic-double-06", "Guest room with wooden beds, wall mirror and open shelves"),
      landscape("rooms/family/family-room-08", "Family room with a sofa set, rug and several beds"),
      portrait("rooms/classic-double/classic-double-07", "Wooden beds with a rug in a timber-panelled room"),
      landscape("rooms/family/family-room-09", "Family room bed with armchairs beneath wall lights"),
      portrait("rooms/family/family-room-10", "Double bed beside wooden armchairs under wall lights"),
    ],
  },
];

const seen = new Set<string>();
for (const { src } of gallerySections.flatMap((section) => section.photos)) {
  if (seen.has(src)) {
    throw new Error(`Gallery photo is listed more than once: ${src}`);
  }
  seen.add(src);
}
