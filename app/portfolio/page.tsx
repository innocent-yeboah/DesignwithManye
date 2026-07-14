import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse thirty years of custom printing — shirts, books, souvenirs and funeral memorabilia, all crafted with care.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-burgundy-dark py-16 text-center text-cream">
        <div className="container-site">
          <span className="section-kicker">Our work</span>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            A selection of pieces from thirty years of printing. Tap any image
            to enlarge it, or message us directly about a design you love.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site">
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}
