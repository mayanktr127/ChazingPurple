'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BentoCategory {
  id: string;
  title: string;
  href: string;
  image: string;
  colSpan: string;
  height: string;
}

export default function EventCategoriesBento() {
  return (
    <section className="py-20 bg-[#FAF8FC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Event Categories</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 tracking-tight leading-tight">
            Curated Experiences for Every Occasion
          </h2>
        </div>

        {/* Asymmetric Bento Grid matching user screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Feature Card — PARTIES (Tall Vertical) */}
          <div className="lg:col-span-4">
            <Link
              href="/parties"
              className="group relative block w-full h-[460px] lg:h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-500 border border-purple-100 bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85"
                alt="Parties and celebrations confetti"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <h3 className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-wider flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <span>PARTIES</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </Link>
          </div>

          {/* Right Grid Matrix (4 items: 2x2) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* CORPORATE EVENT */}
            <Link
              href="/corporate"
              className="group relative block h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-500 border border-purple-100 bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85"
                alt="Corporate event gala dinner"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <h3 className="font-sans font-bold text-lg md:text-xl uppercase tracking-wider flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <span>CORPORATE EVENT</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </Link>

            {/* WEDDINGS */}
            <Link
              href="/wedding"
              className="group relative block h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-500 border border-purple-100 bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                alt="Weddings celebration ceremony"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <h3 className="font-sans font-bold text-lg md:text-xl uppercase tracking-wider flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <span>WEDDINGS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </Link>

            {/* PHOTO & VIDEOGRAPHY */}
            <Link
              href="/photo-videography"
              className="group relative block h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-500 border border-purple-100 bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85"
                alt="Photo and videography photographer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <h3 className="font-sans font-bold text-lg md:text-xl uppercase tracking-wider flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <span>PHOTO &amp; VIDEOGRAPHY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </Link>

            {/* SOCIAL EVENTS */}
            <Link
              href="/social-events"
              className="group relative block h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-500 border border-purple-100 bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85"
                alt="Social events gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <h3 className="font-sans font-bold text-lg md:text-xl uppercase tracking-wider flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <span>SOCIAL EVENTS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
