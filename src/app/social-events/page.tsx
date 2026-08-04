'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import VenueDecorGallery from '@/components/VenueDecorGallery';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SocialEventsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header with Background Photo */}
      <PageHero
        badge="SOCIAL EVENTS & GATHERINGS"
        title="Host Vibrant Social Gatherings"
        subtitle="Bring friends and family together for reunions, cocktail galas, sundowners, and milestone social events in private luxury retreat settings."
        bgImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=90"
        ctaText="Plan Social Event"
        ctaHref="/contact"
      />

      {/* Two-Column Social Events Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Social Event Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-black">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=90"
                alt="Social gathering cocktail gala dinner"
                className="w-full h-[580px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Social Events Brand Text Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 mb-8 tracking-tight">
              Social Events
            </h2>

            <div className="space-y-6 text-purple-950/80 font-sans text-base md:text-lg leading-relaxed font-normal">
              <p>
                Chazing Purple presents exclusive private venues for all your social gatherings, from intimate family reunions and milestone anniversaries to sundowner pool galas and festive alumni meets. Our sprawling farmhouse estates offer complete privacy, luxurious comfort, and customizable event spaces.
              </p>

              <p>
                Gather your loved ones in a warm, welcoming environment surrounded by verdant green lawns, cozy outdoor seating, and starlit evening skies. Whether hosting a small dinner of 10 or a grand gathering of 150 guests, our versatile venues accommodate every social occasion.
              </p>

              <p>
                Delight your guests with live barbecue culinary experiences, crackling bonfire setups, open-air cinema projections, and custom cocktail mixology stations. Our hospitality team ensures flawless execution from guest welcome to late-night entertainment.
              </p>

              <p>
                Enjoy total freedom and privacy without noise curfews or crowded hotel lobbies. Our pet-friendly farmhouses ensure every family member, including your furry companions, enjoys a memorable getaway.
              </p>

              <p>
                Create unforgettable memories and celebrate life&apos;s special milestones with Chazing Purple. Choose our private retreat venues for your next social event and experience luxury, warmth, and hospitality at its finest. Contact us today to reserve your date.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 shadow-xl transition-all"
              >
                <span>Reserve Social Event Venue</span>
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
