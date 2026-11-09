import React from "react";
import { PACKAGES } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Check, MessageSquare, Sparkles } from "lucide-react";

export default function Packages() {
  return (
    <section id="packages" className="py-16 lg:py-24 bg-[#F0FAFE]/40 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Transparent Service Options
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Choose the Right <span className="text-[#22C4F2]">Cleaning Plan.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Flexible packages tailored to individual residences, apartment complexes, commercial sites, and industrial setups across Kerala.
          </p>
        </div>

        {/* Pricing/Package Cards (3 Cards) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const whatsappUrl = createWhatsAppUrl(pkg.prefilledMessage);

            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? "border-[#22C4F2] shadow-xl ring-2 ring-[#22C4F2]/20 lg:-translate-y-2"
                    : "border-[#E5E7EB] hover:border-[#22C4F2]/60 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular Highlight Pill */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22C4F2] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Tag */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-[#171717] tracking-tight">
                      {pkg.name}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0FAFE] text-[#22C4F2] border border-[#22C4F2]/30">
                      {pkg.tag}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-[#555555] leading-relaxed min-h-[40px]">
                    {pkg.description}
                  </p>

                  {/* Pricing Label */}
                  <div className="mt-6 p-4 rounded-2xl bg-[#F0FAFE]/80 border border-[#22C4F2]/20">
                    <div className="text-xs uppercase tracking-wider text-[#555555] font-semibold">
                      Estimated Pricing
                    </div>
                    <div className="text-xl font-bold text-[#171717] mt-0.5">
                      {pkg.pricingLabel}
                    </div>
                    <p className="text-[11px] text-[#555555] mt-1">
                      Final cost depends on tank capacity, type, and location.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-3">
                      What&apos;s Included:
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                          <div className="w-4 h-4 rounded-full bg-[#22C4F2]/10 flex items-center justify-center text-[#22C4F2] shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 ${
                      pkg.popular
                        ? "bg-[#22C4F2] hover:bg-[#0FAAD8] text-white shadow-md hover:shadow-lg"
                        : "bg-[#F0FAFE] hover:bg-[#22C4F2] text-[#171717] hover:text-white border border-[#22C4F2]/40"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get a Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
