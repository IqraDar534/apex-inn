import Link from "next/link";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import { pageMetadata } from "../../lib/seo";
import { siteImages } from "../../lib/siteImages";

export const metadata = pageMetadata({
  title: "Apex Inn Neelum Valley Photos | Rooms, Gardens & Views",
  description:
    "Browse photos of Apex Inn Neelum Valley: the guest house, rooms, lounge and dining hall, gardens, balconies and valley views.",
  path: "/gallery",
  image: siteImages.homeGallery[5],
});

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR GALLERY</p>
          <h1 className="mx-auto mt-5 max-w-4xl">Apex Inn Neelum Valley Photos</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Take a closer look at the rooms, shared spaces, gardens and valley views waiting for
            you at Apex Inn.
          </p>
        </div>
      </section>

      <section aria-labelledby="gallery-grid-heading" className="container-page py-20 md:py-28">
        <h2 id="gallery-grid-heading" className="sr-only">
          Photos of the guest house, rooms and views
        </h2>
        <GalleryGrid />
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Planning Your Stay?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Compare our Deluxe, Executive and Family rooms and contact Apex Inn to book your stay.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="button-secondary"
              href="/rooms"
            >
              View Our Rooms
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
