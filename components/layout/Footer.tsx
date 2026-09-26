import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
];

const serviceLinks = [
  { label: "Booking", href: "/contact" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const linkClassName =
  "inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-foreground";

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container-page border-b border-border py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="max-w-xs">
            <Link className="inline-flex min-h-11 items-center text-2xl font-semibold tracking-[-0.03em]" href="/">
              Apex Inn
            </Link>
            <p className="mt-5 text-sm leading-7 text-muted">
              Comfortable accommodation, warm hospitality, and a relaxing stay for every guest.
            </p>
          </div>

          <nav aria-label="Quick Links" className="flex flex-col items-start gap-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Quick Links
            </h2>
            <div className="mt-3 flex flex-col items-start gap-1">
            {exploreLinks.map((link) => (
              <Link className={linkClassName} href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            </div>
          </nav>

          <nav aria-label="Guest Services" className="flex flex-col items-start gap-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Guest Services
            </h2>
            <div className="mt-3 flex flex-col items-start gap-1">
            {serviceLinks.map((link) => (
              <Link className={linkClassName} href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            </div>
          </nav>

          <address className="flex flex-col gap-1 not-italic">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Contact &amp; Stay
            </h2>
            <div className="mt-3 flex flex-col gap-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted">Location</p>
                <p className="mt-1 text-muted">Your Location, Pakistan</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted">Phone</p>
                <a className={linkClassName} href="tel:+92XXXXXXXXX">
                  +92 XXX XXXXXXX
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted">Email</p>
                <a className={linkClassName} href="mailto:info@apexinn.com">
                  info@apexinn.com
                </a>
              </div>
              <div className="flex gap-5 border-t border-border pt-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Check-in</p>
                  <p className="mt-1 text-muted">2 PM</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Check-out</p>
                  <p className="mt-1 text-muted">12 PM</p>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-border bg-background">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Apex Inn. All rights reserved.</p>
          <div className="flex gap-5">
            <Link className="inline-flex min-h-11 items-center transition-colors hover:text-foreground" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="inline-flex min-h-11 items-center transition-colors hover:text-foreground" href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}