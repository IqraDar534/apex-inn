import Image from "next/image";
import { siteImages } from "../../lib/siteImages";
import Link from "next/link";

const reasons = [
  {
    title: "Comfortable Accommodation",
    description: "Thoughtfully prepared rooms designed for a restful stay.",
  },
  {
    title: "Warm Hospitality",
    description: "Friendly service and a welcoming environment from arrival to departure.",
  },
  {
    title: "Convenient Location",
    description: "A convenient base for exploring the area or managing your visit.",
  },
  {
    title: "Clean & Relaxing Environment",
    description: "Clean, well-maintained spaces where you can relax with peace of mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20"
    >
      <div className="relative min-h-[22rem] overflow-hidden rounded-sm bg-secondary sm:min-h-[30rem] lg:min-h-[36rem]">
        <Image
          alt={siteImages.homeWhyChooseUs.alt}
          className={`object-cover ${siteImages.homeWhyChooseUs.position ?? ""}`}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          src={siteImages.homeWhyChooseUs.src}
        />
      </div>

      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">WHY APEX INN</p>
        <h2 id="why-choose-us-heading" className="mt-5">
          A Stay Designed Around Your Comfort
        </h2>
        <p className="mt-6 text-base leading-8 text-muted">
          From comfortable accommodation to warm hospitality, every detail at Apex Inn is designed
          to give our guests a pleasant and relaxing experience.
        </p>

        <ul className="mt-8 space-y-6">
          {reasons.map((reason) => (
            <li className="flex gap-4" key={reason.title}>
              <span
                aria-hidden="true"
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
              >
                ✓
              </span>
              <div>
                <h3 className="text-lg">{reason.title}</h3>
                <p className="mt-1 text-sm leading-7 text-muted">{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          className="button-secondary mt-9"
          href="/about"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
}