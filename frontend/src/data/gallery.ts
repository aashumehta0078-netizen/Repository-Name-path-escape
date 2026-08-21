// GALLERY IMAGES — these are placeholder stock photos.
// Replace each `src` with real Mansi Beauty Care photos when available,
// keeping the same category and updating the alt text as needed.

export type GalleryCategory = "Makeup" | "Hair" | "Facial" | "Nails" | "Salon";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const GALLERY_CATEGORIES: Array<"All" | GalleryCategory> = [
  "All",
  "Makeup",
  "Hair",
  "Facial",
  "Nails",
  "Salon",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxicmlkYWwlMjBtYWtldXAlMjBpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTc4NzMxMDg5MHww&ixlib=rb-4.1.0&q=80&w=800",
    alt: "Elegant Indian bridal makeup look at a beauty parlour in Zundal",
    category: "Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxicmlkYWwlMjBtYWtldXAlMjBpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTc4NzMxMDg5MHww&ixlib=rb-4.1.0&q=80&w=800",
    alt: "Traditional bridal portrait with detailed makeup and jewellery",
    category: "Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
    alt: "Professional party makeup application with brushes",
    category: "Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nJTIwd29tYW58ZW58MHx8fHwxNzg3MzEwODkwfDA&ixlib=rb-4.1.0&q=80&w=800",
    alt: "Hair styling in progress at a ladies beauty salon",
    category: "Hair",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nJTIwd29tYW58ZW58MHx8fHwxNzg3MzEwODkwfDA&ixlib=rb-4.1.0&q=80&w=800",
    alt: "Relaxing hair wash and blow-dry at the salon",
    category: "Hair",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    alt: "Hair spa treatment for smooth, healthy hair",
    category: "Hair",
  },
  {
    src: "https://images.pexels.com/photos/13899861/pexels-photo-13899861.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Soothing facial and head massage treatment",
    category: "Facial",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    alt: "Glow facial treatment at a beauty salon in Ahmedabad",
    category: "Facial",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    alt: "Creative nail art and manicure design",
    category: "Nails",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYSUyMHRyZWF0bWVudCUyMGx1eHVyeXxlbnwwfHx8fDE3ODczMTA4OTF8MA&ixlib=rb-4.1.0&q=80&w=800",
    alt: "Comfortable seating inside a premium beauty salon",
    category: "Salon",
  },
  {
    src: "https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Elegant salon reception and interior ambience",
    category: "Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    alt: "Modern beauty salon interior with styling stations",
    category: "Salon",
  },
];
