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
