import Image from "next/image";
import Link from "next/link";
import { featuredWork, services, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-burgundy-dark text-cream">
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden="true"
        >
          <Image
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/60 via-transparent to-burgundy-dark"
          aria-hidden="true"
        />
        <div className="container-site relative py-24 text-center sm:py-32">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            Custom Printing Studio
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl animate-fade-up font-display text-xl italic text-gold-light sm:text-2xl">
            {site.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-cream/85 sm:text-lg">
            Beautiful, lasting prints on shirts, books, souvenirs and funeral
            memorabilia. Every order handled personally, with the care that
            only thirty years of craft can give.
          </p>
          <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/portfolio" className="btn-gold w-full sm:w-auto">
              View Portfolio
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Intro / trust strip ---------- */}
      <section className="border-b border-gold/20 bg-cream-dark">
        <div className="container-site grid gap-8 py-12 text-center sm:grid-cols-3">
          {[
            { value: "30+", label: "Years of experience" },
            { value: "1000s", label: "Of happy customers" },
            { value: "4", label: "Specialty print services" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-burgundy">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-ink/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- What we print ---------- */}
      <section className="py-20">
        <div className="container-site">
          <div className="text-center">
            <span className="section-kicker">What we print</span>
            <h2 className="section-title">One studio, every occasion</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink/70">
              From a single treasured shirt to a full memorial service — we
              design and print it all, with warmth and precision.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-burgundy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.description.split(".")[0]}.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold group-hover:text-burgundy">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured work ---------- */}
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="text-center">
            <span className="section-kicker">Featured work</span>
            <h2 className="section-title">A few pieces we&apos;re proud of</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {featuredWork.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                href="/portfolio"
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-display text-sm font-bold text-cream sm:text-base">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- About / story ---------- */}
      <section className="py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/manye.jpg"
              alt="Manye, custom printing artist"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <span className="section-kicker">Her story</span>
            <h2 className="section-title">Three decades of craft</h2>
            <p className="mt-6 leading-relaxed text-ink/80">
              For thirty years, {site.shortName} has helped families,
              businesses, churches and schools tell their stories in print.
              What began as a small workbench and a single press has grown
              into a trusted studio known for care, colour and detail.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Whether it&apos;s a joyful celebration shirt or a dignified
              memorial program, every piece is designed and finished by hand —
              because behind every print is a story that deserves to be told
              beautifully.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className="bg-gold-soft py-16">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl">
            Have something special in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Send us a photo, a sketch, or just an idea — we&apos;ll bring it
            to life in print.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
