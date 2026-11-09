"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]"
          : "bg-white border-b border-[#E5E7EB]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-[#22C4F2]/30 p-0.5 flex items-center justify-center shadow-sm group-hover:border-[#22C4F2] transition-all">
              <Image
                src="/images/logo.jpeg"
                alt="Dr. Tank Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#171717] leading-none group-hover:text-[#22C4F2] transition-colors">
                Dr. <span className="text-[#22C4F2]">Tank</span>
              </span>
              <span className="text-xs font-medium text-[#555555] tracking-wide mt-1">
                {BRAND.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-[#555555] hover:text-[#22C4F2] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#22C4F2] transition-colors py-2 px-3"
            >
              <Phone className="w-4 h-4 text-[#22C4F2]" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => handleScrollTo(e, "#booking")}
              className="inline-flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Cleaning</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#booking"
              onClick={(e) => handleScrollTo(e, "#booking")}
              className="inline-flex items-center justify-center gap-1.5 bg-[#22C4F2] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              suppressHydrationWarning
              className="p-2 rounded-lg text-[#171717] hover:bg-[#F0FAFE] focus:outline-none focus:ring-2 focus:ring-[#22C4F2]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#171717]" />
              ) : (
                <Menu className="w-6 h-6 text-[#171717]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] shadow-lg animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#171717] hover:bg-[#F0FAFE] hover:text-[#22C4F2] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5E7EB] flex flex-col gap-2.5">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#E5E7EB] text-sm font-semibold text-[#171717] hover:bg-[#F0FAFE]"
              >
                <Phone className="w-4 h-4 text-[#22C4F2]" />
                <span>Call {BRAND.phone}</span>
              </a>
              <a
                href="#booking"
                onClick={(e) => handleScrollTo(e, "#booking")}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#22C4F2] text-white text-sm font-semibold shadow hover:bg-[#0FAAD8]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book a Cleaning</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
