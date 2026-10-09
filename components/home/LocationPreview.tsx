import Link from "next/link";
import { call, checkInTime, checkOutTime, location, whatsapp, whatsappLinkProps } from "../../lib/contact";

const stayDetails = [
  { label: "Location", value: "Neelum Valley, Azad Kashmir", wide: true },
  { label: "Call", value: call.display, link: { href: call.href } },
  { label: "WhatsApp", value: whatsapp.display, link: whatsappLinkProps },
  { label: "Check-in", value: checkInTime.display },
  { label: "Check-out", value: checkOutTime.display },
];

export default function LocationPreview() {
  return (
    <section
      aria-labelledby="location-preview-heading"
      className="container-page py-20 md:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            FIND US
          </p>

          <h2 id="location-preview-heading" className="mt-5">
            Find Apex Inn in Neelum Valley
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            Apex Inn is located in Neelum Valley, Azad Kashmir, offering a convenient and
            peaceful place to stay while exploring the surrounding area.
          </p>

          <dl className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-2 sm:gap-x-8">
            {stayDetails.map((detail) => (
              <div className={"wide" in detail ? "sm:col-span-2" : undefined} key={detail.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {detail.label}
                </dt>

                <dd className="mt-1 text-sm text-foreground">
                  {"link" in detail ? (
                    <a className="font-medium text-primary transition-colors hover:text-foreground" {...detail.link}>
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-6">
            <a
              className="inline-flex min-h-11 items-center text-sm font-medium text-primary transition-colors hover:text-foreground"
              href={location.mapLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Get Directions on Google Maps
            </a>
            <Link
              className="inline-flex min-h-11 items-center text-sm font-medium text-primary transition-colors hover:text-foreground"
              href="/contact"
            >
              Contact &amp; Location Details
            </Link>
          </div>
        </div>

        <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
          <iframe
            src={location.mapEmbedSrc}
            title="Apex Inn location on Google Maps"
            width="100%"
            className="block h-[300px] w-full border-0 sm:h-[380px] lg:h-[450px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}