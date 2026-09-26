"use client";

import Link from "next/link";
import { useState } from "react";
import { call, whatsapp, whatsappLinkProps } from "../../lib/contact";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            CONTACT APEX INN
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl">We&apos;re Here to Make Your Stay Comfortable</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Planning a stay in Neelum Valley? Contact Apex INN directly for booking information,
            availability, and any questions about your visit.
          </p>
        </div>
      </section>

      <section className="container-page py-10 md:py-14">
        <div className="bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            DIRECT BOOKING
          </p>
          <h2 className="mt-4 text-3xl text-primary-foreground md:text-4xl">
            Call Us for Booking &amp; Availability
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-primary-foreground/80">
            For quick assistance, call Apex INN directly.
          </p>
          <a
            className="mt-7 block break-words text-4xl font-bold tracking-[0.03em] text-primary-foreground sm:text-5xl"
            href={call.href}
          >
            {call.display}
          </a>
          <a
            className="button-on-primary mt-7"
            href={call.href}
          >
            Call Now
          </a>
          <div className="mx-auto mt-8 max-w-xs border-t border-primary-foreground/20 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
              WhatsApp
            </p>
            <a
              className="mt-2 inline-flex min-h-11 items-center text-lg font-semibold text-primary-foreground transition-colors hover:text-secondary"
              {...whatsappLinkProps}
            >
              {whatsapp.display}
            </a>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          <article className="rounded-sm border border-border bg-card p-6 text-center transition-colors hover:border-primary">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Location</p>
            <p className="mt-3 text-lg font-semibold text-foreground">Neelum Valley</p>
          </article>
          <article className="rounded-sm border border-primary bg-secondary p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Phone</p>
            <a className="mt-3 block text-lg font-bold text-primary" href={call.href}>
              Call: {call.display}
            </a>
            <a className="mt-1 inline-flex min-h-11 items-center text-sm font-medium text-primary transition-colors hover:text-foreground" {...whatsappLinkProps}>
              WhatsApp: {whatsapp.display}
            </a>
          </article>
          <article className="rounded-sm border border-border bg-card p-6 text-center transition-colors hover:border-primary">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Reception</p>
            <p className="mt-3 text-lg font-semibold text-foreground">Available 24/7</p>
          </article>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">SEND A MESSAGE</p>
            <h2 className="mt-4">Have a Question?</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              The form is a simple local message request. For booking and availability, calling is the quickest option.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl border border-border bg-background p-6 sm:p-8 md:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground"
                  id="full-name"
                  name="fullName"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground"
                  id="phone"
                  name="phone"
                  type="tel"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground"
                  id="subject"
                  name="subject"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="mt-2 block min-h-36 w-full resize-y rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground"
                  id="message"
                  name="message"
                  required
                  rows={5}
                />
              </div>
              <button
                className="button-primary w-full"
                type="submit"
              >
                Send Message
              </button>
              {isSubmitted && (
                <p aria-live="polite" className="text-sm leading-7 text-primary" role="status">
                  Thank you! Your message has been received. We&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">QUICK ASSISTANCE</p>
          <h2 className="mt-4">Need Help With Your Booking?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted">
            Call Apex INN directly and our team can assist you with availability and booking information.
          </p>
          <a className="mt-6 inline-block break-words text-3xl font-bold text-primary sm:text-4xl" href={call.href}>
            {call.display}
          </a>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="button-primary"
              href={call.href}
            >
              Call Apex INN
            </a>
            <a
              className="button-secondary"
              {...whatsappLinkProps}
            >
              WhatsApp {whatsapp.display}
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">OUR LOCATION</p>
        <h2 className="mt-4">Stay in Neelum Valley</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted">
          Apex INN is located in the beautiful Neelum Valley, offering guests a convenient place to stay while exploring the area.
        </p>
        <div className="mx-auto mt-10 max-w-xl rounded-sm border border-border bg-secondary px-6 py-10">
          <p className="text-2xl font-semibold text-foreground">Apex INN</p>
          <p className="mt-2 text-lg text-primary">Neelum Valley</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-page py-16 text-center md:py-20">
          <h2>Planning Your Stay?</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="button-secondary"
              href="/rooms"
            >
              Explore Rooms
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
