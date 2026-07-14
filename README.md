# Manye Prints

Portfolio and booking website for **Manye** — 30 years of quality
custom printing on shirts, books, souvenirs and funeral memorabilia.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.
No database — the portfolio is static and inquiries go through WhatsApp.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For production:

```bash
npm run build
npm start
```

## Updating the website (the "admin" guide)

Almost everything lives in **one file**: `lib/site.ts`.

| What to change                    | Where                                    |
| --------------------------------- | ---------------------------------------- |
| WhatsApp number                   | `site.whatsappNumber` (digits only, international format, e.g. `233241234567`) |
| Email, phone, address, hours      | `site.email`, `site.phoneDisplay`, `site.address`, `site.hours` |
| Pre-filled WhatsApp message       | `site.whatsappMessage`                   |
| Portfolio images and captions     | the `portfolio` array                    |
| Which images appear on the homepage | set `featured: true` on portfolio items |
| Service descriptions              | the `services` array                     |

### Replacing placeholder images with real photos

1. Put photos in the `public/portfolio/` folder (e.g. `public/portfolio/shirt-1.jpg`).
2. In `lib/site.ts`, change the item's `image` to `"/portfolio/shirt-1.jpg"`.

That's it — no code changes needed anywhere else.

### Hiding the map

Set `site.address` to `""` in `lib/site.ts` and both the map and the address
line disappear automatically.

## Contact form

The form opens WhatsApp with the visitor's details pre-filled (no server
needed). If email delivery is preferred later, swap `handleSubmit` in
`components/ContactForm.tsx` for an API route using
[Resend](https://resend.com).

## Pages

- `/` — hero, featured work, services overview, her story
- `/portfolio` — filterable gallery with lightbox and per-design WhatsApp inquiry
- `/services` — the four services in detail
- `/contact` — contact form, details, opening hours, map
