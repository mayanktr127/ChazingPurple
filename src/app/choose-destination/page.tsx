'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Sparkles, MapPin, Users, Check, ArrowRight, Filter, RefreshCw, Star } from 'lucide-react';

interface DestinationProperty {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: string;
  guestCapacity: string;
  capacityRange: '2-10' | '10-30' | '30-100' | '100+';
  suitableFor: string[];
  amenities: string[];
  description: string;
}

const propertiesList: DestinationProperty[] = [
  {
    id: 'blue-lagoon',
    name: 'BLUE LAGOON',
    tagline: 'Dive into Luxury, Surrounded by Serenity.',
    image: '/images/destinations/blue-lagoon-1.jpg',
    price: '₹22,000 / night',
    guestCapacity: 'Up to 50 Guests',
    capacityRange: '30-100',
    suitableFor: ['Staycation', 'Party', 'Corporate Offsite'],
    amenities: ['Private Pool', 'Bonfire & BBQ', 'Outdoor Cinema', 'Sprawling Lawns'],
    description: 'An aquatic luxury paradise featuring a private resort pool, poolside barbecue counter, ambient night lighting, and air-conditioned suites.',
  },
  {
    id: 'gruham',
    name: 'GRUHAM',
    tagline: 'Luxury Meets Warmth, Comfort & Celebration',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    price: '₹15,000 / night',
    guestCapacity: 'Up to 30 Guests',
    capacityRange: '10-30',
    suitableFor: ['Staycation', 'Family Reunion', 'Party', 'Wedding'],
    amenities: ['Heritage Villa', 'Bonfire & BBQ', 'Outdoor Cinema', 'Sprawling Lawns'],
    description: 'Authentic Chettinad heritage villa set amidst 1-acre lush surroundings in Baglur, perfect for intimate weddings, staycations, and reunions.',
  },
  {
    id: 'prana',
    name: 'PRANA',
    tagline: 'Where Every Corner Echoes Warmth and Harmony.',
    image: '/images/destinations/prana-1.jpeg',
    price: '₹18,000 / night',
    guestCapacity: 'Up to 25 Guests',
    capacityRange: '10-30',
    suitableFor: ['Staycation', 'Corporate Offsite', 'Family Reunion'],
    amenities: ['Private Pool', 'Bonfire & BBQ', 'Sprawling Lawns'],
    description: 'Nestled in peaceful nature, Prana combines architectural elegance with wellness sanctuary vibes, infinity pool, and curated lighting.',
  },
  {
    id: 'namma-mane',
    name: 'NAMMA MANE',
    tagline: 'Where Every Stay Feels Like Coming Home',
    image: '/images/destinations/namma-mane-2.png',
    price: '₹12,000 / night',
    guestCapacity: 'Up to 15 Guests',
    capacityRange: '2-10',
    suitableFor: ['Staycation', 'Family Reunion'],
    amenities: ['Heritage Villa', 'Bonfire & BBQ'],
    description: 'A cozy, nostalgic home-style retreat for family get-togethers, traditional courtyard living, and relaxed weekend staycations.',
  },
  {
    id: 'whispering-woods',
    name: 'WHISPERING WOODS',
    tagline: 'Retreat. Relax. Rejoice. Only at Whispering Woods',
    image: '/images/gallery/01-scaled.jpg',
    price: '₹16,000 / night',
    guestCapacity: 'Up to 40 Guests',
    capacityRange: '30-100',
    suitableFor: ['Corporate Offsite', 'Party', 'Staycation'],
    amenities: ['Outdoor Cinema', 'Bonfire & BBQ', 'Sprawling Lawns'],
    description: 'Surrounded by lush forest canopy, Whispering Woods offers outdoor screening setups, live cooking stations, and secluded party spots.',
  },
  {
    id: 'la-roma-vista',
    name: 'LA ROMA VISTA (BLUE VALLEY)',
    tagline: 'Escape. Elevate. Experience the Valley Vibes',
    image: '/images/destinations/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
    price: '₹20,000 / night',
    guestCapacity: 'Up to 35 Guests',
    capacityRange: '30-100',
    suitableFor: ['Corporate Offsite', 'Party', 'Staycation'],
    amenities: ['Private Pool', 'Sprawling Lawns', 'Bonfire & BBQ'],
    description: 'Perched on scenic valley hillsides with panoramic views, private pool deck, indoor game room, and sunset party spaces.',
  },
  {
    id: 'mi-casa',
    name: 'MI CASA',
    tagline: 'Your Private Oasis of Hospitality & Peace',
    image: '/images/destinations/mi-casa-01-scaled.jpg',
    price: '₹14,000 / night',
    guestCapacity: 'Up to 12 Guests',
    capacityRange: '2-10',
    suitableFor: ['Staycation', 'Family Reunion'],
    amenities: ['Private Pool', 'Heritage Villa'],
    description: 'Private poolside villa for intimate family get-togethers and peaceful weekend relaxation.',
  },
  {
    id: 'abhishta-farm',
    name: 'ABHISHTA FARM',
    tagline: 'Verdant Green Lawns & Organic Country Retreat',
    image: '/images/destinations/abhista-farm-2-1-e1709633089111.png',
    price: '₹25,000 / night',
    guestCapacity: 'Up to 150 Guests',
    capacityRange: '100+',
    suitableFor: ['Wedding', 'Party', 'Corporate Offsite'],
    amenities: ['Sprawling Lawns', 'Outdoor Cinema', 'Bonfire & BBQ'],
    description: 'Expansive farm lawn estate tailored for large wedding receptions, corporate offsites, and festive gala events.',
  },
];

