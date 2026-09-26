import type { Metadata } from "next";
import Image from "next/image";
import { siteImages } from "../../lib/siteImages";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Apex Inn",
  description:
    "Learn about Apex Inn and its focus on comfortable accommodation, cleanliness, and warm hospitality.",
};

const values = [
  {
    title: "Comfort",
    description: "A welcoming and comfortable environment for guests.",
  },
  {
    title: "Hospitality",
    description: "Friendly and attentive service throughout the stay.",
  },
  {
    title: "Cleanliness",
    description: "Clean, well-maintained spaces designed for a pleasant experience.",
  },
];

const reasons = [
  "Comfortable Accommodation",
  "Warm Hospitality",
  "Convenient Location",
  "Clean & Relaxing Environment",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            ABOUT APEX INN
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl">A Comfortable Stay, Away From Home</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Apex Inn is a welcoming place to rest, with comfort, cleanliness and warm hospitality
            at the heart of every stay.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="about-experience-heading"
        className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20"
      >
        <div className="relative min-h-[24rem] overflow-hidden rounded-sm bg-secondary sm:min-h-[32rem]">
          <Image
            alt={siteImages.aboutPage.alt}
            className={`object-cover ${siteImages.aboutPage.position ?? ""}`}
            fill
            loading="eager"
            sizes="(max-width: 1023px) 100vw, 50vw"
            src={siteImages.aboutPage.src}
          />
        </div>

        <div className="max-w-xl">
          <h2 id="about-experience-heading">Comfort, Care and Warm Hospitality</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              Apex Inn is designed to feel comfortable and easy from the moment you arrive. Our
              guest-house experience focuses on the details that help you settle in and rest well.
            </p>
            <p>
              Whether your visit is for work, exploration or a quiet break, you can expect a warm,
              welcoming atmosphere and spaces prepared with care.
            </p>
            <p>
              We keep the experience simple: a clean place to stay, thoughtful service and room to
              enjoy your time away from home.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-secondary">
        <div className="container-page py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR VALUES</p>
            <h2 id="values-heading" className="mt-5">
              Thoughtful Hospitality, Every Stay
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article className="border-t border-border pt-6" key={value.title}>
                <h3 className="text-2xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="why-stay-heading" className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">WHY STAY WITH US</p>
          <h2 id="why-stay-heading" className="mt-5">
            The Essentials for a Pleasant Visit
          </h2>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-6 border-y border-border py-7 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li className="flex items-center gap-3 text-sm font-medium text-foreground" key={reason}>
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Make Your Stay Comfortable</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Explore our rooms and find the right option for your next stay.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="button-secondary"
              href="/rooms"
            >
              Explore Rooms
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