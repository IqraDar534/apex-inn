import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "../../components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to common questions about staying and making a booking request at Apex Inn.",
};

export default function FAQPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h1 className="mx-auto mt-5 max-w-4xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Find answers to common questions about staying at Apex Inn.
          </p>
        </div>
      </section>

      <section aria-labelledby="faq-list-heading" className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-list-heading" className="sr-only">
            Common questions about Apex Inn
          </h2>
          <FAQAccordion />
        </div>
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Still Have Questions?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Get in touch with Apex Inn and we&apos;ll be happy to help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="button-secondary"
              href="/contact"
            >
              Contact Us
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