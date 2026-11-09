import React from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Residential Tank Cleaning", href: "#services" },
    { name: "Commercial Tank Cleaning", href: "#services" },
    { name: "STP Tank Cleaning", href: "#services" },
    { name: "ETP Tank Cleaning", href: "#services" },
    { name: "WTP & Industrial Tank Cleaning", href: "#services" },
  ];

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-24 lg:pb-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Overview (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-[#22C4F2]/30 p-1 flex items-center justify-center shadow">
                <Image
                  src="/images/logo.jpeg"
                  alt="Dr. Tank Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  Dr. <span className="text-[#22C4F2]">Tank</span>
                </span>
                <span className="text-xs font-medium text-gray-400 mt-1">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Professional water tank cleaning solutions for residential, commercial and industrial requirements across Kerala.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={QUICK_WHATSAPP_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#22C4F2] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#22C4F2]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (Col 8-9) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#22C4F2] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#22C4F2]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Col 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#22C4F2] shrink-0 mt-1" />
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="hover:text-[#22C4F2] transition-colors"
                >
                  {BRAND.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#22C4F2] shrink-0 mt-1" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[#22C4F2] transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#22C4F2] shrink-0 mt-1" />
                <span>Serving all 14 districts across Kerala (Base: {BRAND.primaryLocation})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 Dr. Tank. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Water Tank Cleaning Services in Kerala</span>
            <span>•</span>
            <span>Hygienic Water Storage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
