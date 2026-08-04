'use client';

import React, { useState } from 'react';
import { Calendar, Sparkles, Send, CheckCircle2, Heart } from 'lucide-react';

export default function ConsultationCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '100-200',
    budget: '₹ 15,000 - ₹ 35,000',
    service: 'Full Planning & Production',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#120E16] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Journey</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Let&apos;s create something extraordinary together.
            </h2>

            <p className="text-purple-200/80 font-light text-base md:text-lg leading-relaxed mb-8">
              We take on a limited number of staycations and bespoke events each month to ensure every guest receives our undivided dedication and white-glove planning service.
            </p>

            <div className="space-y-6 pt-6 border-t border-purple-900/60">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-900/80 text-purple-300 flex items-center justify-center shrink-0 mt-1">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Consultation Call</h4>
                  <p className="text-xs text-purple-300/70">Complimentary 45-minute vision session</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-900/80 text-purple-300 flex items-center justify-center shrink-0 mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Studio Location</h4>
                  <p className="text-xs text-purple-300/70">Sy. No.21, Dr. K. Narayanpura Village, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark rounded-3xl p-8 md:p-10 border border-purple-500/20 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/30 text-purple-400 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-display text-3xl font-bold text-white mb-3">
                    Inquiry Received!
                  </h3>
                  <p className="text-purple-200/80 font-light text-sm max-w-md mb-8">
                    Thank you for reaching out to Chazing Purple. Our retreat advisors will review your reservation request and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
                    Book a Private Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-purple-400/50 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-purple-400/50 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 96065 27070"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-purple-400/50 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                        Estimated Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                        Expected Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      >
                        <option className="bg-purple-950 text-white" value="₹ 15,000 - ₹ 35,000">₹ 15,000 – ₹ 35,000</option>
                        <option className="bg-purple-950 text-white" value="₹ 35,000 - ₹ 75,000">₹ 35,000 – ₹ 75,000</option>
                        <option className="bg-purple-950 text-white" value="₹ 75,000 - ₹ 1,50,000">₹ 75,000 – ₹ 1,50,000</option>
                        <option className="bg-purple-950 text-white" value="₹ 1,50,000 - ₹ 3,00,000">₹ 1,50,000 – ₹ 3,00,000</option>
                        <option className="bg-purple-950 text-white" value="₹ 3,00,000+">₹ 3,00,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      >
                        <option className="bg-purple-950 text-white" value="Staycation & Villa Rental">Staycation &amp; Villa Rental</option>
                        <option className="bg-purple-950 text-white" value="Wedding Venue & Planning">Wedding Venue &amp; Planning</option>
                        <option className="bg-purple-950 text-white" value="Corporate Retreat">Corporate Retreat</option>
                        <option className="bg-purple-950 text-white" value="Parties & Celebrations">Parties &amp; Celebrations</option>
                        <option className="bg-purple-950 text-white" value="Photo & Videography">Photo &amp; Videography</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-purple-200/90 mb-1.5">
                      Tell us about your retreat vision
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share property preferences, guest count, event vision, or specific requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-purple-400/50 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300"
                  >
                    <span>Request Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