export default function ChooseDestinationPage() {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('All');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('All');
  const [selectedAmenity, setSelectedAmenity] = useState<string>('All');

  const filteredProperties = propertiesList.filter((prop) => {
    const matchOccasion = selectedOccasion === 'All' || prop.suitableFor.includes(selectedOccasion);
    const matchCapacity = selectedCapacity === 'All' || prop.capacityRange === selectedCapacity;
    const matchAmenity = selectedAmenity === 'All' || prop.amenities.includes(selectedAmenity);
    return matchOccasion && matchCapacity && matchAmenity;
  });

  const resetFilters = () => {
    setSelectedOccasion('All');
    setSelectedCapacity('All');
    setSelectedAmenity('All');
  };

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-950 via-purple-900 to-[#120E16] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-800/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Property Finder</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Choose Your Destination
          </h1>
          <p className="text-purple-200/80 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Select your event occasion, guest size, and desired features to find the perfect Chazing Purple retreat villa.
          </p>
        </div>
      </section>

      {/* Interactive Filter Control Panel */}
      <section className="py-10 max-w-7xl mx-auto px-6 md:px-12 relative z-20 -mt-8">
        <div className="glass-card rounded-3xl p-6 md:p-8 border border-purple-100 bg-white shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-100">
            <div className="flex items-center gap-2 text-purple-950 font-bold text-sm uppercase tracking-wider">
              <Filter className="w-4 h-4 text-purple-600" />
              <span>Filter Destinations</span>
            </div>
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-purple-600 hover:text-purple-900 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Occasion Filter */}
            <div>
              <label className="block text-xs font-semibold text-purple-950 uppercase tracking-wider mb-2">
                Event Occasion
              </label>
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-purple-50/60 border border-purple-200 text-purple-950 text-xs font-medium focus:outline-none focus:border-purple-600"
              >
                <option value="All">All Occasions</option>
                <option value="Staycation">Staycation &amp; Getaway</option>
                <option value="Party">Birthday / Party Bash</option>
                <option value="Corporate Offsite">Corporate Offsite</option>
                <option value="Wedding">Wedding Celebration</option>
                <option value="Family Reunion">Family Reunion</option>
              </select>
            </div>

            {/* Guest Capacity Filter */}
            <div>
              <label className="block text-xs font-semibold text-purple-950 uppercase tracking-wider mb-2">
                Guest Capacity
              </label>
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-purple-50/60 border border-purple-200 text-purple-950 text-xs font-medium focus:outline-none focus:border-purple-600"
              >
                <option value="All">Any Guest Count</option>
                <option value="2-10">Intimate (2 - 10 Guests)</option>
                <option value="10-30">Medium (10 - 30 Guests)</option>
                <option value="30-100">Large (30 - 100 Guests)</option>
                <option value="100+">Grand (100+ Guests)</option>
              </select>
            </div>

            {/* Amenity Feature Filter */}
            <div>
              <label className="block text-xs font-semibold text-purple-950 uppercase tracking-wider mb-2">
                Key Feature / Amenity
              </label>
              <select
                value={selectedAmenity}
                onChange={(e) => setSelectedAmenity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-purple-50/60 border border-purple-200 text-purple-950 text-xs font-medium focus:outline-none focus:border-purple-600"
              >
                <option value="All">All Amenities</option>
                <option value="Private Pool">Private Pool</option>
                <option value="Bonfire & BBQ">Bonfire &amp; BBQ Rigs</option>
                <option value="Outdoor Cinema">Open Air Cinema</option>
                <option value="Sprawling Lawns">Sprawling Lawns</option>
                <option value="Heritage Villa">Heritage Villa Architecture</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Destinations Grid Results */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-purple-950">
            Matching Destinations ({filteredProperties.length})
          </h2>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-3xl p-8 bg-white border border-purple-100">
            <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-2">
              No matching destinations found
            </h3>
            <p className="text-sm text-purple-900/70 mb-6">
              Try adjusting your filter preferences or click reset to view all Chazing Purple properties.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-purple-900 hover:bg-purple-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 glass-card-dark px-3 py-1 rounded-full text-[11px] font-semibold text-purple-200 uppercase tracking-wider">
                      {prop.price}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-purple-300" />
                      <span>{prop.guestCapacity}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-1">
                      {prop.name}
                    </h3>
                    <p className="text-xs font-medium text-purple-700 mb-3 italic">
                      &ldquo;{prop.tagline}&rdquo;
                    </p>
                    <p className="text-sm text-purple-900/70 font-light leading-relaxed mb-4">
                      {prop.description}
                    </p>

                    <div className="space-y-1.5 pt-4 border-t border-purple-100 mb-4">
                      {prop.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-purple-900/80">
                          <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 shadow-md transition-all duration-300"
                  >
                    <span>Inquire for Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
