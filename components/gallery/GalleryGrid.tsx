import Image from "next/image";
import { gallerySections } from "../../lib/galleryImages";

export default function GalleryGrid() {
  return (
    <div className="space-y-16 md:space-y-20">
      {gallerySections.map((section, sectionIndex) => (
        <section aria-labelledby={`gallery-${section.id}-heading`} key={section.id}>
          <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
            <h3 className="text-2xl md:text-3xl" id={`gallery-${section.id}-heading`}>
              {section.title}
            </h3>
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {section.photos.length} {section.photos.length === 1 ? "photo" : "photos"}
            </p>
          </div>

          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {section.photos.map((photo, photoIndex) => (
              <figure
                className="group mb-4 break-inside-avoid overflow-hidden rounded-sm bg-secondary"
                key={photo.src}
              >
                <Image
                  alt={photo.alt}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  height={photo.height}
                  loading={sectionIndex === 0 && photoIndex < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  src={photo.src}
                  width={photo.width}
                />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
