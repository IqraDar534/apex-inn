import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "../../components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the rooms, interiors, facilities, and atmosphere of Apex Inn.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR GALLERY</p>
          <h1 className="mx-auto mt-5 max-w-4xl">Explore Apex Inn</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Take a closer look at the rooms, facilities and welcoming atmosphere prepared for your
            stay at Apex Inn.
          </p>
        </div>
      </section>

      <section aria-labelledby="gallery-grid-heading" className="container-page py-20 md:py-28">
        <h2 id="gallery-grid-heading" className="sr-only">
          Apex Inn gallery
        </h2>
        <GalleryGrid />
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Planning Your Stay?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Explore our comfortable rooms and book your stay at Apex Inn.
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