'use client';

import React, { useState } from 'react';
import { Compass, Palette, Clock, Globe, Flower2, Sparkles, Check, ArrowRight, X } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

const services: ServiceItem[] = [
  {
    id: 'staycations',
    icon: Compass,
    title: 'Luxury Staycations',
    subtitle: 'Private Villas & Retreats',
    description: 'Escape to private villas with swimming pools, lush green lawns, bonfire nights, custom barbecue rigs, and outdoor movie projections.',
    features: [
      'Private villa access with swimming pool & lawns',
      'Bonfire setup & starlit evening gatherings',
      'Custom barbecue cooking rigs & live chefs',
      'Open air cinema screen under the stars',
    ],
    image: '/images/destinations/blue-lagoon-1.jpg',
    popular: true,
  },
  {
    id: 'parties-celebrations',
    icon: Palette,
    title: 'Parties & Celebrations',
    subtitle: 'Birthday & Anniversary Bashes',
    description: 'Host high-energy pool bashes, milestone birthdays, romantic anniversaries, and family reunions with custom playlists and mood lighting.',
    features: [
      'Custom music playlists & synchronized lighting',
      'Sundowner pool parties & floaties',
      'Live barbecue & mixology cocktail counters',
      'Themed party decor & stage lighting',
    ],
    image: '/images/destinations/gruham-4.jpeg',
  },
  {
    id: 'corporate-events',
    icon: Clock,
    title: 'Corporate Offsites & Events',
    subtitle: 'Retreats & Team Building',
    description: 'Boost team morale with corporate retreats, outdoor team building games, executive workshops, and gala evening dinners.',
    features: [
      'Spacious lawns for team building activities',
      'High-speed Wi-Fi & AV workshop setup',
      'Gala dinner with live BBQ & music',
      'Executive breakout lounges & stay options',
    ],
    image: '/images/gallery/01-scaled.jpg',
  },
  {
    id: 'weddings',
    icon: Globe,
    title: 'Bespoke Luxury Weddings',
    subtitle: 'Destination Wedding Planning',
    description: 'End-to-end wedding choreography, floral arches, sangeet night setups, catering, guest concierge, and day-of execution.',
    features: [
      'Comprehensive wedding planning & coordination',
      'Sculptural floral design & staging',
      'Pre-wedding sangeet & haldi setups',
      'Guest travel & hotel accommodation management',
    ],
    image: '/images/destinations/prana-1.jpeg',
    popular: true,
  },
  {
    id: 'photo-videography',
    icon: Flower2,
    title: 'Photo & Videography',
    subtitle: 'Cinematic Visual Storytelling',
    description: 'Capture authentic moments with 4K cinematic afterfilms, aerial drone photography, pre-wedding shoots, and instant photo booths.',
    features: [
      'Cinematic 4K event highlight films',
      'Aerial drone photo & video coverage',
      'Pre-wedding & lifestyle portrait shoots',
      'Instant photo booths & print keepsakes',
    ],
    image: '/images/destinations/namma-mane-2.png',
  },
  {
    id: 'property-owners',
    icon: Sparkles,
    title: 'For Property Owners',
    subtitle: 'Partner Your Villa',
    description: 'Partner your luxury villa or estate with Chazing Purple for premium hospitality management, high rental yields, and complete maintenance.',
    features: [
      'High rental occupancy from verified guests',
      'End-to-end housekeeping & event management',
      '24/7 on-site caretaker & property preservation',
      'Interior styling & amenity optimization',
    ],
    image: '/images/destinations/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg',
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#FAF8FC] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chazing Purple Offerings</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 tracking-tight leading-tight mb-4">
            Tailored Services &amp; Event Solutions
          </h2>
          <p className="text-base md:text-lg text-purple-900/70 font-light">
            Chazing Purple provides personalized hospitality, private retreat staycations, weddings, and bespoke event management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group glass-card rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 border border-purple-100 hover:border-purple-300 relative overflow-hidden bg-white/90"
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-100/80 group-hover:bg-purple-600 text-purple-700 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>

                  <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-3 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-purple-900/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 mb-8 pt-4 border-t border-purple-100">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-purple-950/80">
                        <Check className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-purple-900 bg-purple-100/70 hover:bg-purple-700 hover:text-white transition-all duration-300 group/btn"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 relative shadow-2xl overflow-hidden border border-purple-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-purple-100 hover:text-purple-950 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <selectedService.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                  {selectedService.subtitle}
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl font-bold text-purple-950">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-56 object-cover rounded-2xl mb-6"
            />

            <p className="text-sm md:text-base text-purple-900/80 font-light leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <h4 className="text-sm font-semibold text-purple-950 uppercase tracking-wider mb-4">
              What Is Included:
            </h4>

            <ul className="space-y-3 mb-8">
              {selectedService.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-purple-900/90">
                  <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-purple-100">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
              <a
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-500 shadow-md hover:shadow-lg"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
