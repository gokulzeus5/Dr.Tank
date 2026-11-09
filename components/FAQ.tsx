"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F0FAFE]/40 border-t border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Answers &amp; Clarity
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Frequently Asked <span className="text-[#22C4F2]">Questions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Everything you need to know about our water tank cleaning process, coverage in Kerala, and service guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#22C4F2]/50 transition-all overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#171717] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#22C4F2] text-white rotate-180"
                        : "bg-[#F0FAFE] text-[#555555]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#E5E7EB]/50 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F0FAFE] text-[#22C4F2] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#171717]">Have more questions?</div>
              <div className="text-xs text-[#555555]">We are here to assist with any special tank requirements.</div>
            </div>
          </div>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#22C4F2] bg-[#F0FAFE] hover:bg-[#E0F5FD] px-4 py-2.5 rounded-xl border border-[#22C4F2]/30 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#22C4F2]" />
            <span>Call {BRAND.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
