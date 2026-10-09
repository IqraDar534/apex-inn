// Single source of truth for Apex Inn contact numbers.
// WhatsApp and call numbers are different lines — keep them separate.

export const whatsapp = {
  display: "03109176557",
  href: "https://wa.me/923109176557",
};

export const call = {
  display: "03558071121",
  href: "tel:03558071121",
};

/** Props for opening WhatsApp in a new tab (or the app on mobile). */
export const whatsappLinkProps = {
  href: whatsapp.href,
  rel: "noopener noreferrer",
  target: "_blank",
} as const;

/** International format of the call line, for structured data. */
export const telephoneInternational = "+92-355-8071121";

export const location = {
  locality: "Neelum Valley",
  region: "Azad Kashmir",
  countryCode: "PK",
  // Pin position from the Google Maps embed below (34°43'55.4"N 74°08'08.9"E).
  latitude: 34.732056,
  longitude: 74.135806,
  /** Google Maps embed URL (the src value from Google Maps > Share > Embed a map). */
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3278.934396616799!2d74.1332359757458!3d34.73204797290866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQzJzU1LjQiTiA3NMKwMDgnMDguOSJF!5e0!3m2!1sen!2s!4v1790407750038!5m2!1sen!2s",
  mapLink: "https://www.google.com/maps/search/?api=1&query=34.732056,74.135806",
};

export const checkInTime = { display: "2:00 PM", iso: "14:00" };
export const checkOutTime = { display: "12:00 PM", iso: "12:00" };
