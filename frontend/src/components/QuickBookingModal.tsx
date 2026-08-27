import { useEffect, useState, type FormEvent } from "react";
import { X, MessageCircle } from "lucide-react";
import { SERVICES } from "@/data/services";
import { waLink } from "@/config/site";

const TIME_SLOTS = ["Morning", "Afternoon", "Evening"];

interface QuickBookingModalProps {
  open: boolean;
  defaultService?: string;
  onClose: () => void;
}

export const QuickBookingModal = ({ open, defaultService, onClose }: QuickBookingModalProps) => {
  const [name, setName] = useState("");
  const [service, setService] = useState(defaultService ?? "");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(TIME_SLOTS[0]);

  useEffect(() => {
    if (open) setService(defaultService ?? "");
  }, [open, defaultService]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Mansi, I would like to book an appointment.",
      name && `Name: ${name}`,
      service && `Service: ${service}`,
      date && `Preferred date: ${date}`,
      `Preferred time: ${slot}`,
      "Location: Zundal, Ahmedabad",
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
      data-testid="booking-modal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl bg-white p-7 shadow-lift sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-charcoal">Book with Mansi</h2>
            <p className="mt-1 text-sm text-[#635D5C]">
              Fill this in and we'll open WhatsApp with your booking ready to send.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking form"
            data-testid="booking-modal-close-btn"
            className="rounded-full p-2 text-charcoal/60 transition-colors hover:bg-champagne"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="booking-name" className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
              Your Name
            </label>
            <input
              id="booking-name"
              data-testid="booking-name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Mansi Patel"
              className="mt-1.5 w-full rounded-2xl border border-[#EBE3D8] bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
            />
          </div>

          <div>
            <label htmlFor="booking-service" className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
              Service
            </label>
            <select
              id="booking-service"
              data-testid="booking-service-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="mt-1.5 w-full rounded-2xl border border-[#EBE3D8] bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICES.filter((s) => s.available).map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-date" className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                Preferred Date
              </label>
              <input
                id="booking-date"
                data-testid="booking-date-input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="mt-1.5 w-full rounded-2xl border border-[#EBE3D8] bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              />
            </div>
            <div>
              <label htmlFor="booking-slot" className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                Time of Day
              </label>
              <select
                id="booking-slot"
                data-testid="booking-slot-select"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-[#EBE3D8] bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              >
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            data-testid="booking-modal-submit-btn"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-rosegold-deep px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-[background-color,transform] hover:bg-rosegold hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Confirm on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};
