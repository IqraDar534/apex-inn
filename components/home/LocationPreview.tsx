import Link from "next/link";

const stayDetails = [
  { label: "Location", value: "Your Location, Pakistan" },
  { label: "Phone", value: "+92 XXX XXXXXXX" },
  { label: "Check-in", value: "2:00 PM" },
  { label: "Check-out", value: "12:00 PM" },
];

export default function LocationPreview() {
  return (
    <section aria-labelledby="location-preview-heading" className="container-page py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FIND US</p>
          <h2 id="location-preview-heading" className="mt-5">
            A Convenient Place to Stay
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Apex Inn is conveniently located to provide easy access for guests, whether you are
            visiting for business, exploring the area, or enjoying a relaxing break.
          </p>

          <dl className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-2 sm:gap-x-8">
            {stayDetails.map((detail) => (
              <div key={detail.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          aria-label="Map-style placeholder showing Apex Inn Location"
          className="relative aspect-[4/3] min-h-0 overflow-hidden rounded-sm border border-border bg-secondary sm:min-h-[20rem]"
          role="img"
        >
          <div aria-hidden="true" className="absolute inset-0 opacity-60">
            <div className="absolute left-[-10%] top-[28%] h-5 w-[120%] rotate-[-12deg] bg-card" />
            <div className="absolute left-[-10%] top-[64%] h-4 w-[120%] rotate-[8deg] bg-card" />
            <div className="absolute left-[30%] top-[-10%] h-[120%] w-5 rotate-[18deg] bg-card" />
            <div className="absolute left-[70%] top-[-10%] h-[120%] w-4 rotate-[-20deg] bg-card" />
            <div className="absolute left-[13%] top-[14%] h-20 w-32 rounded-full border-8 border-card/70" />
            <div className="absolute bottom-[12%] right-[12%] h-24 w-40 rounded-[45%] border-8 border-card/70" />
          </div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span
              aria-hidden="true"
              className="relative flex h-12 w-12 rotate-45 items-center justify-center rounded-full rounded-br-none bg-primary shadow-sm"
            >
              <span className="h-3 w-3 rounded-full bg-primary-foreground" />
            </span>
            <span className="mt-5 whitespace-nowrap bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
              Apex Inn Location
            </span>
          </div>

          <Link
            className="button-primary absolute bottom-5 left-5"
            href="#"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </section>
  );
}