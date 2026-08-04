'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import VenueDecorGallery from '@/components/VenueDecorGallery';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PhotoVideographyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header with Background Photo */}
      <PageHero
        badge="PHOTO & VIDEOGRAPHY"
        title="Cinematic Visual Storytelling"
        subtitle="Immortalize your special occasions with 4K cinematic films, aerial drone photography, pre-wedding lifestyle portraits, and instant photo keepsakes."
        bgImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=90"
        ctaText="Book Media Crew"
        ctaHref="/contact"
      />

      {/* Two-Column Photo & Videography Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photographer Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-black">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=90"
                alt="Professional event photographer capturing cinematic moments"
                className="w-full h-[580px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Photo & Videography Brand Text Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 mb-8 tracking-tight">
              Photo &amp; Videography
            </h2>

            <div className="space-y-6 text-purple-950/80 font-sans text-base md:text-lg leading-relaxed font-normal">
              <p>
                Chazing Purple offers state-of-the-art photo and videography services that capture the raw emotion, beauty, and grandeur of your special occasions. Our cinematic media team specializes in documenting weddings, staycations, corporate offsites, and private celebrations across our scenic farmhouse estates.
              </p>

              <p>
                Immortalize your cherished moments with 4K resolution event highlight films, aerial drone photography, and artistic portraiture. Our filmmakers blend seamlessly into your event, capturing authentic candid laughter, starlit bonfire conversations, and unscripted joy.
              </p>

              <p>
                Take advantage of our lush 1-acre estate backdrops, Chettinad heritage architecture, infinity pools, and ambient night lighting for pre-wedding lifestyle shoots, fashion portraiture, and brand campaigns.
              </p>

              <p>
                Elevate guest entertainment with instant photo booths, custom branded backdrops, and live photo printing stations, allowing your guests to carry home physical keepsakes from your celebration.
              </p>

              <p>
                At Chazing Purple, we transform fleeting moments into timeless visual heirlooms that you will cherish forever. Contact our media concierge today to book complete photo and videography coverage for your upcoming event.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 shadow-xl transition-all"
              >
                <span>Book Media Coverage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4-Image Decor Photo Gallery */}
      <VenueDecorGallery />

      <Footer />
    </main>
  );
}
