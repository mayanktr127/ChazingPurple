'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  bgImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  bgImage,
  ctaText,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center brightness-105 scale-100 transition-transform duration-[7000ms] ease-out"
        />
        {/* Scrim Overlay ensuring both photo & text are clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/50" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 text-purple-200 text-xs md:text-sm uppercase tracking-widest border border-white/20 mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span>{badge}</span>
        </div>

        {/* Page Title */}
        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg md:text-xl text-purple-100/90 font-light max-w-2xl mb-8 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {subtitle}
        </p>

        {/* Optional Action CTA */}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white bg-black/30 hover:bg-white hover:text-black text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
