import React from "react";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FAFE] border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Comprehensive Cleaning Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Complete Water Tank <span className="text-[#22C4F2]">Cleaning Solutions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            From household water tanks to complex industrial treatment systems, Dr. Tank offers specialized cleaning solutions based on your requirements.
          </p>
        </div>

        {/* Services Grid (5 cards) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

