'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PortraitPhotoGroup {
  id: string;
  title: string;
  photos: string[];
}

export default function DestinationPortraitCarousel() {
  const photoGroups: PortraitPhotoGroup[] = [
    {
      id: '1',
      title: 'Blue Lagoon Resort Pool & Facade',
      photos: [
        '/images/destinations/blue-lagoon-1.jpg',
        '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
        '/images/destinations/mi-casa-01-scaled.jpg',
        '/images/destinations/prana-1.jpeg',
      ],
    },
    {
      id: '2',
      title: 'Pool Deck Overlooking Hills',
      photos: [
        '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
        '/images/destinations/gruham-4.jpeg',
        '/images/destinations/namma-mane-2.png',
        '/images/destinations/blue-lagoon-1.jpg',
      ],
    },
    {
      id: '3',
      title: 'Balustrade Mountain View Deck',
      photos: [
        '/images/destinations/mi-casa-01-scaled.jpg',
        '/images/destinations/prana-1.jpeg',
        '/images/destinations/abhista-farm-2-1-e1709633089111.png',
        '/images/gallery/01-scaled.jpg',
      ],
    },
    {
      id: '4',
      title: 'Garden Lawn Seating & Swing Chairs',
      photos: [
        '/images/destinations/prana-1.jpeg',
        '/images/destinations/blue-lagoon-1.jpg',
        '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
        '/images/destinations/gruham-4.jpeg',
      ],
    },
  ];

  const [activeIndexes, setActiveIndexes] = useState<{ [key: string]: number }>({
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
  });

  const handlePrev = (id: string, total: number) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + total) % total,
    }));
  };

  const handleNext = (id: string, total: number) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % total,
    }));
  };

  return (
    <section className="py-16 bg-[#FAF8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Portrait Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {photoGroups.map((group) => {
            const currentIndex = activeIndexes[group.id] || 0;
            const currentImg = group.photos[currentIndex];

            return (
              <div
                key={group.id}
                className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-purple-100/80 bg-black group transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={currentImg}
                  alt={group.title}
                  className="w-full h-full object-cover transition-all duration-700 brightness-95 group-hover:scale-105"
                />

                {/* Left Toggle Button (←) matching screenshot */}
                <button
                  onClick={() => handlePrev(group.id, group.photos.length)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all border border-white/20 hover:scale-110"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>

                {/* Right Toggle Button (→) matching screenshot */}
                <button
                  onClick={() => handleNext(group.id, group.photos.length)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all border border-white/20 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                {/* Counter Pill Badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                  {currentIndex + 1} / {group.photos.length}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
