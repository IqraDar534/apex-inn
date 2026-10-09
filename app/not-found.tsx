import type { Metadata } from "next";
import Link from "next/link";

// Next.js adds a noindex robots tag to 404 responses automatically.
export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mt-5 text-4xl">Page Not Found</h1>
      <p className="mt-5 max-w-md text-base leading-8 text-muted">
        The page you are looking for does not exist or has moved. Explore our rooms or contact Apex
        Inn to plan your stay in Neelum Valley.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link className="button-primary" href="/">
          Go to Homepage
        </Link>
        <Link className="button-secondary" href="/rooms">
          View Rooms
        </Link>
      </div>
    </main>
  );
}
