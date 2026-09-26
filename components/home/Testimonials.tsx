import Link from "next/link";

const testimonials = [
  {
    name: "Ahmed R.",
    type: "Business Traveler",
    review:
      "Comfortable room, friendly service and a very pleasant stay. Everything I needed was easily available.",
  },
  {
    name: "Sara K.",
    type: "Family Guest",
    review:
      "The room was clean and comfortable, and the overall environment was very welcoming. We enjoyed our stay.",
  },
  {
    name: "Usman A.",
    type: "Leisure Traveler",
    review:
      "A relaxing place to stay with helpful staff and a comfortable atmosphere. I would happily stay again.",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-secondary">
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            GUEST EXPERIENCES
          </p>
          <h2 id="testimonials-heading" className="mt-5">
            What Our Guests Say
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            A comfortable stay is about more than a room. It&apos;s about feeling welcome from the
            moment you arrive.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted">
            Sample guest experiences
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure className="border border-border bg-card p-6 sm:p-8" key={testimonial.name}>
              <div className="text-sm tracking-[0.18em] text-primary">
                <span aria-hidden="true">★★★★★</span>
                <span className="sr-only">5 out of 5 stars</span>
              </div>
              <blockquote className="mt-6 text-base leading-8 text-foreground">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted">{testimonial.type}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            className="button-primary"
            href="/contact"
          >
            Plan Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
}