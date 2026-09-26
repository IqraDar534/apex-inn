"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-8">
          <Link
            className="shrink-0 text-xl font-semibold tracking-[-0.03em] text-foreground"
            href="/"
            onClick={closeMenu}
          >
            Apex Inn
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="button-primary"
              href="/contact"
            >
              Book Now
            </Link>
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm text-foreground md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </button>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} border-t border-border/80 py-5 md:hidden`}
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col items-stretch gap-1">
            {navigation.map((item) => (
              <Link
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-secondary hover:text-primary"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="button-primary mt-3 w-full"
              href="/contact"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}