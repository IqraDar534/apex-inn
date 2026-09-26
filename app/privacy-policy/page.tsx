import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Apex Inn website privacy policy and current information-handling details.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            PRIVACY POLICY
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl">Privacy Policy</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            This page explains how information is handled when you visit the Apex Inn website.
          </p>
          <p className="mt-5 text-sm font-medium text-primary">Last updated: September 2026</p>
        </div>
      </section>

      <article className="container-page max-w-4xl py-20 md:py-28">
        <div className="space-y-12">
          <section aria-labelledby="information-collected-heading">
            <h2 id="information-collected-heading" className="text-3xl">
              Information We Collect
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              You may choose to enter information such as your name, email address, phone number,
              dates, room preference, and message details into the contact or booking forms.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              At present, these forms only validate information in your browser and display a
              confirmation message. They do not send or store your submission in a backend system.
            </p>
          </section>

          <section aria-labelledby="information-use-heading">
            <h2 id="information-use-heading" className="text-3xl">
              How We Use Information
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Information you choose to provide is intended to help you prepare a contact or
              booking request. If a future process allows Apex Inn to receive that information,
              it may be used to respond to your question or review your requested stay details.
            </p>
          </section>

          <section aria-labelledby="forms-heading">
            <h2 id="forms-heading" className="text-3xl">
              Contact and Booking Forms
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The contact and booking forms are currently demonstrations without backend
              submission, storage, or API connections. A confirmation shown after submission does
              not mean that a message or booking request has been delivered or saved.
            </p>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2 id="cookies-heading" className="text-3xl">
              Cookies
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              This website does not currently describe or use advertising cookies in its visitor
              experience. If essential technical cookies or similar browser storage are required
              for site operation in the future, this policy will be updated with more information.
            </p>
          </section>

          <section aria-labelledby="third-party-heading">
            <h2 id="third-party-heading" className="text-3xl">
              Third-Party Services
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              No third-party map, payment, analytics, or form service is connected to the contact
              or booking forms at this time. External services may only be added later when needed
              for a specific website feature, and this page will be reviewed then.
            </p>
          </section>

          <section aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-3xl">
              Data Security
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Because the current forms do not transmit or store submissions, they do not maintain
              a booking or contact database. Any future change that introduces data handling should
              be reflected in an updated version of this policy.
            </p>
          </section>

          <section aria-labelledby="choices-heading">
            <h2 id="choices-heading" className="text-3xl">
              Your Choices
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              You can choose whether to enter information into the website forms. You can also
              contact Apex Inn using the placeholder details below if you have questions about how
              the website handles information.
            </p>
          </section>

          <section aria-labelledby="updates-heading">
            <h2 id="updates-heading" className="text-3xl">
              Policy Updates
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              This policy may be revised as the website develops. The latest revision date will be
              shown at the top of this page so you can see when the information was last reviewed.
            </p>
          </section>

          <section aria-labelledby="privacy-contact-heading" className="border-t border-border pt-10">
            <h2 id="privacy-contact-heading" className="text-3xl">
              Contact Information
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              For privacy questions, use the current placeholder contact details:
            </p>
            <address className="mt-5 space-y-2 not-italic text-sm text-foreground">
              <p>
                Email: {" "}
                <a className="text-primary underline decoration-border underline-offset-4" href="mailto:info@apexinn.com">
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