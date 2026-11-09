import React from "react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { Layers, ShieldCheck, MapPin, ClipboardCheck, MessageCircle } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    ShieldCheck,
    MapPin,
    ClipboardCheck,
    MessageCircle,
  };

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-[#F0FAFE]/50 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Our Professional Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Why Choose <span className="text-[#22C4F2]">Dr. Tank?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            We focus on professional cleaning solutions that help maintain cleaner water storage systems for homes, businesses and industries.
          </p>
        </div>

        {/* Feature Cards Grid (5 items) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-[#22C4F2]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#171717] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E7EB]/70 flex items-center gap-2 text-xs font-semibold text-[#22C4F2]">
                  <span>Professional Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

