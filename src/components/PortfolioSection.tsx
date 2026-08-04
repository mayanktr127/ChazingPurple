'use client';

import React, { useState } from 'react';
import { Sparkles, Maximize2, MapPin, Calendar, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Estates' | 'Coastal' | 'Vineyard' | 'Destination';
  location: string;
  date: string;
  image: string;
  description: string;
}

const portfolioData: GalleryItem[] = [
  {
    id: '1',
    title: 'Sophia & Alexander',
    category: 'Estates',
    location: 'Biltmore Estate, North Carolina',
    date: 'June 2025',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    description: 'A romantic black-tie celebration featuring a crystal pavilion reception, cascading orchids, and a 20-piece live orchestra.',
  },
  {
    id: '2',
    title: 'Elena & Lucas',
    category: 'Coastal',
    location: 'Big Sur Coast, California',
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    description: 'Cliffside ocean view ceremony followed by a candlelight candle-lit dinner under starlit coastal skies.',
  },
  {
    id: '3',
    title: 'Camille & Julien',
    category: 'Destination',
    location: 'Lake Como, Italy',
    date: 'May 2025',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
    description: 'Three-day Italian villa celebration complete with wooden Riva boat arrival, custom wine tasting, and fireworks over the lake.',
  },
  {
    id: '4',
    title: 'Isabella & Mateo',
    category: 'Vineyard',
    location: 'Napa Valley, California',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    description: 'An autumn harvest celebration among rolling vineyards with long wooden communal tables and artisanal pairing menus.',
  },
  {
    id: '5',
    title: 'Hannah & David',
    category: 'Estates',
    location: 'Hudson Valley, New York',
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    description: 'Sophisticated botanical glasshouse wedding featuring lush garden florals and custom neon art installations.',
  },
  {
    id: '6',
    title: 'Victoria & Oliver',
    category: 'Coastal',
    location: 'Montecito, California',
    date: 'July 2025',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
    description: 'Elegantly minimalist seaside nuptials with white rose archways, champagne towers, and acoustic soul music.',
  },
];

const categories = ['All', 'Estates', 'Coastal', 'Vineyard', 'Destination'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8FC] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selected Celebrations</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 tracking-tight leading-tight mb-4">
            Gallery of Unforgettable Moments
          </h2>
          <p className="text-base md:text-lg text-purple-900/70 font-light">
            Explore a curated selection of weddings designed, styled, and coordinated by DREAMDAY Studio.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-purple-900 text-white shadow-md shadow-purple-900/20'
                  : 'bg-white text-purple-950/70 hover:bg-purple-100 border border-purple-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-500 bg-white border border-purple-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 glass-card-dark px-3 py-1 rounded-full text-[11px] font-semibold text-purple-200 uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Card Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif-display text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-purple-200/90 font-light">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-purple-100">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-96">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-purple-100">
                <div>
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider block mb-1">
                    {selectedItem.category} Celebration
                  </span>
                  <h3 className="font-serif-display text-3xl font-bold text-purple-950">
                    {selectedItem.title}
                  </h3>
                </div>
                <div className="flex flex-col text-right text-xs text-purple-900/70">
                  <span className="flex items-center gap-1 justify-end font-medium text-purple-950">
                    <MapPin className="w-3.5 h-3.5 text-purple-600" />
                    {selectedItem.location}
                  </span>
                  <span className="flex items-center gap-1 justify-end mt-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    {selectedItem.date}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-purple-900/80 font-light leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-purple-900 hover:bg-purple-800 transition-colors"
                >
                  Close Gallery Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
