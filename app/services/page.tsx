import type { Metadata } from "next";
import Image from "next/image";
import { services, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom shirt printing, book printing and design, souvenir printing, and funeral memorabilia — all under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-burgundy-dark py-16 text-center text-cream">
        <div className="container-site">
          <span className="section-kicker">What we offer</span>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Four specialties, one promise: prints made with care, delivered on
            time, and finished to last.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site space-y-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-burgundy sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink/80">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-ink/80">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Hello, I am interested in your "${service.title}" service. Here is what I need...`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-8"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask about {service.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gold-soft py-16">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl font-bold text-burgundy">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Describe the occasion and we&apos;ll recommend the perfect print —
            with a free quote, no obligation.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Get a Free Quote on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
