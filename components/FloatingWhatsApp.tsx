import React from "react";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={QUICK_WHATSAPP_URLS.general}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
      aria-label="Chat with Dr. Tank on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline font-bold text-sm tracking-wide">
        WhatsApp Us
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C4F2]"></span>
      </span>
    </a>
  );
}
