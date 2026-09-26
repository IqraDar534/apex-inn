import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Apex Inn with questions, booking assistance requests, or general information.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}