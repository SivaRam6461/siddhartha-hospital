import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { GallerySection } from "@/components/sections/gallery-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of Siddhartha Multi Speciality Hospital — facilities, technology, and caring moments from our campus.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at our hospital"
        description="Experience our spaces, technology, and the warmth of care that defines Siddhartha Hospitals."
      />
      <Breadcrumb items={[{ name: "Gallery", href: "current" }]} />
      <GallerySection />
      <CtaSection />
    </>
  );
}
