import type { Metadata } from "next";
import { siteConfig, basePath } from "./constants";

// Bare origin (without base path) so basePath-prefixed URLs resolve correctly.
const siteOrigin = new URL(siteConfig.url).origin;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Siddhartha Multi Speciality Hospital",
    "hospital in Rajamahendravaram",
    "best hospital Andhra Pradesh",
    "24/7 emergency hospital",
    "pediatrics Rajamahendravaram",
    "orthopedics hospital",
    "gynecology hospital",
    "diabetology",
    "health checkup packages",
    "multi speciality hospital"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "health",
  alternates: {
    canonical: `${basePath}/`,
    languages: { "te-IN": `${basePath}/te` }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: `${basePath}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${basePath}/og-image.svg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.lat,
      longitude: siteConfig.address.geo.lng
    },
    openingHours: "24/7",
    medicalSpecialty: [
      "General Medicine",
      "Pediatrics",
      "Orthopedics",
      "Gynecology",
      "Emergency Medicine",
      "Diabetology"
    ],
    sameAs: [
      "https://www.facebook.com/siddharthahospital",
      "https://www.instagram.com/siddharthahospital"
    ]
  };
}

export function hospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${siteConfig.url}/#hospital`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country
    },
    medicalSpecialty: ["General Medicine", "Pediatrics", "Orthopedics", "Emergency Medicine"],
    availableService: {
      "@type": "MedicalProcedure",
      name: "24/7 Emergency & Critical Care"
    }
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  };
}
