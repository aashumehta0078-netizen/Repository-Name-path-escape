// ============================================================
// MANSI BEAUTY CARE — BUSINESS CONFIGURATION
// Update the values below with the salon's real details.
// Anything marked PLACEHOLDER must be replaced before go-live.
// ============================================================

export const SITE = {
  name: "Mansi Beauty Care",
  tagline: "Your Beauty, Our Expertise",
  area: "Zundal",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",

  phoneDisplay: "+91 74340 98629",
  phoneDial: "+917434098629",

  whatsappNumber: "917434098629",

  // PLACEHOLDER — replace with the final domain when the site goes live
  canonicalUrl: "https://www.mansibeautycare.com/",

  // PLACEHOLDER — replace with the salon's real Google Maps listing URL
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mansi+Beauty+Care+Zundal+Ahmedabad",
  googleReviewsUrl:
    "https://www.google.com/search?q=Mansi+Beauty+Care+Zundal+Ahmedabad+reviews",

  instagramUrl: "https://www.instagram.com/mansi_beauty_care_zundal/",
  facebookUrl: "#",
};

export const DEFAULT_WA_MESSAGE =
  "Hello Mansi, I would like to book an appointment at Mansi Beauty Care, Zundal.";

export const waLink = (message: string = DEFAULT_WA_MESSAGE): string =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = (): string => `tel:${SITE.phoneDial}`;

export const IMAGES = {
  heroBridal:
    "https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxicmlkYWwlMjBtYWtldXAlMjBpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTc4NzMxMDg5MHww&ixlib=rb-4.1.0&q=85",
  heroSalon:
    "https://images.unsplash.com/photo-1706795033728-9232ef548a16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxiZWF1dHklMjBzYWxvbiUyMHNwYSUyMHRyZWF0bWVudCUyMGx1eHVyeXxlbnwwfHx8fDE3ODczMTA4OTF8MA&ixlib=rb-4.1.0&q=85",
  bridalLarge:
    "https://images.unsplash.com/photo-1587271315307-eaebc181c749?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTc4NzMxMDg5MHww&ixlib=rb-4.1.0&q=85",
  bridalPortrait:
    "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxicmlkYWwlMjBtYWtldXAlMjBpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTc4NzMxMDg5MHww&ixlib=rb-4.1.0&q=85",
};
