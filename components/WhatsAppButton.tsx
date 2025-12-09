"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "971563562153";
const DEFAULT_MESSAGE = "Hi! I'm interested in learning more about Ebox Pro's fulfillment services.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-10 right-8 z-50 flex items-center justify-center size-14 rounded-full bg-[oklch(0.62_0.17_142)] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.62_0.17_142)] focus-visible:ring-offset-2"
    >
      <FaWhatsapp className="size-7" />
    </a>
  );
}
