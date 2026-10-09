import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "../../lib/siteImages";
import type { Room } from "./roomData";

type RoomCardProps = {
  room: Room;
  image: SiteImage;
  /** Load immediately; use for a card that is visible on first paint. */
  eager?: boolean;
};

export default function RoomCard({ room, image, eager = false }: RoomCardProps) {
  const roomPath = `/rooms/${room.slug}`;

  return (
    <article className="overflow-hidden border border-border bg-card">
      <Link aria-hidden="true" className="group block" href={roomPath} tabIndex={-1}>
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <Image
            alt={image.alt}
            className={`object-cover transition-transform duration-300 group-hover:scale-[1.02] ${image.position ?? ""}`}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            src={image.src}
          />
        </div>
      </Link>

      <div className="p-6 sm:p-7">
        <h3 className="text-2xl">{room.name}</h3>
        <p className="mt-4 min-h-20 text-sm leading-7 text-muted">{room.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-muted">Guests</dt>
            <dd className="mt-1 font-medium text-foreground">{room.guests}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-muted">Bed</dt>
            <dd className="mt-1 font-medium text-foreground">{room.bed}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            className="button-secondary flex-1"
            href={roomPath}
          >
            View Details<span className="sr-only"> of the {room.name}</span>
          </Link>
          <Link
            className="button-primary flex-1"
            href="/contact"
          >
            Book Now<span className="sr-only">: {room.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}