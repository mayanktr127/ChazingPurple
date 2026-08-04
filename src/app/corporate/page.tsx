'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Camera, ArrowRight, Sparkles, Building2, Wifi, Target, Users2 } from 'lucide-react';

interface CorporateRetreat {
  id: string;
  name: string;
  area: string;
  person: string;
  images: string[];
}

const corporateRetreats: CorporateRetreat[] = [
  {
    id: 'mi-casa',
    name: 'Mi casa Experience',
    area: '3 Acres',
    person: '15',
    images: [
      '/images/destinations/mi-casa-01-scaled.jpg',
      '/images/destinations/gruham-property.jpeg',
      '/images/destinations/mi-casa-02-scaled.jpg',
      '/images/destinations/mi-casa-03-scaled.jpg',
    ],
  },
  {
    id: 'gruham',
    name: 'Gruham Experience',
    area: '1 Acre',
    person: '25',
    images: [
      '/images/destinations/gruham-4.jpeg',
      '/images/destinations/gruham-property.jpeg',
      '/images/destinations/gruham-7.jpeg',
      '/images/destinations/gruham-9.jpeg',
    ],
  },
];

// Interactive Card Item Component matching exact original website screenshot design
function CorporateCardItem({ retreat }: { retreat: CorporateRetreat }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideshowIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const mobileIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      mobileIntervalRef.current = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % retreat.images.length);
      }, 3000);
    }

    return () => {
      if (mobileIntervalRef.current) clearInterval(mobileIntervalRef.current);
    };
  }, [retreat.images.length]);

  const handleMouseEnter = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);

    hoverTimerRef.current = setTimeout(() => {
      slideshowIntervalRef.current = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % retreat.images.length);
      }, 2500);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);
  };

  return (
    <Link
      href={`/destinations/${retreat.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/80 flex flex-col justify-between"
    >
      <div>
        {/* Soft Diffusion Stacked Container */}
        <div className="relative h-60 sm:h-64 overflow-hidden bg-[#1E1625]">
          {retreat.images.map((imgUrl, idx) => {
            const isActive = currentImgIndex === idx;
            return (
              <img
                key={idx}
                src={imgUrl}
                alt={`${retreat.name} photo ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 filter-none z-10 brightness-95'
                    : 'opacity-0 scale-105 blur-sm z-0'
                }`}
              />
            );
          })}

          {/* FEATURED Tag Top-Left */}
          <span className="absolute top-4 left-4 z-20 bg-[#2D1B4E]/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md">
            FEATURED
          </span>

          {/* Camera Icon Count Badge Bottom-Right */}
          <div className="absolute bottom-3 right-4 z-20 bg-white/95 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5 border border-gray-200">
            <Camera className="w-3.5 h-3.5 text-purple-700" />
            <span>{retreat.images.length}</span>
          </div>

          {/* Diffusion Progress Dots */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 z-20">
            {retreat.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  currentImgIndex === idx ? 'bg-white w-4 opacity-100' : 'bg-white/50 w-1.5 opacity-60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Property Title */}
        <div className="p-5 sm:p-6 pb-4">
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-purple-950 group-hover:text-[#C026D3] transition-colors">
            {retreat.name}
          </h3>
        </div>
      </div>

      {/* Area & Person Specs Box matching exact original website screenshot design */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="bg-[#FAF4ED] rounded-lg px-4 sm:px-5 py-3 flex items-center justify-between text-xs sm:text-sm text-purple-950 font-sans border border-[#F3E8DC]">
          <div>
            <span className="text-purple-900/60 font-light">Area: </span>
            <span className="font-bold">{retreat.area}</span>
          </div>
          <div>
            <span className="text-purple-900/60 font-light">Person: </span>
            <span className="font-bold">{retreat.person}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CorporatePage() {
  const corporateFeatureChunks = [
    {
      icon: Building2,
      title: 'Executive Offsites',
      desc: 'Private estate venues designed for leadership retreats, strategy sessions, and annual team summits.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Connectivity',
      desc: 'Equipped with reliable high-speed Wi-Fi, audio-visual projection setups, and presentation stages.',
    },
    {
      icon: Target,
      title: 'Team Building Activities',
      desc: 'Expansive green lawns for outdoor team-building games, sports, and collaborative workshops.',
    },
    {
      icon: Users2,
      title: 'Gala Dinners & Cocktails',
      desc: 'Poolside networking, live BBQ rigs, and custom catering menus executed by expert chefs.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge="CORPORATE EVENTS"
        title="Corporate Events"
        subtitle="Chazing Purple provides private luxury retreats for corporate offsites, team outings, and leadership summits."
        bgImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=90"
      />

      {/* Structured & Chunked Corporate Overview Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-purple-100 bg-black">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=90"
              alt="Corporate offsite retreat event by Chazing Purple"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#C026D3] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chazing Purple Corporate Retreats</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-purple-950">
              Elevate Your Team Offsite Experience
            </h2>

            <p className="text-purple-950/80 text-base sm:text-lg leading-relaxed font-normal">
              Re-energize your workforce in tranquil private farmhouses equipped with modern corporate facilities, open-air activity lawns, and premium hospitality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corporateFeatureChunks.map((chunk, idx) => {
                const IconComponent = chunk.icon;
                return (
                  <div key={idx} className="bg-[#FAF5FF] rounded-xl p-4 border border-purple-100/80 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#C026D3] flex items-center justify-center mb-2.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif-display text-base font-bold text-purple-950 mb-1">
                        {chunk.title}
                      </h4>
                      <p className="text-xs text-purple-900/70 leading-relaxed">
                        {chunk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 shadow-md transition-all"
              >
                <span>Book Corporate Retreat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Corporate Retreat Venues Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 border-t border-purple-100/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-purple-950 mb-3">
            Featured Corporate Retreats
          </h2>
          <p className="text-sm text-purple-900/70">
            Browse our executive corporate offsite venues in Bangalore with sprawling lawns, meeting spaces, and poolside dining.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {corporateRetreats.map((retreat) => (
            <CorporateCardItem key={retreat.id} retreat={retreat} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
