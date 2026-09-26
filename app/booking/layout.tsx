import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description: "Submit a booking request for a comfortable stay at Apex Inn.",
};

export default function BookingLayout({ children }: LayoutProps<"/booking">) {
  return children;
}