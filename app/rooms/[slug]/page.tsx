import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredRooms } from "../../../components/rooms/roomData";

const amenities = ["Free Wi-Fi", "Air Conditioning", "Housekeeping", "Room Service"];

export function generateStaticParams() {
  return featuredRooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = featuredRooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">APEX INN ROOMS</p>
          <h1 className="mx-auto mt-5 max-w-4xl">{room.name}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">{room.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-foreground">
            <span>{room.guests}</span>
            <span>{room.bed}</span>
            <span className="text-primary">{room.price}</span>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
          <Image
            alt={`${room.name} at Apex Inn`}
            className="object-cover"
            fill
            loading="eager"
            sizes="(max-width: 1023px) 100vw, 60vw"
            src={room.imageSrc}
          />
        </div>

        <div>
          <section aria-labelledby="room-overview-heading">
            <h2 id="room-overview-heading" className="text-3xl">
              Room Overview
            </h2>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="text-sm text-muted">Guests</dt>
                <dd className="text-sm font-medium text-foreground">{room.guests}</dd>
              </div>
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="text-sm text-muted">Beds</dt>
                <dd className="text-sm font-medium text-foreground">{room.bed}</dd>
              </div>
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="text-sm text-muted">Price</dt>
                <dd className="text-right text-sm font-medium text-primary">{room.price}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-4">
                <dt className="text-sm text-muted">Details</dt>
                <dd className="max-w-xs text-right text-sm leading-6 text-foreground">
                  {room.description}
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="amenities-heading" className="mt-12">
            <h2 id="amenities-heading" className="text-3xl">
              Amenities
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <li className="flex items-center gap-3 text-sm text-foreground" key={amenity}>
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {amenity}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-16 sm:flex-row md:py-20">
          <h2>Ready to Book This Room?</h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              className="button-primary"
              href="/contact"
            >
              Book Your Stay
            </Link>
            <Link
              className="button-secondary"
              href="/rooms"
            >
              Back to Rooms
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}