/**
 * ============================================================
 *  SITE CONTENT — edit everything about the website here.
 *  No other file needs to change for day-to-day updates.
 * ============================================================
 */

export const site = {
  name: "DesignwithManye",
  shortName: "DesignwithManye",
  tagline: "30 Years of Quality Printing",
  description:
    "Custom printing on shirts, books, souvenirs and funeral memorabilia. Three decades of craft, care and colour — every piece made to be remembered.",

  /**
   * WhatsApp number in international format, digits only (no +, no spaces).
   * Example for Ghana: 233241234567
   */
  whatsappNumber: "233554812855",

  /** Default pre-filled WhatsApp message */
  whatsappMessage:
    "Hello, I am interested in your printing services. Here is what I need...",

  email: "hello@designwithmanye.com",
  phoneDisplay: "+233 55 481 2855",

  /** Physical shop — set address to "" to hide the map section */
  address: "New Town, Accra, Ghana",
  mapEmbedUrl:
    "https://www.google.com/maps?q=New+Town,+Accra,+Ghana&output=embed",

  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------ */
/*  PORTFOLIO                                                    */
/*  To use her real photos: put files in /public/portfolio and   */
/*  change `image` to e.g. "/portfolio/my-photo.jpg".            */
/* ------------------------------------------------------------ */

export const categories = [
  "All",
  "Shirts",
  "Books",
  "Souvenirs",
  "Funeral",
  "Other",
] as const;

export type Category = (typeof categories)[number];

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
  featured?: boolean;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "custom-event-shirts",
    title: "Custom Event Shirts",
    category: "Shirts",
    description: "Full-colour prints for family reunions, churches and clubs.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "branded-polo-shirts",
    title: "Branded Polo Shirts",
    category: "Shirts",
    description: "Crisp company logos on quality polos, built to last.",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "statement-tees",
    title: "Statement Tees",
    category: "Shirts",
    description: "Bold single prints and small batches for special occasions.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "hardcover-books",
    title: "Hardcover Book Printing",
    category: "Books",
    description: "Elegant hardcovers for authors, churches and schools.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "anniversary-brochures",
    title: "Anniversary Brochures",
    category: "Books",
    description: "Commemorative booklets designed and printed with care.",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "souvenir-mugs",
    title: "Souvenir Mugs",
    category: "Souvenirs",
    description: "Photo mugs and keepsakes for weddings and milestones.",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "printed-tote-bags",
    title: "Printed Tote Bags",
    category: "Souvenirs",
    description: "Durable totes with custom artwork for events and shops.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "embroidered-caps",
    title: "Embroidered Caps",
    category: "Souvenirs",
    description: "Caps finished with embroidery or vinyl print.",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "memorial-programs",
    title: "Memorial Programs",
    category: "Funeral",
    description: "Dignified funeral programs designed with gentleness and care.",
    image:
      "https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "tribute-posters",
    title: "Tribute Posters & Banners",
    category: "Funeral",
    description: "Large-format tributes and memorial cloth printing.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "invitation-cards",
    title: "Invitation Cards",
    category: "Other",
    description: "Weddings, naming ceremonies and celebrations of every kind.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "stationery-design",
    title: "Business Stationery",
    category: "Other",
    description: "Letterheads, receipts and cards for growing businesses.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
  },
];

export const featuredWork = portfolio.filter((item) => item.featured);

/* ------------------------------------------------------------ */
/*  SERVICES                                                     */
/* ------------------------------------------------------------ */

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "shirts",
    title: "Custom Shirt Printing",
    description:
      "T-shirts, polos and uniforms printed in vivid, long-lasting colour. From a single special shirt to hundreds for your event, school or company.",
    details: [
      "Screen printing & heat transfer",
      "Event, church & club shirts",
      "Company uniforms with logos",
      "Single pieces or bulk orders",
    ],
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "books",
    title: "Book Printing & Design",
    description:
      "Complete book production — layout, cover design, printing and binding. Perfect for authors, churches, schools and anniversary publications.",
    details: [
      "Layout & cover design included",
      "Hardcover and softcover binding",
      "Brochures, manuals & magazines",
      "Short runs welcome",
    ],
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "souvenirs",
    title: "Souvenir Printing",
    description:
      "Bags, mugs, caps, pens, calendars and more — beautiful keepsakes for weddings, birthdays, corporate events and every celebration in between.",
    details: [
      "Mugs, bags, caps & pens",
      "Calendars & photo keepsakes",
      "Wedding & party favours",
      "Corporate branded gifts",
    ],
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "funeral",
    title: "Funeral Memorabilia",
    description:
      "In difficult moments, we handle every detail with dignity and speed — programs, posters, banners and memorial cloth that honour a life well lived.",
    details: [
      "Funeral programs & order of service",
      "Tribute posters & banners",
      "Memorial cloth printing",
      "Gentle, fast turnaround",
    ],
    image:
      "https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?auto=format&fit=crop&w=1200&q=80",
  },
];
