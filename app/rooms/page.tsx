import Link from "next/link";
import RoomCard from "../../components/rooms/RoomCard";
import { featuredRooms } from "../../components/rooms/roomData";
import { pageMetadata } from "../../lib/seo";
import { siteImages } from "../../lib/siteImages";

export const metadata = pageMetadata({
  title: "Rooms in Neelum Valley for Couples & Families | Apex Inn",
  description:
    "Compare the Deluxe, Executive and Family rooms at Apex Inn, a guest house in Neelum Valley. See guest capacity, beds, amenities and photos, then call to book.",
  path: "/rooms",
  image: siteImages.rooms["deluxe-room"].card,
});

export default function RoomsPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR ROOMS</p>
          <h1 className="mx-auto mt-5 max-w-4xl">Comfortable Rooms in Neelum Valley</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Find a comfortable space at Apex Inn, from Deluxe and Executive rooms for couples to a
            spacious Family Room, each prepared for restful nights and easy mornings.
          </p>
        </div>
      </section>

      <section aria-labelledby="rooms-list-heading" className="container-page py-20 md:py-28">
        <h2 id="rooms-list-heading" className="sr-only">
          Guest house rooms at Apex Inn
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredRooms.map((room, index) => (
            <RoomCard eager={index === 0} image={room.images.card} key={room.slug} room={room} />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Find the Right Room for Your Stay</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Call or WhatsApp Apex Inn to check availability, or see the{" "}
            <Link className="text-primary underline decoration-border underline-offset-4 hover:text-foreground" href="/facilities">
              facilities included with every stay
            </Link>
            .
          </p>
          <Link
            className="button-primary mt-8"
            href="/contact"
          >
            Contact Us to Book
          </Link>
        </div>
      </section>
    </main>
  );
}