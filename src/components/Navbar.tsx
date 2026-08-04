'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact 7 links from original chazingpurple.com (Image 4)
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Top Destinations', href: '/destinations' },
    { name: 'Staycations', href: '/staycations' },
    { name: 'Celebrations', href: '/celebrations' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Wedding', href: '/wedding' },
    { name: 'Experiences', href: '/experiences' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm'
          : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Original Chazing Purple CP Monogram Logo (Image 2) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 shrink-0 relative flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-pink-600 transition-transform group-hover:scale-105 duration-300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer C-P Magenta Arc Loop matching Image 2 */}
              <path
                d="M50 10 C 27.9 10, 10 27.9, 10 50 C 10 72.1, 27.9 90, 50 90 C 65 90, 77.8 81.8, 84.5 69.5"
                stroke="#C026D3"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M50 28 C 37.8 28, 28 37.8, 28 50 C 28 62.2, 37.8 72, 50 72 C 62.2 72, 72 62.2, 72 50 C 72 45, 70 41, 66 38"
                stroke="#C026D3"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <line
                x1="38"
                y1="62"
                x2="62"
                y2="86"
                stroke="#C026D3"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-sans font-bold text-xs tracking-[0.2em] text-gray-800 uppercase leading-tight">
              CHAZING
            </span>
            <span className="font-sans font-bold text-xs tracking-[0.2em] text-gray-800 uppercase leading-tight">
              PURPLE
            </span>
          </div>
        </Link>

        {/* Desktop Links — Exact 7 items from chazingpurple.com (Image 4) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 text-sm font-medium ${
                  isActive
                    ? 'text-pink-600 font-semibold'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Phone CTA — Exact matching chazingpurple.com (Image 4) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919606527070"
            className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-pink-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100">
              <Phone className="w-4 h-4" />
            </div>
            <span>+91 9606527070</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-pink-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 border-b border-gray-50 ${
                  pathname === link.href ? 'text-pink-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <a
                href="tel:+919606527070"
                className="flex items-center gap-2 text-sm font-semibold text-pink-600"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9606527070</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
