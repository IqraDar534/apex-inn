import Link from "next/link";
import RoomCard from "../rooms/RoomCard";
import { featuredRooms } from "../rooms/roomData";

export default function FeaturedRooms() {
  return (
    <section
      aria-labelledby="featured-rooms-heading"
      className="container-page py-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR ROOMS</p>
        <h2 id="featured-rooms-heading" className="mt-5">
          Comfortable Rooms for Every Stay
        </h2>
        <p className="mt-6 text-base leading-8 text-muted">
          Choose a space designed around comfort, convenience and a relaxing stay.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredRooms.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          className="button-secondary"
          href="/rooms"
        >
          View All Rooms
        </Link>
      </div>
    </section>
  );
}