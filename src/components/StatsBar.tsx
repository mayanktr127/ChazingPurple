'use client';

import React from 'react';

const stats = [
  { value: '480+', label: 'Weddings Planned & Styled', desc: 'Crafted across 18 countries' },
  { value: '99.4%', label: 'Client Satisfaction', desc: 'Verified 5-star couple reviews' },
  { value: '12+', label: 'Years of Experience', desc: 'Bespoke event architects' },
  { value: '15', label: 'Global Design Awards', desc: 'Recognized by wedding industry leaders' },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-6">
      <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl shadow-purple-900/5 border border-purple-100/80 bg-white/90">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-purple-100">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <span className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-purple-950 mb-0.5">
                {stat.label}
              </span>
              <span className="text-xs text-purple-900/60 font-light">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
