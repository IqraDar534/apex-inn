import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Comfortable Accommodation",
  "Warm Hospitality",
  "Convenient Location",
];

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20"
    >
      <div className="relative min-h-[24rem] overflow-hidden rounded-sm bg-secondary sm:min-h-[32rem]">
        <Image
          alt="Welcoming exterior of the Apex Inn guest house"
          className="object-cover"
          fill
          loading="eager"
          sizes="(max-width: 1023px) 100vw, 50vw"
          src="/images/about/about.jpg"
        />
      </div>

      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          WELCOME TO APEX INN
        </p>
        <h2 id="about-preview-heading" className="mt-5">
          Your Comfort Is Our Priority
        </h2>
        <p className="mt-6 text-base leading-8 text-muted">
          Apex Inn offers a comfortable and welcoming place to stay, combining modern conveniences
          with warm hospitality. Whether you&apos;re visiting for business, exploring the area, or
          enjoying a relaxing trip, we aim to make every stay comfortable and memorable.
        </p>
        <p className="mt-5 text-base leading-8 text-muted">
          Settle into comfortable rooms, enjoy thoughtful hospitality, and find a convenient,
          relaxing environment for every kind of visit.
        </p>

        <ul className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-3 sm:gap-5">
          {highlights.map((highlight) => (
            <li className="flex items-start gap-3 text-sm font-medium text-foreground" key={highlight}>
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          className="button-secondary mt-8"
          href="/about"
        >
          Discover Apex Inn
        </Link>
      </div>
    </section>
  );
}