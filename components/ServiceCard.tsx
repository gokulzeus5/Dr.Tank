"use client";

import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = createWhatsAppUrl(service.prefilledMessage);

  return (
    <article className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#22C4F2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#171717] text-xs font-bold px-3 py-1 rounded-full border border-[#E5E7EB] shadow-sm">
          {service.badge}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#171717] group-hover:text-[#22C4F2] transition-colors leading-snug">
            {service.title}
          </h3>

          <p className="mt-3 text-sm text-[#555555] leading-relaxed">
            {service.description}
          </p>

          {/* Key Checklist Points */}
          <ul className="mt-4 space-y-2 border-t border-[#E5E7EB] pt-4">
            {service.detailedPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#171717]">
                <Check className="w-4 h-4 text-[#22C4F2] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Natural SEO Tags in clean badge style */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.seoKeywords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-[#555555] bg-[#F0FAFE] px-2.5 py-0.5 rounded-md border border-[#22C4F2]/20"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
}
