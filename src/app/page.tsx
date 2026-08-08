import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FaqSection } from "@/components/sections/faq-section";
import { AppointmentSection } from "@/components/sections/appointment-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <WhyChooseUs />
      <DepartmentsSection limit={9} />
      <ServicesSection />
      <DoctorsSection limit={6} />
      <FacilitiesSection />
      <TestimonialsSection />
      <GallerySection />
      <FaqSection />
      <AppointmentSection />
      <CtaSection />
    </>
  );
}
