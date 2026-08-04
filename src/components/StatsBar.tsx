'use client';

import React from 'react';

const stats = [
  { value: '50+ Acres', label: 'Luxury Estate Land', desc: 'Across Bangalore Outskirts' },
  { value: '8 Private Villas', label: 'Exclusive Retreats', desc: 'Farmhouses & Homestays' },
  { value: '500+', label: 'Events & Staycations', desc: 'Weddings, Offsites & Parties' },
  { value: '100%', label: 'White-Glove Hospitality', desc: 'Verified 5-Star Guest Reviews' },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-6">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-purple-900/5 border border-purple-100/80 bg-white/95 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-purple-100/80">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <span className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-purple-950 mb-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-purple-900/60 font-light">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
