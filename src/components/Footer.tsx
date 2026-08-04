'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8FC] border-t border-purple-100 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-purple-100">
          
          {/* Column 1: Brand & Tagline matching luxury purple UI */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 shrink-0 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full transition-transform group-hover:scale-105 duration-300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <span className="font-sans font-bold text-xs tracking-[0.2em] text-purple-950 uppercase leading-tight">
                  CHAZING
                </span>
                <span className="font-sans font-bold text-xs tracking-[0.2em] text-[#C026D3] uppercase leading-tight">
                  PURPLE
                </span>
              </div>
            </Link>

            <p className="text-sm text-purple-950/80 font-sans leading-relaxed mb-6">
              Chazing Purple believes that every individual is unique and so are their experiences in life.
            </p>

            {/* Social Buttons matching website luxury purple UI */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ChazingPurple/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#C026D3] border border-purple-200/80 flex items-center justify-center hover:bg-[#C026D3] hover:text-white hover:border-[#C026D3] hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/chazingpurple/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#C026D3] border border-purple-200/80 flex items-center justify-center hover:bg-[#C026D3] hover:text-white hover:border-[#C026D3] hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links matching UI */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-display text-xl font-bold text-purple-950 mb-5">
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm text-purple-950/80">
              <li>
                <Link href="/gallery" className="hover:text-[#C026D3] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C026D3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#C026D3] transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/property-owners" className="hover:text-[#C026D3] transition-colors">
                  Property Owners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C026D3] transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services matching UI */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display text-xl font-bold text-purple-950 mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-purple-950/80">
              <li>
                <Link href="/parties" className="hover:text-[#C026D3] transition-colors">
                  Parties
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-[#C026D3] transition-colors">
                  Corporate Event
                </Link>
              </li>
              <li>
                <Link href="/photo-videography" className="hover:text-[#C026D3] transition-colors">
                  Photo &amp; Videography
                </Link>
              </li>
              <li>
                <Link href="/wedding" className="hover:text-[#C026D3] transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/social-events" className="hover:text-[#C026D3] transition-colors">
                  Social Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Icon Circles matching UI theme */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display text-xl font-bold text-purple-950 mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#C026D3] border border-purple-200/80 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-[#C026D3] group-hover:text-white group-hover:border-[#C026D3] transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-950/60 uppercase block">Locations</span>
                  <span className="text-sm font-medium text-purple-950">
                    Sy. No.21, Dr. K. Narayanpura Village
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#C026D3] border border-purple-200/80 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-[#C026D3] group-hover:text-white group-hover:border-[#C026D3] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-950/60 uppercase block">Send Email</span>
                  <a href="mailto:contactchazing@gmail.com" className="text-sm font-medium text-purple-950 hover:text-[#C026D3] transition-colors">
                    contactchazing@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#C026D3] border border-purple-200/80 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-[#C026D3] group-hover:text-white group-hover:border-[#C026D3] transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-950/60 uppercase block">Call Anytime</span>
                  <div className="flex flex-col text-sm font-medium text-purple-950">
                    <a href="tel:+919606527070" className="hover:text-[#C026D3] transition-colors">+91 9606527070</a>
                    <a href="tel:+919606247070" className="hover:text-[#C026D3] transition-colors">+91 9606247070</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching website UI */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-purple-950/70 gap-4">
          <p>© 2025 Chazing Purple Solutions Pvt. Ltd. All Rights Reserved</p>
          <p>Website Designed and Managed by Solve Digital Media</p>
        </div>
      </div>
    </footer>
  );
}
