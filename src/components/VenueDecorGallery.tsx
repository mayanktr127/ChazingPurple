'use client';

import React from 'react';

export default function VenueDecorGallery() {
  const decorPhotos = [
    {
      id: 'fairy-lights',
      title: 'Warm Canopy & Fairy Lights',
      image: '/images/experiences/wedding.jpg',
    },
    {
      title: 'Haldi Mandap Canopy',
      image: '/images/destinations/gruham-9.jpeg',
    },
    {
      title: 'Garden Haldi & Lawn Lounge',
      image: '/images/gallery/whatsapp-image-2024-07-10-at-2.36.15-pm.jpeg',
    },
    {
      title: 'Poolside Drapery & Villa Deck',
      image: '/images/destinations/blue-lagoon-1.jpg',
    },
  ];

  return (
    <section className="py-12 bg-[#FAF8FC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 4-Image Grid matching Image 3 screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {decorPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 bg-black"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold tracking-wider uppercase">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
