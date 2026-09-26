import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the general website and booking-request terms for Apex Inn.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            TERMS &amp; CONDITIONS
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl">Terms &amp; Conditions</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            These terms describe the general use of the Apex Inn website and its booking-request
            process.
          </p>
          <p className="mt-5 text-sm font-medium text-primary">Last updated: September 2026</p>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-muted">
            This is general website placeholder information and is not legal advice.
          </p>
        </div>
      </section>

      <article className="container-page max-w-4xl py-20 md:py-28">
        <div className="space-y-12">
          <section aria-labelledby="website-use-heading">
            <h2 id="website-use-heading" className="text-3xl">
              Website Use
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Please use the Apex Inn website for legitimate purposes and in a way that does not
              misuse, disrupt, damage, or attempt to interfere with the website or its normal
              operation.
            </p>
          </section>

          <section aria-labelledby="booking-requests-heading">
            <h2 id="booking-requests-heading" className="text-3xl">
              Booking Requests
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The current booking form is a booking request only. Submitting the form does not
              guarantee a reservation, and availability must be confirmed by Apex Inn.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              The website currently does not process payments or collect booking payments.
            </p>
          </section>

          <section aria-labelledby="information-accuracy-heading">
            <h2 id="information-accuracy-heading" className="text-3xl">
              Information Accuracy
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Please provide accurate and current information when submitting an enquiry or booking
              request. This helps make any future response as useful as possible.
            </p>
          </section>

          <section aria-labelledby="website-content-heading">
            <h2 id="website-content-heading" className="text-3xl">
              Website Content
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Website content, descriptions, images, prices, and availability information may be
              updated or changed as the website develops. The current website is not connected to
              a live booking system for prices or availability.
            </p>
          </section>

          <section aria-labelledby="third-party-links-heading">
            <h2 id="third-party-links-heading" className="text-3xl">
              Third-Party Links
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              If third-party links are added in the future, those external websites may have their
              own content and terms. Apex Inn would not necessarily control those websites.
            </p>
          </section>

          <section aria-labelledby="website-availability-heading">
            <h2 id="website-availability-heading" className="text-3xl">
              Website Availability
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Reasonable efforts may be made to keep the website available, but uninterrupted
              access cannot be guaranteed. The website may occasionally be unavailable or changed
              as it is maintained and developed.
            </p>
          </section>

          <section aria-labelledby="limitation-heading">
            <h2 id="limitation-heading" className="text-3xl">
              Limitation of Information
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The website provides general information about Apex Inn. Viewing the website or
              submitting a booking request does not, by itself, create a confirmed accommodation
              contract.
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-3xl">
              Changes to These Terms
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              These terms may be updated when the website or booking-request process changes. The
              latest update date will be shown at the top of this page.
            </p>
          </section>

          <section aria-labelledby="terms-contact-heading" className="border-t border-border pt-10">
            <h2 id="terms-contact-heading" className="text-3xl">
              Contact
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              For questions about these placeholder website terms, use the current placeholder
              contact details:
            </p>
            <address className="mt-5 space-y-2 not-italic text-sm text-foreground">
              <p>
                Email:{" "}
                <a
                  className="text-primary underline decoration-border underline-offset-4"
                  href="mailto:info@apexinn.com"
                >
                  info@apexinn.com
                </a>
              </p>
              <p>Phone: +92 XXX XXXXXXX</p>
            </address>
            <Link
              className="button-secondary mt-7"
              href="/contact"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}