'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface DestinationSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  fallbackImage: string;
  link: string;
}

const destinationSlides: DestinationSlide[] = [
  {
    id: 'blue-lagoon',
    title: 'BLUE LAGOON',
    subtitle: 'Dive into Luxury, Surrounded by Serenity.',
    image: '/images/destinations/blue-lagoon-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#blue-lagoon',
  },
  {
    id: 'gruham',
    title: 'GRUHAM',
    subtitle: 'Luxury Meets Warmth, Comfort & Celebration',
    image: '/images/destinations/gruham-4.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#gruham',
  },
  {
    id: 'prana',
    title: 'PRANA',
    subtitle: 'Where Every Corner Echoes Warmth and Harmony.',
    image: '/images/destinations/prana-1.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#prana',
  },
  {
    id: 'namma-mane',
    title: 'NAMMA MANE',
    subtitle: 'Where Every Stay Feels Like Coming Home',
    image: '/images/destinations/namma-mane-2.png',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#namma-mane',
  },
  {
    id: 'whispering-woods',
    title: 'WHISPERING WOODS',
    subtitle: 'Retreat. Relax. Rejoice. Only at Whispering Woods',
    image: '/images/gallery/01-scaled.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#whispering-woods',
  },
  {
    id: 'blue-valley',
    title: 'BLUE VALLEY (LA ROMA VISTA)',
    subtitle: 'Escape. Elevate. Experience the Valley Vibes',
    image: '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#la-roma-vista',
  },
  {
    id: 'mi-casa',
    title: 'MI CASA',
    subtitle: 'Your Private Oasis of Hospitality & Peace',
    image: '/images/destinations/mi-casa-01-scaled.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#mi-casa',
  },
  {
    id: 'abhishta-farm',
    title: 'ABHISHTA FARM',
    subtitle: 'Verdant Green Lawns & Organic Country Retreat',
    image: '/images/destinations/abhista-farm-2-1-e1709633089111.png',
    fallbackImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    link: '/destinations#abhishta-farm',
  },
];

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % destinationSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinationSlides.length) % destinationSlides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const currentSlide = destinationSlides[currentIndex];

  return (
    <section
      className="relative w-full h-[550px] md:h-[650px] overflow-hidden bg-black text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Background Images */}
      {destinationSlides.map((slide, index) => {
        const isActive = index === currentIndex;
        const imgUrl = imageErrorMap[slide.id] ? slide.fallbackImage : slide.image;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={imgUrl}
              alt={slide.title}
              onError={() => handleImageError(slide.id)}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[4500ms] ease-out"
            />
            {/* Scrim Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
          </div>
        );
      })}

      {/* Slide Content Overlay */}
      <div className="relative z-20 h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-purple-200 uppercase tracking-widest backdrop-blur-md border border-white/20 mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          <span>Top Destination Experience</span>
        </div>

        {/* Property Title */}
        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] transition-all duration-500">
          {currentSlide.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-purple-100/90 font-light max-w-2xl mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {currentSlide.subtitle}
        </p>

        {/* Outlined Action Button matching screenshot */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-none border-2 border-white text-white font-medium text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-xl uppercase tracking-wider backdrop-blur-xs"
        >
          Click Here
        </Link>
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous destination"
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next destination"
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {destinationSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-8 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
