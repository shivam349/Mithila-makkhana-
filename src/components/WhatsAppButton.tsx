import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:scale-[1.02] transition"
    >
      <MessageCircle size={18} /> Chat on WhatsApp
    </Link>
  );
}
