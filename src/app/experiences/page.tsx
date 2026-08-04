'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { ArrowRight, Film, Flame, UtensilsCrossed, Mic2, Music } from 'lucide-react';

export default function ExperiencesPage() {
  const scrapedExperiences = [
    {
      id: 'movie-screening',
      title: 'Movie Screening',
      desc: 'Open-air cinema screen setup under starlit skies with popcorn and cozy outdoor seating.',
      icon: Film,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'bonfire',
      title: 'Bonfire',
      desc: 'Crackling open-air campfire evenings with cozy lounge seats, acoustic music, and marshmallow roasts.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'barbecue',
      title: 'Barbecue',
      desc: 'Savory BBQ feasts grilled live by personal chefs or enjoyed with self-grill setups.',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'karaoke-nights',
      title: 'Karaoke Nights',
      desc: 'High-energy karaoke setups with professional microphones, stage lighting, and song playlists.',
      icon: Mic2,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'solo-performance',
      title: 'Solo Performance',
      desc: 'Intimate acoustic music performances, solo guitarists, and live ambient instrumentalists.',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header with Background Photo */}
      <PageHero
        badge="EXPERIENCES"
        title="Experiences"
        subtitle="Chazing Purple believes that every individual is unique and so are their experiences in life."
        bgImage="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=90"
      />

      {/* Scraped Experiences Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-purple-950 mb-3">
            Curated Retreat Experiences
          </h2>
          <p className="text-sm text-purple-900/70">
            Elevate your staycation or celebration at Chazing Purple with our signature outdoor and indoor experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scrapedExperiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/80 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#1E1625]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-purple-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-purple-100">
                      <IconComponent className="w-4 h-4 text-[#C026D3]" />
                      <span>{exp.title}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-purple-900/70 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#C026D3] bg-purple-50 hover:bg-purple-900 hover:text-white transition-all border border-purple-100"
                  >
                    <span>Add to Staycation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
