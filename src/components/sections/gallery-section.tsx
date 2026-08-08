import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";
import { galleryImages } from "@/lib/constants";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

export function GallerySection() {
  return (
    <section className="section-pad relative overflow-hidden" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Siddhartha Hospitals"
          description="A glimpse into our facilities, technology, and the people who make healing possible."
        />
        <Stagger className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {galleryImages.map((src, i) => (
            <StaggerItem key={src} className="break-inside-avoid">
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft">
                <Image
                  src={src}
                  alt={`Hospital gallery image ${i + 1}`}
                  width={600}
                  height={i % 3 === 0 ? 700 : 450}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
