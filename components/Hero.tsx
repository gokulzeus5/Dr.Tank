import React from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";
import { CalendarCheck, MessageSquare, ShieldCheck, Factory, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Brand Logo & Category Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white border-2 border-[#22C4F2]/40 p-1 shadow-md shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="Dr. Tank Official Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F0FAFE] border border-[#22C4F2]/30">
                <span className="w-2 h-2 rounded-full bg-[#22C4F2] animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-[#171717] tracking-wide">
                  Water Tank Cleaning Services in Kerala
                </span>
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.15]">
              Clean Water Starts With a{" "}
              <span className="text-[#22C4F2] underline decoration-[#22C4F2]/30 decoration-wavy decoration-2 underline-offset-8">
                Clean Tank.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-6 text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl">
              Professional water tank cleaning services for homes, businesses and industries across Kerala.
              From residential overhead tanks to large-scale STP, ETP and industrial tanks, we help maintain cleaner and more hygienic water storage.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white text-base font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Your Cleaning</span>
              </a>

              <a
                href={QUICK_WHATSAPP_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white border-2 border-[#22C4F2] hover:bg-[#F0FAFE] text-[#171717] hover:text-[#22C4F2] text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 text-[#22C4F2]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#171717] leading-snug">
                  Residential &amp; Commercial Cleaning
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#171717] leading-snug">
                  Industrial Tank Cleaning
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#171717] leading-snug">
                  Serving Across Kerala
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#22C4F2]/20 to-transparent rounded-3xl blur-xl opacity-70"></div>

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-xl aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85"
                  alt="Dr. Tank professional water tank cleaning services in Kerala"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Floating Info Pill on the Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E5E7EB] shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#22C4F2]">
                        Hygienic Assurance
                      </div>
                      <div className="text-sm font-bold text-[#171717]">
                        Deep Desilting &amp; Jet Wash Cleaning
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0FAFE] text-[#171717] px-2.5 py-1 rounded-md border border-[#22C4F2]/30">
                      <CheckCircle2 className="w-4 h-4 text-[#22C4F2]" />
                      <span>Kerala Wide</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative side badge with official logo */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-[#E5E7EB] items-center gap-2.5">
                <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-[#22C4F2]/30 shrink-0">
                  <Image src="/images/logo.jpeg" alt="Dr. Tank" fill className="object-contain" />
                </div>
                <span className="text-xs font-bold text-[#171717]">
                  Overhead • Sump • STP • ETP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
