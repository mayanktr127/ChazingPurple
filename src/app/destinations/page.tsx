'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Camera } from 'lucide-react';

interface DestinationCardData {
  id: string;
  name: string;
  acresLabel: string;
  sqftLabel: string;
  person: string;
  images: string[];
}

const destinationsList: DestinationCardData[] = [
  {
    id: 'blue-valley',
    name: 'Blue Valley Experience',
    acresLabel: '30 Acre',
    sqftLabel: '1,306,800 Sq Ft',
    person: '43',
    images: [
      '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
      '/images/destinations/blue-lagoon-1.jpg',
      '/images/destinations/blue-lagoon-2.jpg',
      '/images/destinations/blue-lagoon-3.jpg',
    ],
  },
  {
    id: 'mi-casa',
    name: 'Mi casa Experience',
    acresLabel: '3 Acres',
    sqftLabel: '130,680 Sq Ft',
    person: '15',
    images: [
      '/images/destinations/mi-casa-01-scaled.jpg',
      '/images/destinations/mi-casa-02-scaled.jpg',
      '/images/destinations/mi-casa-03-scaled.jpg',
      '/images/destinations/mi-casa-04-scaled.jpg',
    ],
  },
  {
    id: 'gruham',
    name: 'Gruham Experience',
    acresLabel: '1 Acre',
    sqftLabel: '43,560 Sq Ft',
    person: '25',
    images: [
      '/images/destinations/gruham-4.jpeg',
      '/images/destinations/gruham-7.jpeg',
      '/images/destinations/gruham-9.jpeg',
      '/images/destinations/gruham-11.jpeg',
    ],
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Lagoon Experience',
    acresLabel: '5 Acres',
    sqftLabel: '217,800 Sq Ft',
    person: '12',
    images: [
      '/images/destinations/blue-lagoon-1.jpg',
      '/images/destinations/blue-lagoon-2.jpg',
      '/images/destinations/blue-lagoon-3.jpg',
      '/images/destinations/blue-lagoon-4.jpg',
    ],
  },
  {
    id: 'prana',
    name: 'Prana Experience',
    acresLabel: '4 Acres',
    sqftLabel: '174,240 Sq Ft',
    person: '30',
    images: [
      '/images/destinations/prana-1.jpeg',
      '/images/destinations/prana-2.jpeg',
      '/images/destinations/prana-3.jpeg',
      '/images/destinations/prana-4-e1709634356549.jpeg',
    ],
  },
  {
    id: 'namma-mane',
    name: 'Namma Mane Experience',
    acresLabel: '10k Sqft',
    sqftLabel: '10,000 Sq Ft',
    person: '15',
    images: [
      '/images/destinations/namma-mane-2.png',
      '/images/destinations/namma-mane-3.png',
      '/images/destinations/namma-mane-4.png',
      '/images/destinations/namma-mane-5.png',
    ],
  },
  {
    id: 'abhishta-farm',
    name: 'Abhishta farm Experience',
    acresLabel: '7 Acres',
    sqftLabel: '304,920 Sq Ft',
    person: '40',
    images: [
      '/images/destinations/abhista-farm-2-1-e1709633089111.png',
      '/images/destinations/abhista-farm-1-1-e1709633034706.png',
      '/images/destinations/abhista-farm-3-1-e1709633124552.png',
      '/images/destinations/abhista-farm-5-e1709633230108.png',
    ],
  },
  {
    id: 'whispering-woods',
    name: 'Whispering Woods',
    acresLabel: '1.5 acres',
    sqftLabel: '65,340 Sq Ft',
    person: '30',
    images: [
      '/images/gallery/01-scaled.jpg',
      '/images/gallery/03-scaled.jpg',
      '/images/gallery/04-scaled.jpg',
      '/images/gallery/campings.jpg',
    ],
  },
];

// Interactive Destination Card Component matching exact original website screenshot design + Unit Toggle
function DestinationCardItem({ dest, unitMode }: { dest: DestinationCardData; unitMode: 'acres' | 'sqft' }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideshowIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const mobileIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      mobileIntervalRef.current = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % dest.images.length);
      }, 3000);
    }

    return () => {
      if (mobileIntervalRef.current) clearInterval(mobileIntervalRef.current);
    };
  }, [dest.images.length]);

  const handleMouseEnter = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);

    hoverTimerRef.current = setTimeout(() => {
      slideshowIntervalRef.current = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % dest.images.length);
      }, 2500);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);
  };

  const displayArea = unitMode === 'acres' ? dest.acresLabel : dest.sqftLabel;

  return (
    <Link
      href={`/destinations/${dest.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/80 flex flex-col justify-between"
    >
      <div>
        {/* Soft Diffusion Stacked Image Container */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#1E1625]">
          {dest.images.map((imgUrl, idx) => {
            const isActive = currentImgIndex === idx;
            return (
              <img
                key={idx}
                src={imgUrl}
                alt={`${dest.name} photo ${idx + 1}`}
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
            <span>{dest.images.length}</span>
          </div>

          {/* Diffusion Progress Dots */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 z-20">
            {dest.images.map((_, idx) => (
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
            {dest.name}
          </h3>
        </div>
      </div>

      {/* Area & Person Specs Box matching exact original website screenshot design + Unit Switcher */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="bg-[#FAF4ED] rounded-lg px-4 sm:px-5 py-3 flex items-center justify-between text-xs sm:text-sm text-purple-950 font-sans border border-[#F3E8DC]">
          <div>
            <span className="text-purple-900/60 font-light">Area: </span>
            <span className="font-bold">{displayArea}</span>
          </div>
          <div>
            <span className="text-purple-900/60 font-light">Person: </span>
            <span className="font-bold">{dest.person}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DestinationsPage() {
  const [unitMode, setUnitMode] = useState<'acres' | 'sqft'>('acres');

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge="TOP DESTINATIONS"
        title="Top Destinations"
        subtitle="Explore our curated collection of luxury farmhouses, private villas, and retreat estates."
        bgImage="/images/destinations/blue-lagoon-1.jpg"
      />

      {/* Unit Switcher Toggle (Acres / Square Feet) */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-end">
        <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-purple-200/80 shadow-md">
          <button
            onClick={() => setUnitMode('acres')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              unitMode === 'acres'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'text-purple-900/70 hover:text-purple-950'
            }`}
          >
            Acres
          </button>
          <button
            onClick={() => setUnitMode('sqft')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              unitMode === 'sqft'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'text-purple-900/70 hover:text-purple-950'
            }`}
          >
            Square Feet
          </button>
        </div>
      </section>

      {/* Responsive Destinations Grid */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinationsList.map((dest) => (
            <DestinationCardItem key={dest.id} dest={dest} unitMode={unitMode} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
