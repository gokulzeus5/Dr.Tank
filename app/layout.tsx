import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  generateLocalBusinessSchema,
  generateServicesSchema,
  generateFaqSchema,
  SITE_URL,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#22C4F2",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Water Tank Cleaning Services in Kerala | Dr. Tank",
  description:
    "Looking for professional water tank cleaning services in Kerala? Dr. Tank offers residential, commercial, STP, ETP and industrial tank cleaning. Contact us to book your service.",
  keywords: [
    "Water tank cleaning",
    "Water tank cleaning services",
    "Water tank cleaning services Kerala",
    "Water tank cleaning services near me",
    "Water tank cleaning near me",
    "Home water tank cleaning services",
    "Residential water tank cleaning Kerala",
    "Commercial water tank cleaning Kerala",
    "Industrial tank cleaning Kerala",
    "STP tank cleaning Kerala",
    "ETP tank cleaning Kerala",
    "WTP tank cleaning Kerala",
    "Water tank cleaning services in Palakkad",
    "Water tank cleaning services in Ernakulam",
    "Water tank cleaning services in Thrissur",
    "Water tank cleaning services in Kozhikode",
  ],
  authors: [{ name: "Dr. Tank" }],
  creator: "Dr. Tank",
  publisher: "Dr. Tank",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Water Tank Cleaning Services in Kerala | Dr. Tank",
    description:
      "Professional residential, commercial, STP, ETP and industrial water tank cleaning services across all 14 districts of Kerala.",
    url: SITE_URL,
    siteName: "Dr. Tank",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Dr. Tank Professional Water Tank Cleaning Services Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Tank Cleaning Services in Kerala | Dr. Tank",
    description:
      "Professional residential, commercial, STP, ETP and industrial water tank cleaning services across all 14 districts of Kerala.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJson = JSON.stringify(generateLocalBusinessSchema());
  const servicesJson = JSON.stringify(generateServicesSchema());
  const faqJson = JSON.stringify(generateFaqSchema());

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: servicesJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJson }}
        />
      </head>
      <body className="antialiased text-[#171717] bg-white selection:bg-[#22C4F2]/20 selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}

