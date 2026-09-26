"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "rooms", label: "Rooms", href: "/rooms" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "about", label: "About", href: "/about" },
  { id: "facilities", label: "Facilities", href: "/facilities" },
  { id: "contact", label: "Contact", href: "/contact" },
];

// "/" only matches the home page; other items also match their sub-pages (e.g. /rooms/deluxe-room).
const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
            {navigation.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-primary after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-primary after:transition-opacity ${
                    isActive ? "text-primary after:opacity-100" : "text-muted after:opacity-0"
                  }`}
                  href={item.href}
                  key={item.id}
                >
                  {item.label}
                </Link>
              );
            })}
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
            {navigation.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-sm border-l-2 px-3 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-primary ${
                    isActive ? "border-primary bg-secondary font-semibold text-primary" : "border-transparent font-medium text-muted"
                  }`}
                  href={item.href}
                  key={item.id}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
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