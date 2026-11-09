import React from "react";
import { KERALA_DISTRICTS } from "@/lib/constants";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";
import { MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ServiceLocations() {
  return (
    <section id="locations" className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FAFE] border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              100% Kerala Coverage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Professional Tank Cleaning <span className="text-[#22C4F2]">Across Kerala.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Looking for reliable water tank cleaning services near you? Dr. Tank provides residential, commercial and industrial tank cleaning solutions across Kerala.
          </p>
        </div>

        {/* 14 Districts Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {KERALA_DISTRICTS.map((district) => (
            <div
              key={district}
              className="p-3.5 sm:p-4 rounded-xl bg-[#F0FAFE]/60 border border-[#E5E7EB] hover:border-[#22C4F2] hover:bg-white hover:shadow-sm transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] mb-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#171717] group-hover:text-[#22C4F2] transition-colors">
                {district}
              </span>
              <span className="text-[10px] text-[#555555] mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-[#22C4F2]" />
                Available
              </span>
            </div>
          ))}
        </div>

        {/* District SEO & Callout Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F0FAFE] border border-[#22C4F2]/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-[#171717]">
              Need service anywhere in Kerala?
            </h3>
            <p className="text-sm text-[#555555] mt-1 max-w-xl">
              From Palakkad, Ernakulam, and Thrissur to Thiruvananthapuram and Kozhikode, our mobile cleaning teams are ready to inspect and service your water tanks.
            </p>
          </div>

          <a
            href={QUICK_WHATSAPP_URLS.locationCheck}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Check Service Availability</span>
          </a>
        </div>
      </div>
    </section>
  );
}
