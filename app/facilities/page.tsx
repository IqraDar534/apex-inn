import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "See the practical facilities designed to make your stay at Apex Inn comfortable and convenient.",
};

const facilities = [
  {
    name: "Free Wi-Fi",
    description: "Reliable internet access for staying connected.",
    marker: "Wi",
  },
  {
    name: "Free Parking",
    description: "Convenient parking for guests.",
    marker: "P",
  },
  {
    name: "Air Conditioning",
    description: "Comfortable room environment throughout your stay.",
    marker: "A",
  },
  {
    name: "Room Service",
    description: "Convenient service to make your stay more comfortable.",
    marker: "R",
  },
  {
    name: "24/7 Reception",
    description: "Reception support available throughout the day.",
    marker: "24",
  },
  {
    name: "Housekeeping",
    description: "Clean and well-maintained guest spaces.",
    marker: "H",
  },
];

export default function FacilitiesPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            OUR FACILITIES
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl">Everything You Need for a Comfortable Stay</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Apex Inn provides practical facilities designed to make your stay comfortable,
            convenient and easy to enjoy.
          </p>
        </div>
      </section>

      <section aria-labelledby="facilities-list-heading" className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="facilities-list-heading">Thoughtful Essentials for Your Stay</h2>
        </div>
        <ul className="mt-12 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility) => (
            <li className="border-t border-border py-7" key={facility.name}>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary text-xs font-semibold tracking-[0.08em] text-primary"
              >
                {facility.marker}
              </span>
              <h3 className="mt-5 text-xl">{facility.name}</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-muted">{facility.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="comfort-first-heading"
        className="bg-card"
      >
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative min-h-[24rem] overflow-hidden rounded-sm bg-secondary sm:min-h-[32rem]">
            <Image
              alt="Comfortable guest house setting at Apex Inn"
              className="object-cover"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              src="/images/facilities/facilities.jpg"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              COMFORT FIRST
            </p>
            <h2 id="comfort-first-heading" className="mt-5">
              Designed Around Your Stay
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              Each facility is intended to make your time at Apex Inn more convenient and
              comfortable, giving you practical support while you settle in and relax.
            </p>
              <Link
                className="button-secondary mt-8"
              href="/rooms"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Ready for a Comfortable Stay?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Explore our rooms and book your stay at Apex Inn.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="button-secondary"
              href="/rooms"
            >
              View Rooms
            </Link>
            <Link
              className="button-primary"
              href="/contact"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}