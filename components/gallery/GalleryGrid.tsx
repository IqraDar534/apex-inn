import Image from "next/image";

const galleryItems = [
  { alt: "Exterior view of Apex Inn", position: "object-center", src: "/images/gallery/gallery-01.jpg" },
  { alt: "Deluxe room setting at Apex Inn", position: "object-[35%_center]", src: "/images/gallery/gallery-02.jpg" },
  { alt: "Executive room details at Apex Inn", position: "object-[65%_center]", src: "/images/gallery/gallery-03.jpg" },
  { alt: "Family room setting at Apex Inn", position: "object-[25%_70%]", src: "/images/gallery/gallery-04.jpg" },
  { alt: "Apex Inn guest house entrance", position: "object-[75%_70%]", src: "/images/gallery/gallery-05.jpg" },
  { alt: "Welcoming interior space at Apex Inn", position: "object-[50%_30%]", src: "/images/gallery/gallery-06.jpg" },
  { alt: "Comfortable seating area at Apex Inn", position: "object-[20%_center]", src: "/images/gallery/gallery-07.jpg" },
  { alt: "Thoughtful interior detail at Apex Inn", position: "object-[80%_center]", src: "/images/gallery/gallery-08.jpg" },
  { alt: "Guest facilities at Apex Inn", position: "object-[40%_70%]", src: "/images/gallery/gallery-09.jpg" },
  { alt: "Shared space prepared for Apex Inn guests", position: "object-[60%_70%]", src: "/images/gallery/gallery-10.jpg" },
  { alt: "Relaxing surroundings of Apex Inn", position: "object-[30%_30%]", src: "/images/gallery/gallery-11.jpg" },
  { alt: "Apex Inn exterior and surroundings", position: "object-[70%_30%]", src: "/images/gallery/gallery-12.jpg" },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {galleryItems.map((item, index) => {
        const isFeatured = index === 0 || index === 5;

        return (
          <figure
            className={`group relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary ${
              isFeatured ? "md:col-span-2 lg:col-span-2 lg:aspect-[2/1]" : ""
            }`}
            key={item.alt}
          >
            <Image
              alt={item.alt}
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.position}`}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              sizes={isFeatured ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 66vw" : "(max-width: 767px) 100vw, 33vw"}
              src={item.src}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-foreground/5 transition-colors group-hover:bg-transparent" />
          </figure>
        );
      })}
    </div>
  );
}