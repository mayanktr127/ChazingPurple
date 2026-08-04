'use client';

import React from 'react';
import { CheckCircle2, Sparkles, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  const values = [
    'Luxury staycations tailored to your personal preferences',
    'Curated signature barbecue rigs & bonfire setups',
    'Open air cinema projections under the stars',
    'Personal concierge & on-site caretakers 24/7',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-purple-50/30 to-[#FAF8FC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chazing Purple Property Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 border border-purple-100">
              <img
                src="/images/destinations/gruham-4.jpeg"
                alt="Gruham luxury retreat estate by Chazing Purple"
                className="w-full h-[450px] md:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-8 -right-4 md:right-6 z-20 glass-card p-6 rounded-2xl shadow-xl max-w-xs border border-purple-200/80 bg-white/95">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-950 text-sm">Chazing Purple Concierge</h4>
                  <p className="text-xs text-purple-700/80">Tailored moments that matter</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed italic">
                &ldquo;Chazing Purple&apos;s brand voice is sophisticated, yet approachable. We aim to convey elegance, luxury, and personalized service.&rdquo;
              </p>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Chazing Purple</span>
            </div>

            <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-purple-950 tracking-tight leading-[1.15] mb-6">
              Redefining Luxury Travel &amp; Celebration Retreats
            </h2>

            <p className="text-base md:text-lg text-purple-900/80 font-light leading-relaxed mb-6">
              At Chazing Purple, we believe that luxury should be accessible to all. We&apos;re not just about providing high-end retreats; we&apos;re dedicated to curating unforgettable experiences tailored to your preferences.
            </p>

            <p className="text-sm md:text-base text-purple-900/70 font-light leading-relaxed mb-8">
              Whether you&apos;re seeking relaxation, adventure, or celebration, Chazing Purple is your trusted partner in crafting moments that matter.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {values.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-purple-950/90">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Read Full Story</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
