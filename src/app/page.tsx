import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import EventCategoriesBento from '@/components/EventCategoriesBento';
import AboutSection from '@/components/AboutSection';
import ExperienceFeaturesSection from '@/components/ExperienceFeaturesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Chazing Purple — Luxury Staycations & Celebration Retreats',
  description: 'Chazing Purple curates luxury staycations, weddings, parties, and corporate retreats across top destinations.',
};

export default function Home() {
  const topDestinationsPreview = [
    {
      name: 'BLUE LAGOON',
      tagline: 'Dive into Luxury, Surrounded by Serenity.',
      image: '/images/destinations/blue-lagoon-1.jpg',
    },
    {
      name: 'GRUHAM',
      tagline: 'Luxury Meets Warmth, Comfort & Celebration',
      image: '/images/destinations/gruham-property.jpeg',
    },
    {
      name: 'PRANA',
      tagline: 'Where Every Corner Echoes Warmth and Harmony.',
      image: '/images/destinations/prana-1.jpeg',
    },
    {
      name: 'NAMMA MANE',
      tagline: 'Where Every Stay Feels Like Coming Home',
      image: '/images/destinations/namma-mane-2.png',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />
      
      {/* Hero Section — Full-Bleed Chazing Purple Destination Carousel */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Event Categories Bento Grid matching user screenshot */}
      <EventCategoriesBento />

      {/* About Section */}
      <AboutSection />

      {/* 4 Core Experiences Section matching user screenshot (Sound & Lights, Bonfire, Barbecue, Outdoor Cinema) */}
      <ExperienceFeaturesSection />

      {/* Top Destinations Preview Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Luxury Villa Portfolio</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-purple-950">
              Chazing Purple Top Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="mt-4 md:mt-0 text-sm font-semibold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1.5"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topDestinationsPreview.map((dest) => (
            <div key={dest.name} className="glass-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-purple-100 bg-white">
              <div className="relative h-48">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif-display text-xl font-bold text-purple-950 mb-1">{dest.name}</h3>
                <p className="text-xs text-purple-700 italic mb-4">{dest.tagline}</p>
                <Link
                  href="/destinations"
                  className="w-full inline-flex items-center justify-center gap-1 py-2 rounded-full text-xs font-semibold text-purple-900 bg-purple-100 hover:bg-purple-700 hover:text-white transition-colors"
                >
                  <span>Explore Villa</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Consultation CTA */}
      <ConsultationCTA />

      <Footer />
    </main>
  );
}
