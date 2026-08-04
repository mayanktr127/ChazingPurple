'use client';

import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

export default function FloatingSocialDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-4 bottom-6 sm:left-6 sm:bottom-8 z-50 flex flex-col items-start">
      {/* Expanded Social Icons Stack (expands upwards) */}
      {isOpen && (
        <div className="mb-3.5 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Phone Call Button with Realistic Icon & Tooltip */}
          <div className="relative group flex items-center">
            <a
              href="tel:+919606019315"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Call Us"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00E676] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            <span className="absolute left-16 px-3 py-1 bg-purple-950/90 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md border border-purple-800/50">
              Call Us
            </span>
          </div>

          {/* WhatsApp Button with Realistic Icon & Tooltip */}
          <div className="relative group flex items-center">
            <a
              href="https://wa.me/919606019315?text=Hello%20Chazing%20Purple%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20retreat%20venues!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Inquiry"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.33c-.24.68-1.2 1.26-1.96 1.42-.52.11-1.2.2-3.49-.75-2.93-1.21-4.81-4.19-4.96-4.39-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.14 1.01-2.43.26-.29.58-.36.77-.36.19 0 .39.01.56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.39-.46.53-.15.15-.3.31-.13.61.18.3.78 1.28 1.67 2.07 1.15 1.02 2.11 1.34 2.41 1.49.3.15.47.13.65-.07.18-.2.77-.9 1-.12.23.23.23.38 1.45.89 1.22.61.2.73.33.85.39.12.05 1.33.73 1.83.68.5-.05 1.46-.77 1.7-1.45.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z" />
              </svg>
            </a>
            <span className="absolute left-16 px-3 py-1 bg-purple-950/90 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md border border-purple-800/50">
              WhatsApp
            </span>
          </div>

          {/* Instagram DM Button with Realistic Paperplane Icon & Tooltip */}
          <div className="relative group flex items-center">
            <a
              href="https://www.instagram.com/chazingpurple/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Direct"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#cc2366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white -rotate-12 translate-x-0.5" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </a>
            <span className="absolute left-16 px-3 py-1 bg-purple-950/90 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md border border-purple-800/50">
              Instagram
            </span>
          </div>
        </div>
      )}

      {/* Main Bottom Toggle Button matching screenshot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Minimize Contact Dock" : "Expand Contact Dock"}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#9333EA] to-[#A855F7] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-purple-200"
      >
        {isOpen ? (
          <X className="w-7 h-7 stroke-[3]" />
        ) : (
          <Plus className="w-7 h-7 stroke-[3]" />
        )}
      </button>
    </div>
  );
}
