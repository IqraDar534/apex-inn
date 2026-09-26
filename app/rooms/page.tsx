import type { Metadata } from "next";
import Link from "next/link";
import RoomCard from "../../components/rooms/RoomCard";
import { featuredRooms } from "../../components/rooms/roomData";

export const metadata: Metadata = {
  title: "Rooms",
  description: "Explore comfortable rooms at Apex Inn for restful and welcoming stays.",
};

export default function RoomsPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR ROOMS</p>
          <h1 className="mx-auto mt-5 max-w-4xl">Comfortable Rooms for Every Stay</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Find a comfortable space at Apex Inn, thoughtfully prepared for restful nights, easy
            mornings and memorable stays.
          </p>
        </div>
      </section>

      <section aria-labelledby="rooms-list-heading" className="container-page py-20 md:py-28">
        <h2 id="rooms-list-heading" className="sr-only">
          Available rooms
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
          <Link
            className="button-primary mt-8"
            href="/contact"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </main>
  );
}