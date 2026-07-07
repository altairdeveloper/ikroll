import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hola IKROL, me gustaría solicitar una cotización.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110"
      style={{ background: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7" fill="white" />
      <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#25D366" }}></span>
    </a>
  );
}
