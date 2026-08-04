'use client';

import React, { useState, use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ConsultationCTA from '@/components/ConsultationCTA';
import Link from 'next/link';
import { Users, Maximize2, MapPin, ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react';

interface DestinationData {
  id: string;
  name: string;
  subtitle: string;
  guests: string;
  sizeAcres: string;
  sizeSqft: string;
  view: string;
  location: string;
  images: string[];
  features: string[];
  overview: string[];
}

const destinationsData: Record<string, DestinationData> = {
  'blue-valley': {
    id: 'blue-valley',
    name: 'Blue Valley Experience',
    subtitle: 'Escape. Elevate. Experience the Valley Vibes',
    guests: '43 Person',
    sizeAcres: '30 Acre',
    sizeSqft: '1,306,800 Sq Ft',
    view: 'City, Ocean',
    location: 'Baglur, Hosur Road, Bangalore',
    images: [
      '/images/gallery/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
      '/images/destinations/blue-lagoon-1.jpg',
      '/images/destinations/blue-lagoon-2.jpg',
      '/images/destinations/blue-lagoon-3.jpg',
    ],
    features: [
      '10 Air-Conditioned Luxury AC Bedrooms',
      'Private Swimming Pool with Sun Deck',
      'Poolside Barbecue Rigs & Dining Deck',
      'Valley & Sunset View Party Lawns',
      'Indoor Game Room & Lounge',
      'Outdoor Cinema Screening Setup',
      'Pet-Friendly Green Lawns',
      'Full Housekeeping & Private Chef Services'
    ],
    overview: [
      'Nestled in the serene landscapes of Baglur, Le Roma Vista by Chazing Purple offers a picturesque setting for intimate weddings, family outings, and corporate day retreats. This luxury farmhouse exudes rustic elegance, providing a private villa experience for guests seeking an exclusive retreat.',
      'With ten air-conditioned luxury rooms and a private pool, Le Roma Vista is the perfect venue for hosting gatherings ranging from intimate family outings to grand corporate events.',
      'Our experienced in-house team ensures that every detail is tailored to perfection, from event planning to catering and decor, allowing guests to relax and indulge in bespoke experiences amidst the tranquil surroundings. Whether it’s a weekend getaway or a corporate gathering, Le Roma Vista promises premium accommodations, high-end amenities, and tailored hospitality to create unforgettable memories for all guests.'
    ]
  },
  'gruham': {
    id: 'gruham',
    name: 'Gruham Experience',
    subtitle: 'Luxury Meets Warmth, Comfort & Celebration',
    guests: '25 Person',
    sizeAcres: '1 Acre',
    sizeSqft: '43,560 Sq Ft',
    view: 'Lush Gardens',
    location: 'Jain Farms, Baglur, Hosur Road, Bangalore',
    images: [
      '/images/destinations/gruham-4.jpeg',
      '/images/destinations/gruham-7.jpeg',
      '/images/destinations/gruham-9.jpeg',
      '/images/destinations/gruham-11.jpeg',
    ],
    features: [
      'Chettinad Heritage Villa Architecture',
      '1-Acre Lush Surrounding Lawns',
      'Live BBQ Cooking Counter & Bonfire Zone',
      'Outdoor Movie Screening Area',
      'Karaoke & Sound System Setup',
      'Pet-Friendly Property with Tailored Pet Meals',
      'Wellness Retreats (Yoga & Meditation)',
      'Camping Tent Accommodation Options'
    ],
    overview: [
      'Welcome to Gruham, the ultimate destination for family, friends, or colleagues seeking a private retreat in Bangalore. Located within Jain Farms in Baglur, just 40 kilometers from MG Road on Hosur Road, our charming villa offers an exclusive escape from the ordinary.',
      'Set amidst lush 1-acre surroundings, Gruham is perfect for staycations, weekend getaways, family or friends get together, staycations, parties, and celebrations with loved ones, private music events, intimate weddings, and workshops.',
      'Experience the essence of Chettinad living at Gruham, where rustic charm meets modern amenities. Begin your evening with the tantalizing aroma of a live BBQ experience, crackling bonfires, outdoor movie screenings, karaoke sessions, and pet-friendly lawns.'
    ]
  },
  'prana': {
    id: 'prana',
    name: 'Prana Experience',
    subtitle: 'Where Every Corner Echoes Warmth and Harmony',
    guests: '30 Person',
    sizeAcres: '4 Acres',
    sizeSqft: '174,240 Sq Ft',
    view: 'Forest & Valley View',
    location: 'Manjalgiri, 60km from MG Road, Bangalore',
    images: [
      '/images/destinations/prana-1.jpeg',
      '/images/destinations/prana-2.jpeg',
      '/images/destinations/prana-3.jpeg',
      '/images/destinations/prana-4-e1709634356549.jpeg',
    ],
    features: [
      'Rustic 4-Bedroom Villa Sāttva',
      '3 Cozy Private Cottages (Dhī, Ida, Pingala)',
      'Amoeba-Style Swimming Pool with Jacuzzi',
      'Submerged Candlelight Dining Deck',
      'Forest Trekking & Nature Trails',
      'Camping Tent Setups for Outdoor Thrills',
      'Lush Green Gazebos & Starlit Bonfire',
      'Talented Chefs & Curated Regional Dining'
    ],
    overview: [
      'Nestled in the serene landscapes of Manjalgiri, just a 60kms drive from MG Road, Bangalore city, Prāṇa invites you to embark on a journey of tranquility and luxury. Set amidst sprawling 4-acre farmland, this rustic yet contemporary farmhouse offers a haven of serenity.',
      'With a charming rustic 4-bedroom villa named Sāttva, complemented by three cozy cottages – Dhī, Ida, and Pingala – Prāṇa seamlessly blends old-world charm with modern comforts.',
      'The property boasts an expansive amoeba-style pool with Jacuzzi, lush green lawns, live BBQ experiences, starlit bonfires, forest trekking adventures, and submerged candlelight dining.'
    ]
  },
  'blue-lagoon': {
    id: 'blue-lagoon',
    name: 'Blue Lagoon Experience',
    subtitle: 'Dive into Luxury, Surrounded by Serenity',
    guests: '12 Person',
    sizeAcres: '5 Acres',
    sizeSqft: '217,800 Sq Ft',
    view: 'Poolside Oasis',
    location: 'Off Hosur Road, Bangalore',
    images: [
      '/images/destinations/blue-lagoon-1.jpg',
      '/images/destinations/blue-lagoon-2.jpg',
      '/images/destinations/blue-lagoon-3.jpg',
      '/images/destinations/blue-lagoon-4.jpg',
    ],
    features: [
      'Large Private Resort Swimming Pool',
      'Poolside Barbecue Rigs & Bar Counter',
      'Ambient Evening Lighting Architecture',
      'Luxury Air-Conditioned Villa Suites',
      'Spacious Open Party Lawns',
      'High-Vibe Music & Audio Setup'
    ],
    overview: [
      'An aquatic luxury paradise featuring a private pool, poolside barbecue counter, ambient night lighting, and air-conditioned suites.',
      'Designed for high-vibe pool parties, birthday bashes, and corporate offsites with spacious pool deck loungers and chef-curated dining.'
    ]
  },
  'namma-mane': {
    id: 'namma-mane',
    name: 'Namma Mane Experience',
    subtitle: 'Where Every Stay Feels Like Coming Home',
    guests: '15 Person',
    sizeAcres: '10k Sqft',
    sizeSqft: '10,000 Sq Ft',
    view: 'Courtyard & Nature',
    location: 'Bangalore Outskirts',
    images: [
      '/images/destinations/namma-mane-2.png',
      '/images/destinations/namma-mane-3.png',
      '/images/destinations/namma-mane-4.png',
      '/images/destinations/namma-mane-5.png',
    ],
    features: [
      'Traditional Heritage Courtyard Living',
      'Cozy Home-Style Bedding & Interiors',
      'Pet-Friendly Green Garden Space',
      'Authentic Local Regional Dinners'
    ],
    overview: [
      'A cozy, nostalgic home-style retreat for family get-togethers, traditional courtyard living, and relaxed weekend staycations.'
    ]
  },
  'whispering-woods': {
    id: 'whispering-woods',
    name: 'Whispering Woods',
    subtitle: 'Retreat. Relax. Rejoice. Only at Whispering Woods',
    guests: '30 Person',
    sizeAcres: '1.5 acres',
    sizeSqft: '65,340 Sq Ft',
    view: 'Forest Canopy View',
    location: 'Near Bannerghatta, Bangalore',
    images: [
      '/images/gallery/01-scaled.jpg',
      '/images/gallery/03-scaled.jpg',
      '/images/gallery/04-scaled.jpg',
      '/images/gallery/campings.jpg',
    ],
    features: [
      'Surrounded by Lush Forest Canopy',
      'Outdoor Movie Projection Setup',
      'Live Cooking & Barbecue Stations',
      'Secluded Party & Camping Spot'
    ],
    overview: [
      'Surrounded by lush forest canopy, Whispering Woods offers outdoor screening setups, live cooking stations, and secluded party spots.',
      'Ideal for nature lovers, acoustic music nights, and peaceful stargazing retreats.'
    ]
  },
  'mi-casa': {
    id: 'mi-casa',
    name: 'Mi Casa Experience',
    subtitle: 'Your Private Oasis of Hospitality & Peace',
    guests: '15 Person',
    sizeAcres: '3 Acres',
    sizeSqft: '130,680 Sq Ft',
    view: 'Poolside Garden',
    location: 'Bangalore North',
    images: [
      '/images/destinations/mi-casa-01-scaled.jpg',
      '/images/destinations/mi-casa-02-scaled.jpg',
      '/images/destinations/mi-casa-03-scaled.jpg',
      '/images/destinations/mi-casa-04-scaled.jpg',
    ],
    features: [
      'Private Poolside Villa',
      'Intimate Dining Area',
      'Quiet Reading Nooks',
      'Personalized Housekeeping'
    ],
    overview: [
      'Private poolside villa for intimate family get-togethers, weekend relaxation, and personalized hospitality.'
    ]
  },
  'abhishta-farm': {
    id: 'abhishta-farm',
    name: 'Abhishta Farm Experience',
    subtitle: 'Verdant Green Lawns & Organic Country Retreat',
    guests: '40 Person',
    sizeAcres: '7 Acres',
    sizeSqft: '304,920 Sq Ft',
    view: 'Country Farm Lawn',
    location: 'Bangalore South',
    images: [
      '/images/destinations/abhista-farm-2-1-e1709633089111.png',
      '/images/destinations/abhista-farm-1-1-e1709633034706.png',
      '/images/destinations/abhista-farm-3-1-e1709633124552.png',
      '/images/destinations/abhista-farm-5-e1709633230108.png',
    ],
    features: [
      'Expansive 7-Acre Event Lawns',
      'Grand Wedding Stage & Mandap Zone',
      'Organic Country Farm Environment',
      'Camping Tent Setup'
    ],
    overview: [
      'Expansive farm lawn estate tailored for large wedding receptions, corporate offsites, and festive gala events.'
    ]
  }
};

export default function DedicatedDestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const destination = destinationsData[resolvedParams.id];
  const [unitMode, setUnitMode] = useState<'acres' | 'sqft'>('acres');

  if (!destination) {
    return (
      <main className="min-h-screen bg-[#FAF8FC] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif-display text-4xl font-bold text-purple-950 mb-4">Destination Not Found</h1>
        <p className="text-purple-900/70 mb-6">The retreat property you are looking for does not exist.</p>
        <Link href="/destinations" className="px-6 py-3 rounded-full bg-[#C026D3] text-white font-semibold text-xs uppercase">
          Back to All Destinations
        </Link>
      </main>
    );
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const currentSizeDisplay = unitMode === 'acres' ? destination.sizeAcres : destination.sizeSqft;

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge={destination.location.toUpperCase()}
        title={destination.name}
        subtitle={destination.subtitle}
        bgImage={destination.images[0]}
        ctaText="Book This Retreat"
        ctaHref="#booking-form"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Back Link */}
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Destinations</span>
        </Link>

        {/* Top Header Row with Title, Tagline & Circular Stats Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-purple-100/80">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 tracking-tight">
                {destination.name}
              </h1>
              <ExternalLink className="w-6 h-6 text-[#C026D3] shrink-0" />
            </div>
            <p className="text-sm font-semibold text-[#C026D3] italic mt-1.5">
              &ldquo;{destination.subtitle}&rdquo;
            </p>
          </div>

          {/* 3 Circular Pill Badges (Guests, Size with Unit Toggle, View) */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Guests */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#C026D3] shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-bold text-purple-950">{destination.guests}</span>
                <span className="text-xs text-purple-900/60 font-light">Capacity</span>
              </div>
            </div>

            {/* Size with Acres / Square Feet Toggle Switcher */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#C026D3] shadow-sm">
                <Maximize2 className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-bold text-purple-950">{currentSizeDisplay}</span>
                <button
                  onClick={() => setUnitMode((prev) => (prev === 'acres' ? 'sqft' : 'acres'))}
                  className="text-[11px] font-semibold text-[#C026D3] hover:underline"
                >
                  Switch to {unitMode === 'acres' ? 'Square Feet' : 'Acres'}
                </button>
              </div>
            </div>

            {/* View */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#C026D3] shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-bold text-purple-950">{destination.view}</span>
                <span className="text-xs text-purple-900/60 font-light">View</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: 4-Photo Toggle Slider with Smooth Diffusing Transition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-[#1E1625]">
              {destination.images.map((imgUrl, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${destination.name} slider photo ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      isActive
                        ? 'opacity-100 scale-100 filter-none z-10 brightness-95'
                        : 'opacity-0 scale-105 blur-sm z-0'
                    }`}
                  />
                );
              })}

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-purple-950 flex items-center justify-center shadow-lg hover:bg-white transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-purple-950 flex items-center justify-center shadow-lg hover:bg-white transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {destination.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#C026D3] ring-2 ring-[#C026D3]/30 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Overview & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-xl space-y-6">
              <h2 className="font-serif-display text-2xl font-bold text-purple-950">Property Overview</h2>
              <div className="space-y-4 text-purple-950/80 text-sm leading-relaxed font-normal">
                {destination.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-purple-100">
                <h3 className="font-serif-display text-lg font-bold text-purple-950 mb-3">Key Features &amp; Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-purple-950">
                      <Check className="w-4 h-4 text-[#C026D3] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Consultation CTA */}
        <ConsultationCTA />

      </div>

      <Footer />
    </main>
  );
}
