'use client';

import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "DREAMDAY made our Lake Como wedding feel like a dream straight out of a movie. Every detail was executed with unmatched precision and pure artistry.",
    couple: "Charlotte & Henry",
    location: "Villa d'Este, Lake Como",
    date: "Married May 2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote: "Working with the DREAMDAY team was the best decision we made for our wedding. Their vision for our floral design left all our guests speechless.",
    couple: "Victoria & William",
    location: "Biltmore Estate, NC",
    date: "Married June 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote: "From handling multi-day guest travel to spatial lighting, they took all the stress off our shoulders so we could truly savor every second.",
    couple: "Amara & Julian",
    location: "Napa Valley, CA",
    date: "Married October 2025",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#FAF8FC] via-purple-50/40 to-[#FAF8FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Words of Gratitude</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 tracking-tight leading-tight mb-4">
            Loved by Our Extraordinary Couples
          </h2>
          <p className="text-base md:text-lg text-purple-900/70 font-light">
            Read real stories from couples who entrusted their love story to DREAMDAY Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-purple-100 hover:border-purple-300 shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 relative"
            >
              <Quote className="w-10 h-10 text-purple-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm md:text-base text-purple-950/90 font-light italic leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-purple-100">
                <img
                  src={t.image}
                  alt={t.couple}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-serif-display text-lg font-bold text-purple-950">
                    {t.couple}
                  </h4>
                  <p className="text-xs font-medium text-purple-700">
                    {t.location}
                  </p>
                  <span className="text-[11px] text-purple-900/60 font-light">
                    {t.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
