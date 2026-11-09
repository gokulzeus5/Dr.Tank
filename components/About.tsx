import React from "react";
import Image from "next/image";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";
import { Home, Building2, Factory, Waves, MessageSquare, CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Residential Tank Cleaning",
      desc: "Safe, thorough cleaning for domestic overhead and underground sump tanks.",
      icon: Home,
    },
    {
      title: "Commercial Tank Cleaning",
      desc: "High-capacity storage maintenance for apartments, hotels, hospitals & complexes.",
      icon: Building2,
    },
    {
      title: "Industrial Tank Cleaning",
      desc: "Robust solutions for heavy industrial process vessels and factory reservoirs.",
      icon: Factory,
    },
    {
      title: "Water Treatment Facility Cleaning",
      desc: "Specialized de-sludging and washdown for STP, ETP & WTP plant infrastructure.",
      icon: Waves,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F0FAFE]/60 border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with stacked cards */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-xl aspect-[4/3] sm:aspect-[1/1]">
              <Image
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Tank professional water tank cleaning team and equipment"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest font-bold text-[#22C4F2]">
                  Pure • Clean • Safe
                </span>
                <p className="text-sm sm:text-base font-semibold mt-1">
                  Professional water tank cleaning solutions designed for hygienic water storage across Kerala.
                </p>
              </div>
            </div>

            {/* Floating feature badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#22C4F2] flex items-center justify-center text-white shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#555555] font-medium">Standards of</p>
                <p className="text-sm font-bold text-[#171717]">Hygiene &amp; Safety</p>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#22C4F2]/30 w-fit mb-3">
              <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
                About Dr. Tank
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              Your Water&apos;s <span className="text-[#22C4F2]">Best Friend.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#555555] leading-relaxed">
              At Dr. Tank, we provide professional water tank cleaning solutions designed for residential,
              commercial and industrial requirements. We understand the importance of maintaining clean water
              storage systems and offer specialized cleaning services for different types of tanks and treatment facilities.
            </p>

            {/* 4 Highlight Areas Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#22C4F2]/50 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#171717]">{item.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#555555] leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center">
              <a
                href={QUICK_WHATSAPP_URLS.talkToTeam}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
