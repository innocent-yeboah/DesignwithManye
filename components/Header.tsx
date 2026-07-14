"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-cream/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-display text-xl font-bold text-burgundy">
            {site.shortName}
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-burgundy text-cream"
                    : "text-ink hover:bg-gold-soft hover:text-burgundy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp ml-3 !px-4 !py-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-burgundy hover:bg-gold-soft md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-gold/20 bg-cream md:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-burgundy text-cream"
                      : "text-ink hover:bg-gold-soft"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
