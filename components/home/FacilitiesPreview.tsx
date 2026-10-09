import Link from "next/link";

const facilities = [
  {
    name: "Free Wi-Fi",
    description: "Stay connected throughout your visit.",
    marker: "Wi",
  },
  {
    name: "Free Parking",
    description: "Convenient parking for our guests.",
    marker: "P",
  },
  {
    name: "Air Conditioning",
    description: "Comfortable rooms in every season.",
    marker: "A",
  },
  {
    name: "Room Service",
    description: "Convenient service whenever you need it.",
    marker: "R",
  },
  {
    name: "24/7 Reception",
    description: "Assistance available whenever you need it.",
    marker: "24",
  },
  {
    name: "Housekeeping",
    description: "Clean and comfortable spaces throughout your stay.",
    marker: "H",
  },
];

export default function FacilitiesPreview() {
  return (
    <section aria-labelledby="facilities-preview-heading" className="bg-secondary">
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            OUR FACILITIES
          </p>
          <h2 id="facilities-preview-heading" className="mt-5">
            Everything You Need for a Comfortable Stay
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Enjoy thoughtful facilities and services designed to make your stay simple, comfortable
            and relaxing.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility) => (
            <article className="border-t border-border py-7" key={facility.name}>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary text-xs font-semibold tracking-[0.08em] text-primary"
              >
                {facility.marker}
              </span>
              <h3 className="mt-5 text-xl">{facility.name}</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-muted">{facility.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            className="button-secondary"
            href="/facilities"
          >
            Explore All Guest House Facilities <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}