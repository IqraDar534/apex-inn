import Link from "next/link";

export default function BookingCTA() {
  return (
    <section aria-labelledby="booking-cta-heading" className="cta-band">
      <div className="container-page py-20 text-center md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          PLAN YOUR STAY
        </p>
        <h2 id="booking-cta-heading" className="mt-5 text-foreground">
          Ready for a Comfortable Stay?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
          Book your stay at Apex Inn and enjoy a comfortable, welcoming guest house experience in
          Neelum Valley.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
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
    </section>
  );
}