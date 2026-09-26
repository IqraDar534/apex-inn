import Link from "next/link";

export default function RoomNotFound() {
  return (
    <main className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">APEX INN ROOMS</p>
      <h1 className="mt-5 text-4xl">Room Not Found</h1>
      <p className="mt-5 max-w-md text-base leading-8 text-muted">
        The room you are looking for is not available. Explore our rooms to find another comfortable
        stay.
      </p>
      <Link
        className="button-primary mt-8"
        href="/rooms"
      >
        Back to Rooms
      </Link>
    </main>
  );
}