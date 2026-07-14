import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-burgundy-dark text-cream">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">{site.shortName}</p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
            {site.description}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-bold uppercase tracking-widest text-gold-light">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold-light">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-gold-light">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-gold-light">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-gold-light">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-light">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-gold-light">
                {site.phoneDisplay}
              </a>
            </li>
            {site.address && <li>{site.address}</li>}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site py-5 text-center text-xs text-cream/60">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
