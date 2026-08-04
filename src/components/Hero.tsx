'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  fallbackImage: string;
  link: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'gruham',
    title: 'GRUHAM',
    subtitle: 'Luxury Meets Warmth, Comfort & Celebration',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=95',
    fallbackImage: '/images/destinations/gruham-4.jpeg',
    link: '/destinations#gruham',
  },
  {
    id: 'blue-lagoon',
    title: 'BLUE LAGOON',
    subtitle: 'Dive into Luxury, Surrounded by Serenity.',
    image: '/images/destinations/blue-lagoon-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#blue-lagoon',
  },
  {
    id: 'prana',
    title: 'PRANA',
    subtitle: 'Where Every Corner Echoes Warmth and Harmony.',
    image: '/images/destinations/prana-1.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#prana',
  },
  {
    id: 'namma-mane',
    title: 'NAMMA MANE',
    subtitle: 'Where Every Stay Feels Like Coming Home',
    image: '/images/destinations/namma-mane-2.png',
    fallbackImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#namma-mane',
  },
  {
    id: 'whispering-woods',
    title: 'WHISPERING WOODS',
    subtitle: 'Retreat. Relax. Rejoice. Only at Whispering Woods',
    image: '/images/gallery/01-scaled.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#whispering-woods',
  },
  {
    id: 'blue-valley',
    title: 'LA ROMA VISTA',
    subtitle: 'Escape. Elevate. Experience the Valley Vibes',
    image: '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#la-roma-vista',
  },
  {
    id: 'mi-casa',
    title: 'MI CASA',
    subtitle: 'Your Private Oasis of Hospitality & Peace',
    image: '/images/destinations/mi-casa-01-scaled.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#mi-casa',
  },
  {
    id: 'abhishta-farm',
    title: 'ABHISHTA FARM',
    subtitle: 'Verdant Green Lawns & Organic Country Retreat',
    image: '/images/destinations/abhista-farm-2-1-e1709633089111.png',
    fallbackImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=95',
    link: '/destinations#abhishta-farm',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed House Background Images matching chazingpurple.com */}
      {heroSlides.map((slide, index) => {
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
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-[5000ms] ease-out brightness-105 contrast-[1.02]"
            />
            {/* Soft transparent overlay for text contrast matching original site */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          </div>
        );
      })}

      {/* Hero Content Overlay matching original chazingpurple.com layout */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center pt-16">
        
        {/* House Title — Bold Sans-Serif Typography matching Image 2 */}
        <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-7xl uppercase tracking-wider text-white mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {currentSlide.title}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white font-medium tracking-normal mb-8 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {currentSlide.subtitle}
        </p>

        {/* Outlined "Click Here" Button matching Image 2 screenshot */}
        <Link
          href={currentSlide.link}
          className="inline-flex items-center justify-center px-8 py-2.5 border-2 border-white bg-black/30 hover:bg-white hover:text-black text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg"
        >
          Click Here
        </Link>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous house"
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 z-30 p-2 text-white hover:text-purple-300 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next house"
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 z-30 p-2 text-white hover:text-purple-300 transition-colors"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" />
      </button>

      {/* Bottom Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to ${slide.title}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
