'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ConsultationCTA from '@/components/ConsultationCTA';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header with Background Photo */}
      <PageHero
        badge="GET IN TOUCH"
        title="Connect with Chazing Purple"
        subtitle="Have questions about booking a staycation, planning a wedding, or partnering your property? Our concierge team is here for you 24/7."
        bgImage="/images/destinations/prana-1.jpeg"
      />

      <div className="py-12">
        <ConsultationCTA />
      </div>

      <Footer />
    </main>
  );
}
