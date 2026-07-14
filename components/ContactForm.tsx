"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Contact form without a backend: on submit it opens WhatsApp with the
 * details pre-filled, and offers a mailto fallback. Swap `handleSubmit`
 * for a Resend API route later if email delivery is preferred.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const text = [
      `Hello, my name is ${name}.`,
      message,
      "",
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="font-display text-2xl font-bold text-burgundy">
          Thank you!
        </p>
        <p className="mt-2 text-ink/70">
          Your message has opened in WhatsApp — just press send there and
          we&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-outline mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-gold/30 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-burgundy">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ama Mensah"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-burgundy">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-burgundy">
          Phone number <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+233 00 000 0000"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-burgundy">
          What would you like printed?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — shirts, a book, souvenirs, or memorial items..."
          className={inputClasses}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-whatsapp flex-1">
          <WhatsAppIcon className="h-4 w-4" />
          Send via WhatsApp
        </button>
        <a
          href={`mailto:${site.email}`}
          className="btn-outline flex-1 text-center"
        >
          Or email us instead
        </a>
      </div>
    </form>
  );
}
