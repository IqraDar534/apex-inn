import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    alt: "Exterior view of Apex Inn",
    position: "object-center",
    src: "/images/gallery/gallery-01.jpg",
  },
  {
    alt: "Welcoming entrance at Apex Inn",
    position: "object-[35%_center]",
    src: "/images/gallery/gallery-02.jpg",
  },
  {
    alt: "Warm architectural details at Apex Inn",
    position: "object-[65%_center]",
    src: "/images/gallery/gallery-03.jpg",
  },
  {
    alt: "Relaxing guest house surroundings at Apex Inn",
    position: "object-[25%_70%]",
    src: "/images/gallery/gallery-04.jpg",
  },
  {
    alt: "Comfortable shared space at Apex Inn",
    position: "object-[75%_70%]",
    src: "/images/gallery/gallery-05.jpg",
  },
  {
    alt: "Apex Inn viewed across its landscaped setting",
    position: "object-[50%_30%]",
    src: "/images/gallery/gallery-06.jpg",
  },
];

function GalleryImage({
  alt,
  className,
  position,
  src,
}: {
  alt: string;
  className: string;
  position: string;
  src: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-sm bg-secondary ${className}`}>
      <Image
        alt={alt}
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${position}`}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        src={src}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-foreground/5 transition-colors group-hover:bg-transparent" />
    </figure>
  );
}

export default function GalleryPreview() {
  return (
    <section aria-labelledby="gallery-preview-heading" className="bg-card">
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">OUR GALLERY</p>
          <h2 id="gallery-preview-heading" className="mt-5">
            Take a Look Around Apex Inn
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Explore our rooms, interiors and shared spaces before your stay.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <GalleryImage
            alt={galleryItems[0].alt}
            className="min-h-[22rem] sm:min-h-[30rem] lg:min-h-[38rem]"
            position={galleryItems[0].position}
            src={galleryItems[0].src}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryItems.slice(1, 5).map((item) => (
              <GalleryImage
                alt={item.alt}
                className="min-h-[13rem] sm:min-h-0 sm:aspect-[4/3]"
                key={item.alt}
                position={item.position}
                src={item.src}
              />
            ))}
            <GalleryImage
              alt={galleryItems[5].alt}
              className="min-h-[13rem] sm:col-span-2 sm:min-h-0 sm:aspect-[2/1]"
              position={galleryItems[5].position}
              src={galleryItems[5].src}
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            className="inline-flex min-h-11 items-center justify-center px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
            href="/gallery"
          >
            View Full Gallery <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}