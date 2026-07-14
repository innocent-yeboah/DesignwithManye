"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

export interface HeroSlide {
  src: string;
  alt: string;
}

const INTERVAL_MS = 4800;
const TRANSITION_MS = 1200;

type TransitionKind = "fade" | "zoom" | "wipe-left" | "wipe-up" | "soft-blur";

const TRANSITIONS: TransitionKind[] = [
  "fade",
  "zoom",
  "wipe-left",
  "wipe-up",
  "soft-blur",
];

function pickRandomIndex(length: number, exclude: number): number {
  if (length <= 1) return 0;
  let next = exclude;
  while (next === exclude) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

function pickRandomTransition(): TransitionKind {
  return TRANSITIONS[Math.floor(Math.random() * TRANSITIONS.length)];
}

/**
 * Full-bleed hero media screen — cycles randomly through work photos
 * with marketing-display style transitions (fade, zoom, wipe, soft-blur).
 */
export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transition, setTransition] = useState<TransitionKind>("fade");
  const [tick, setTick] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const advance = useCallback(
    (next: number, kind?: TransitionKind) => {
      setActive((current) => {
        if (next === current) return current;
        setPrev(current);
        setTransition(kind ?? pickRandomTransition());
        setTick((value) => value + 1);
        return next;
      });
    },
    []
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const timer = window.setTimeout(() => setPrev(null), TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [prev, tick]);

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => {
        const next = pickRandomIndex(slides.length, current);
        setPrev(current);
        setTransition(pickRandomTransition());
        setTick((value) => value + 1);
        return next;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  const labels = useMemo(
    () => slides.map((slide, index) => `Show image ${index + 1}: ${slide.alt}`),
    [slides]
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === active;
        const isPrev = index === prev;
        const show = isActive || isPrev;

        let motionClass = "opacity-0";
        if (isActive && prev === null) {
          motionClass = "opacity-100 scale-100";
        } else if (isActive && prev !== null) {
          motionClass = `hero-enter hero-enter-${transition}`;
        } else if (isPrev) {
          motionClass = `hero-exit hero-exit-${transition}`;
        }

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 ${
              show ? "z-[1] visible" : "z-0 invisible pointer-events-none"
            }`}
          >
            <div
              key={isActive ? `in-${tick}` : isPrev ? `out-${tick}` : "rest"}
              className={`absolute inset-0 ${motionClass}`}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover ${
                  isActive && !reduceMotion ? "hero-ken-burns" : ""
                }`}
              />
            </div>
          </div>
        );
      })}

      {/* Soft edge shade only — keeps photos clear in the center */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/35 via-transparent to-black/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-burgundy-dark/15"
        aria-hidden="true"
      />
    </div>
  );
}
