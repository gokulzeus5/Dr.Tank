import React from "react";
import { BRAND } from "@/lib/constants";
import { QUICK_WHATSAPP_URLS } from "@/lib/whatsapp";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] p-2.5 px-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${BRAND.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-white border-2 border-[#22C4F2] text-[#171717] hover:bg-[#F0FAFE] text-sm font-bold py-2.5 px-3 rounded-xl min-h-[44px] transition-colors"
          aria-label="Call Dr. Tank"
        >
          <Phone className="w-4 h-4 text-[#22C4F2]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={QUICK_WHATSAPP_URLS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white text-sm font-bold py-2.5 px-3 rounded-xl min-h-[44px] shadow-sm transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
