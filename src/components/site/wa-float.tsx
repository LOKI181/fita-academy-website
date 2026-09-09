import { MessageCircle } from "lucide-react";

import { brand } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FITA Academy on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden />
      <span className="hidden pr-1 text-sm font-semibold group-hover:inline md:inline">
        Chat with us
      </span>
    </a>
  );
}