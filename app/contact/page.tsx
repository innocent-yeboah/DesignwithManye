import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for quotes, orders and questions — by WhatsApp, email, phone, or visit our shop.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-burgundy-dark py-16 text-center text-cream">
        <div className="container-site">
          <span className="section-kicker">Say hello</span>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            The fastest way to reach us is WhatsApp — but we&apos;re happy to
            hear from you however suits you best.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-burgundy">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Fill this in and it will open in WhatsApp, ready to send.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-burgundy">
                Reach us directly
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <p className="font-semibold text-ink/60">WhatsApp / Phone</p>
                  <a
                    href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                    className="text-burgundy hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink/60">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-burgundy hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
                {site.address && (
                  <li>
                    <p className="font-semibold text-ink/60">Visit the shop</p>
                    <p className="text-ink/80">{site.address}</p>
                  </li>
                )}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-burgundy">
                Opening hours
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {site.hours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-ink/70">{entry.days}</span>
                    <span className="font-semibold text-burgundy">
                      {entry.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      {site.address && (
        <section className="pb-16">
          <div className="container-site">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <iframe
                src={site.mapEmbedUrl}
                title={`Map showing the location of ${site.shortName}`}
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
