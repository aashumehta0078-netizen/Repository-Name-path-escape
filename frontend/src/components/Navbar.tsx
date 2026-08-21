import { useEffect, useState } from "react";
import { Menu, X, Phone, CalendarHeart } from "lucide-react";
import { SITE, telLink } from "@/config/site";
import { useBooking } from "@/components/BookingContext";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar-container"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-[#EBE3D8] shadow-card"
          : "bg-white/60 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" data-testid="nav-logo" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rosegold text-white font-serif text-lg">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg md:text-xl font-semibold text-charcoal">
              Mansi Beauty Care
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-rosegold-deep">
              Beauty Parlour · Zundal
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-rosegold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telLink()}
            data-testid="nav-call-btn"
            className="flex items-center gap-2 rounded-full border border-rosegold/40 px-4 py-2 text-sm font-semibold text-rosegold-deep transition-colors hover:bg-rosegold-soft/40"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <button
            onClick={() => openBooking()}
            data-testid="nav-book-appointment-btn"
            className="flex items-center gap-2 rounded-full bg-rosegold-deep px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-[background-color,transform] hover:bg-rosegold hover:-translate-y-0.5"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Appointment
          </button>
        </div>

        <button
          className="lg:hidden rounded-full p-2 text-charcoal"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-testid="nav-mobile-menu-btn"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          data-testid="nav-mobile-menu"
          className="lg:hidden border-t border-[#EBE3D8] bg-white/95 backdrop-blur-xl px-4 pb-6 pt-3"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
                className="rounded-xl px-3 py-3 text-base font-medium text-charcoal transition-colors hover:bg-champagne"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
              data-testid="nav-mobile-book-btn"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-rosegold-deep px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
