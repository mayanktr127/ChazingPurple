'use client';

import React from 'react';
import { Music, Flame, Utensils, Tv } from 'lucide-react';

export default function ExperienceFeaturesSection() {
  const experiences = [
    {
      id: 'sound-lights',
      title: 'Sound & Lights',
      desc: 'Choose your mood and we will ensure the music playlist and lighting that matches the spirit of your event.',
      icon: Music,
    },
    {
      id: 'bonfire',
      title: 'Bonfire',
      desc: 'Nothing beats the experience of being huddled around the vibrant blaze of a bonfire and building beautiful memories of conversations, fun games, song and laughter.',
      icon: Flame,
    },
    {
      id: 'barbecue',
      title: 'Barbecue',
      desc: 'Be it a small, intimate gathering of friends and family or a party with your mates from work, we provide the professional service and the best barbecue from our custom-built cooking rigs.',
      icon: Utensils,
    },
    {
      id: 'outdoor-cinema',
      title: 'Outdoor Cinema',
      desc: 'The wide open skies, the verdant green all around and you, sprawled comfortably in front of a wide screen and enjoying the experience of watching your favourite movie with your friends and family.',
      icon: Tv,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8FC] via-[#F6F0FA] to-[#FAF8FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4 Core Experiences List matching website UI theme */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {experiences.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="flex items-start gap-5 group">
                  {/* Website UI Themed Icon Circle */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF5FF] text-[#C026D3] border border-purple-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#C026D3] group-hover:text-white group-hover:border-[#C026D3] group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-purple-950 group-hover:text-[#C026D3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-950/80 text-sm sm:text-base leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Organic Curved Dual-Image Frame Collage */}
          <div className="lg:col-span-6 relative pt-6 pb-12 sm:pb-16 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              
              {/* Main Top Curved Image (BBQ Smoke & Skewers) */}
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-[100px_40px_100px_40px] overflow-hidden shadow-2xl border-4 border-white bg-purple-900">
                <img
                  src="/images/gallery/barbeque-1.jpg"
                  alt="Outdoor Barbecue Grill with smoking meats and skewers by Chazing Purple"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-95"
                />
              </div>

              {/* Overlay Bottom-Left Circular Image Badge (Camping & Nature) */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white z-20 bg-purple-950">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
                  alt="Sunlit Forest Camping Site by Chazing Purple"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Subtle Decorative Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
