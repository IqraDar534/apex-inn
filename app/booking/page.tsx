"use client";

import Link from "next/link";
import { useState } from "react";
import { call, whatsapp, whatsappLinkProps } from "../../lib/contact";

const roomOptions = ["Deluxe Room", "Executive Room", "Family Room"];

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [dateError, setDateError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setDateError("Check-out must be later than check-in.");
      setIsSubmitted(false);
      return;
    }

    setDateError("");
    setIsSubmitted(true);
  };

  return (
    <main>
      <section className="bg-secondary">
        <div className="container-page py-16 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            BOOK YOUR STAY
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl">Plan Your Stay at Apex Inn</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Submit your stay details through the booking form and we&apos;ll review your request for
            a comfortable visit at Apex Inn.
          </p>
        </div>
      </section>

      <section className="container-page py-10 md:py-14">
        <div className="flex flex-col gap-6 bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              PRIMARY BOOKING METHOD
            </p>
            <h2 className="mt-3 text-3xl text-primary-foreground">Call us to book your stay</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80">
              Speak directly with Apex Inn to check availability and confirm your reservation.
            </p>
            <p className="mt-3 text-sm font-semibold text-primary-foreground">
              Call: {call.display} · WhatsApp: {whatsapp.display}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              className="button-on-primary"
              href={call.href}
            >
              Call Now
            </a>
            <a
              className="button-on-primary"
              {...whatsappLinkProps}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-20">
        <div className="bg-card p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl">Booking Request</h2>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-foreground" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground"
                id="full-name"
                name="fullName"
                required
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground" htmlFor="phone">
                Contact Number
              </label>
              <input
                className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground"
                id="phone"
                name="phone"
                required
                type="tel"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="check-in">
                  Check-in Date
                </label>
                <input
                  aria-describedby={dateError ? "date-error" : undefined}
                  aria-invalid={Boolean(dateError)}
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground"
                  id="check-in"
                  name="checkIn"
                  onChange={(event) => {
                    setCheckIn(event.target.value);
                    setDateError("");
                    setIsSubmitted(false);
                  }}
                  required
                  type="date"
                  value={checkIn}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="check-out">
                  Check-out Date
                </label>
                <input
                  aria-describedby={dateError ? "date-error" : undefined}
                  aria-invalid={Boolean(dateError)}
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground"
                  id="check-out"
                  min={checkIn || undefined}
                  name="checkOut"
                  onChange={(event) => {
                    setCheckOut(event.target.value);
                    setDateError("");
                    setIsSubmitted(false);
                  }}
                  required
                  type="date"
                  value={checkOut}
                />
              </div>
            </div>

            {dateError && (
              <p className="text-sm leading-6 text-primary" id="date-error" role="alert">
                {dateError}
              </p>
            )}

            <div>
                <label className="text-sm font-medium text-foreground" htmlFor="room-type">
                  Room Type
                </label>
                <select
                  className="mt-2 block min-h-12 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground"
                  defaultValue=""
                  id="room-type"
                  name="roomType"
                  required
                >
                  <option disabled value="">
                    Select a room
                  </option>
                  {roomOptions.map((room) => (
                    <option key={room} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground" htmlFor="special-requests">
                Special Requests
              </label>
              <textarea
                className="mt-2 block min-h-32 w-full resize-y rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground"
                id="special-requests"
                name="specialRequests"
                rows={5}
              />
            </div>

            <button
              className="button-primary w-full"
              type="submit"
            >
              Submit Booking Request
            </button>

            {isSubmitted && (
              <p aria-live="polite" className="text-sm leading-7 text-primary" role="status">
                Thank you. Your booking request has been received. Please call Apex Inn to confirm
                availability and finalize your reservation.
              </p>
            )}
          </form>
        </div>

        <aside className="border border-border bg-secondary p-6 sm:p-8">
          <h2 className="text-3xl">Before You Book</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            <div className="flex items-center justify-between gap-6 py-4">
              <dt className="text-sm text-muted">Check-in</dt>
              <dd className="text-sm font-medium text-foreground">2:00 PM</dd>
            </div>
            <div className="flex items-center justify-between gap-6 py-4">
              <dt className="text-sm text-muted">Check-out</dt>
              <dd className="text-sm font-medium text-foreground">12:00 PM</dd>
            </div>
          </dl>
          <ul className="mt-6 space-y-4 text-sm text-foreground">
            {["Free Wi-Fi", "Free Parking", "24/7 Reception"].map((item) => (
              <li className="flex items-center gap-3" key={item}>
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-border pt-6 text-sm leading-7 text-muted">
            Please note: This form is currently a booking request and does not confirm availability.
          </p>
        </aside>
      </section>

      <nav aria-label="Booking navigation" className="border-t border-border bg-card">
        <div className="container-page flex flex-col items-center justify-center gap-3 py-10 sm:flex-row">
          <Link
            className="button-secondary"
            href="/rooms"
          >
            Explore Rooms
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-sm px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </main>
  );
}