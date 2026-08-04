'use client';

import React, { useRef } from 'react';
import { Share2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Advisor {
  name: string;
  role: string;
  image: string;
}

const advisors: Advisor[] = [
  {
    name: 'David Hardson',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Fred Andrew',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Jessica Brown',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Event Concierge',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Michael Reed',
    role: 'Luxury Villa Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

export default function RetreatAdvisorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#FAF8FC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Scroll Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center sm:text-left">
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 tracking-tight">
              Meet our best Retreat Advisors
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-purple-100 shadow-md text-purple-950 hover:bg-purple-900 hover:text-white transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-purple-100 shadow-md text-purple-950 hover:bg-purple-900 hover:text-white transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Container matching screenshot */}
        <div
          ref={scrollRef}
          className="flex items-center gap-8 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {advisors.map((advisor, idx) => (
            <div
              key={idx}
              className="shrink-0 w-80 snap-start rounded-3xl bg-white border border-purple-100/80 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Advisor Photo with Pink Share Button */}
              <div className="relative h-80 rounded-2xl overflow-hidden mb-5 bg-purple-950">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Pink Share Icon Button on bottom-right matching screenshot */}
                <button
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-[#C026D3] text-white flex items-center justify-center shadow-md hover:bg-purple-900 transition-colors"
                  aria-label={`Share profile of ${advisor.name}`}
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Centered Name and Role */}
              <div className="text-center">
                <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-1">
                  {advisor.name}
                </h3>
                <p className="text-xs font-semibold text-purple-900/60 uppercase tracking-widest">
                  {advisor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
