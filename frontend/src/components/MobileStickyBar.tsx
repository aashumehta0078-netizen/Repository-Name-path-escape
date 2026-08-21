import { Phone, MessageCircle, CalendarHeart } from "lucide-react";
import { telLink, waLink } from "@/config/site";
import { useBooking } from "@/components/BookingContext";

export const MobileStickyBar = () => {
  const { openBooking } = useBooking();

  return (
    <div
      data-testid="mobile-sticky-bar"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#EBE3D8] bg-white/95 shadow-[0_-8px_30px_-10px_rgba(35,31,32,0.25)] backdrop-blur-xl md:hidden"
    >
      <a
        href={telLink()}
        data-testid="mobile-sticky-call-btn"
        className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-rosegold-deep"
      >
        <Phone className="h-5 w-5" />
        Call
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-sticky-whatsapp-btn"
        className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-[#128C7E]"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
      <button
        onClick={() => openBooking()}
        data-testid="mobile-sticky-book-btn"
        className="flex flex-col items-center gap-1 bg-rosegold-deep py-3 text-xs font-semibold text-white"
      >
        <CalendarHeart className="h-5 w-5" />
        Book Appointment
      </button>
    </div>
  );
};
