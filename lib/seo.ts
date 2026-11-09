import { BRAND, FAQS, SERVICES } from "./constants";

export const SITE_URL = "https://drtank.in"; // Canonical placeholder

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Dr. Tank",
    alternateName: "Dr. Tank Water Tank Cleaning Services Kerala",
    description:
      "Professional water tank cleaning services for homes, businesses and industries across Kerala. Residential overhead tanks, sumps, commercial tanks, STP, ETP and WTP cleaning.",
    url: SITE_URL,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kerala",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [`https://wa.me/${BRAND.phoneRaw}`],
  };
}

export function generateServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: BRAND.name,
        telephone: BRAND.phone,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Kerala",
      },
    })),
  };
}

export function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
