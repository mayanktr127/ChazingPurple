'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Sparkles, X, Play } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'Prana' | 'Gruham' | 'Blue Lagoon' | 'Abhishta Farm' | 'Mi Casa' | 'Namma Mane' | 'La Roma Vista' | 'Weddings';
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    category: 'Blue Lagoon',
    title: 'Blue Lagoon Resort Swimming Pool & Lawns',
    type: 'image',
    url: '/images/destinations/blue-lagoon-1.jpg',
  },
  {
    id: '2',
    category: 'Gruham',
    title: 'Gruham Chettinad Heritage Villa & Courtyard',
    type: 'image',
    url: '/images/destinations/gruham-4.jpeg',
  },
  {
    id: '3',
    category: 'Prana',
    title: 'Prana Wellness Sanctuary & Infinity Deck',
    type: 'image',
    url: '/images/destinations/prana-1.jpeg',
  },
  {
    id: '4',
    category: 'Namma Mane',
    title: 'Namma Mane Traditional Homestay',
    type: 'image',
    url: '/images/destinations/namma-mane-2.png',
  },
  {
    id: '5',
    category: 'Weddings',
    title: 'Bespoke Wedding Mandap & Floral Decor',
    type: 'image',
    url: '/images/experiences/wedding.jpg',
  },
  {
    id: '6',
    category: 'Abhishta Farm',
    title: 'Abhishta Farm Organic Lawns & Event Stage',
    type: 'image',
    url: '/images/destinations/abhista-farm-2-1-e1709633089111.png',
  },
  {
    id: '7',
    category: 'La Roma Vista',
    title: 'La Roma Vista Valley View Deck',
    type: 'image',
    url: '/images/destinations/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
  },
  {
    id: '8',
    category: 'Mi Casa',
    title: 'Mi Casa Private Poolside Oasis',
    type: 'image',
    url: '/images/destinations/mi-casa-01-scaled.jpg',
  },
  {
    id: '9',
    category: 'Weddings',
    title: 'Sangeet Night Lighting & Canopy',
    type: 'image',
    url: '/images/experiences/wedding1.jpg',
  },
  {
    id: '10',
    category: 'Gruham',
    title: 'Gruham Night Illumination & Garden Lights',
    type: 'image',
    url: '/images/destinations/gruham-11.jpeg',
  },
  {
    id: '11',
    category: 'Weddings',
    title: 'Cinematic Wedding Highlight Film',
    type: 'video',
    url: 'https://www.chazingpurple.com/wp-content/uploads/2024/02/Wedding-1.mp4',
    thumbnail: '/images/experiences/wedding.jpg',
  },
  {
    id: '12',
    category: 'Prana',
    title: 'Prana Retreat Walkthrough Video',
    type: 'video',
    url: 'https://www.chazingpurple.com/wp-content/uploads/2024/02/Wedding-1.mp4',
    thumbnail: '/images/destinations/prana-1.jpeg',
  },
];

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Prana', 'Gruham', 'Blue Lagoon', 'Abhishta Farm', 'Mi Casa', 'Namma Mane', 'Weddings'];

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge="CURATED PORTFOLIO"
        title="Visual Memories & Estate Gallery"
        subtitle="Step inside Chazing Purple retreats. Explore high-resolution captures of our luxury farmhouses, poolside lawns, and celebration decor."
        bgImage="/images/destinations/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg"
      />

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-purple-950 text-white shadow-md scale-105'
                  : 'bg-white text-purple-950/80 hover:bg-purple-100/70 border border-purple-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-purple-100 bg-white cursor-pointer h-72"
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Video Play Button Icon if Video */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white stroke-none ml-1" />
                  </div>
                </div>
              )}

              {/* Media Title & Tag */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C026D3]/80 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-lg font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-transparent rounded-2xl overflow-hidden flex flex-col items-center">
            {activeMedia.type === 'video' ? (
              <video
                src={activeMedia.url}
                controls
                autoPlay
                className="max-h-[75vh] w-full rounded-2xl object-contain shadow-2xl"
              />
            ) : (
              <img
                src={activeMedia.url}
                alt={activeMedia.title}
                className="max-h-[75vh] w-full rounded-2xl object-contain shadow-2xl"
              />
            )}
            <h3 className="text-white font-serif-display text-xl font-bold mt-4 text-center">
              {activeMedia.title}
            </h3>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
