import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main>
      <section
        aria-labelledby="hero-heading"
        className="container-page flex flex-col justify-center gap-12 py-12 lg:min-h-[calc(100svh-5rem)] lg:flex-row lg:items-center lg:gap-16 lg:py-16"
      >
        <div className="flex-1 lg:max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Apex Inn
          </p>
          <h1 id="hero-heading" className="max-w-xl text-foreground">
            A Comfortable Stay, Away From Home
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            Experience comfort, warm hospitality and a relaxing stay at Apex Inn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
              Explore Rooms
            </Link>
          </div>
        </div>

        <div className="relative min-h-[22rem] flex-1 overflow-hidden rounded-sm bg-secondary sm:min-h-[28rem] lg:min-h-[36rem]">
          <Image
            alt="Warm exterior of the Apex Inn guest house"
            className="object-cover"
            fill
            loading="eager"
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            src="/images/hero/hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
        </div>
      </section>
    </main>
  );
}