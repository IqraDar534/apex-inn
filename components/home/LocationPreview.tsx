import { call, whatsapp, whatsappLinkProps } from "../../lib/contact";

// Google Maps embed URL (the src value from Google Maps > Share > Embed a map).
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3278.934396616799!2d74.1332359757458!3d34.73204797290866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQzJzU1LjQiTiA3NMKwMDgnMDguOSJF!5e0!3m2!1sen!2s!4v1790407750038!5m2!1sen!2s";

const stayDetails = [
  { label: "Location", value: "Neelum Valley, Azad Kashmir", wide: true },
  { label: "Call", value: call.display, link: { href: call.href } },
  { label: "WhatsApp", value: whatsapp.display, link: whatsappLinkProps },
  { label: "Check-in", value: "2:00 PM" },
  { label: "Check-out", value: "12:00 PM" },
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
            A Convenient Place to Stay
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            Apex Inn is located in Neelum Valley, offering a convenient and
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
        </div>

        <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
          <iframe
            src={MAP_EMBED_SRC}
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