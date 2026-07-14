"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  categories,
  portfolio,
  whatsappLink,
  type Category,
  type PortfolioItem,
} from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

function inquiryLink(item: PortfolioItem): string {
  return whatsappLink(
    `Hello, I saw "${item.title}" in your portfolio and I would like to inquire about this design.`
  );
}

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const items =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, closeLightbox]);

  return (
    <div>
      {/* Category filters */}
      <div
        role="group"
        aria-label="Filter portfolio by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy ${
                active
                  ? "bg-burgundy text-cream shadow"
                  : "bg-white text-ink hover:bg-gold-soft hover:text-burgundy"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Gallery grid */}
      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="group animate-fade-up overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setSelected(item)}
              aria-label={`Enlarge image: ${item.title}`}
              className="relative block aspect-[4/3] w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-burgundy/85 px-3 py-1 text-xs font-semibold text-cream">
                {item.category}
              </span>
            </button>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-burgundy">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-ink/70">{item.description}</p>
              <a
                href={inquiryLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-4 w-full !py-2.5 text-xs"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Inquire about this design
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-xl font-bold text-cream">
                  {selected.title}
                </h3>
                <p className="text-sm text-cream/70">{selected.description}</p>
              </div>
              <a
                href={inquiryLink(selected)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp shrink-0"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Inquire about this design
              </a>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close enlarged image"
              className="absolute -top-3 right-0 flex h-10 w-10 -translate-y-full items-center justify-center rounded-full bg-cream text-burgundy shadow hover:bg-gold-soft"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
