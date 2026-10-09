import { call, whatsapp } from "../../lib/contact";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Contact Apex Inn | Guest House Location in Neelum Valley",
  description: `Call ${call.display} or WhatsApp ${whatsapp.display} to book Apex Inn, a guest house in Neelum Valley, Azad Kashmir. Find our location and directions.`,
  path: "/contact",
});

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
