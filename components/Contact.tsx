import React from "react";
import { BRAND } from "@/lib/constants";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F0FAFE]/60 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Let&apos;s Get Your <span className="text-[#22C4F2]">Tank Cleaned.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Have questions or need a fast quote? Reach out to the Dr. Tank team via phone, WhatsApp, or email. We are happy to help!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#22C4F2] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between text-center items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">Call Directly</h3>
              <p className="text-xs text-[#555555] mt-1">Speak with our cleaning coordinator</p>
              <div className="text-lg font-extrabold text-[#171717] mt-3">
                {BRAND.phone}
              </div>
            </div>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#22C4F2] shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-center items-center relative">
            <div className="absolute -top-3 bg-[#22C4F2] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Fastest Response
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#F0FAFE] border border-[#22C4F2]/40 flex items-center justify-center text-[#22C4F2] mb-4">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">WhatsApp Message</h3>
              <p className="text-xs text-[#555555] mt-1">Chat &amp; share tank photos instantly</p>
              <div className="text-lg font-extrabold text-[#171717] mt-3">
                {BRAND.phone}
              </div>
            </div>
            <a
              href={QUICK_WHATSAPP_URLS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#22C4F2] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between text-center items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-center justify-center text-[#22C4F2] mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">Email Us</h3>
              <p className="text-xs text-[#555555] mt-1">Commercial &amp; corporate inquiries</p>
              <div className="text-sm sm:text-base font-bold text-[#171717] mt-3 break-all">
                {BRAND.email}
              </div>
            </div>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#F0FAFE] hover:bg-[#22C4F2] text-[#171717] hover:text-white font-semibold text-sm py-3 px-4 rounded-xl border border-[#22C4F2]/30 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Operating Details Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E5E7EB] grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0FAFE] flex items-center justify-center text-[#22C4F2] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#555555]">Service Coverage</div>
              <div className="text-sm font-bold text-[#171717]">All 14 Districts of Kerala</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0FAFE] flex items-center justify-center text-[#22C4F2] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#555555]">Customer Support Hours</div>
              <div className="text-sm font-bold text-[#171717]">Mon - Sun: 7:00 AM - 8:00 PM</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0FAFE] flex items-center justify-center text-[#22C4F2] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#555555]">Operational Base</div>
              <div className="text-sm font-bold text-[#171717]">{BRAND.primaryLocation}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
