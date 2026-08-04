'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RetreatAdvisorsCarousel from '@/components/RetreatAdvisorsCarousel';
import { Tag, MessageSquare, Eye, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const whoWeAreChunks = [
    "As one of Bangalore's rising stars in holiday rentals and property management companies, we're committed to delivering unparalleled service and quality standards to clients from all walks of life. Luxury meets inclusivity and every moment is an invitation to embrace life to the fullest. Our diverse portfolio of properties caters to a wide range of clientele, ensuring that everyone can experience the magic of the perfect retreat experience.",
    "At Chazing Purple, we believe in the power of now—the joy of living in the moment and savoring life's little pleasures. Our mission is to create experiences that inspire you to seize the day and make the most of every opportunity to unwind & discover oneself. Be one with nature. Our properties are designed to evoke a sense of wonder and awe. We invite you to elevate your travel experience and immerse yourself in the beauty of luxury homestays. Come, live in the now, and let us help you create moments that will last a lifetime.",
    "We don't simply rent out properties—we curate immersive experiences tailored to your desire for luxury, exclusivity, and unparalleled memories. Our team of Retreat Advisors is here to guide you through every step of your journey, from selecting the perfect location to tailoring your experience to your specific needs and preferences. Whether you're seeking a tranquil escape, a lavish celebration, or a productive retreat, we're here to turn your dreams into reality.",
  ];

  const whyUsChunks = [
    "Step into our properties and instantly feel the warmth and coziness of a home. From the meticulously curated decor to the thoughtful amenities, every detail is designed to make you feel welcome and at ease. Whether you're lounging in the living room, unwinding in the bedroom, or soaking in the serenity of the outdoor spaces, our properties envelop you in a sense of comfort and belonging.",
    "But it's not just the physical space that makes our properties feel like home; it's the soulful culinary experiences that truly elevate your stay. With our talented chefs available at every location, you'll savor soul food that not only tantalizes your taste buds but also warms your heart. From simple, tasty dishes to elaborate feasts, every meal is crafted with love and care to ensure your satisfaction.",
    "At Chazing Purple, we believe in creating unforgettable experiences for our guests. That's why we offer a range of activities and amenities designed to enhance your stay. Whether you're gathering around a live BBQ with friends and family, cozying up in tents for a night under the stars, belting out your favorite tunes at karaoke, or enjoying an outdoor movie screening, there's something for everyone to enjoy.",
    "We're also committed to sustainability and eco-friendliness. With initiatives like 'Plant a Tree' and our 'Go Green' policy, we strive to minimize our environmental footprint and promote responsible travel practices. Our properties are plastic-free zones, and we encourage guests to join us in our efforts to protect the planet.",
    "And of course, no stay at Chazing Purple would be complete without experiencing the magic of candlelight dining under the stars. With the night sky as your backdrop and the soft glow of candlelight illuminating your meal, it's an experience that's sure to leave a lasting impression.",
    "At Chazing Purple, we're dedicated to providing an unparalleled client experience that goes above and beyond your expectations. From the moment you arrive until the moment you leave, we're here to ensure that every aspect of your stay is nothing short of extraordinary. Welcome home to Chazing Purple, where luxury meets warmth, and every moment is a memory in the making.",
  ];

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge="ABOUT CHAZING PURPLE"
        title="Luxury Hospitality & Custom Retreats"
        subtitle="At Chazing Purple, we believe that luxury should be accessible to all. We're dedicated to curating unforgettable experiences tailored to your preferences."
        bgImage="/images/destinations/gruham-4.jpeg"
        ctaText="Connect With Us"
        ctaHref="/contact"
      />

      {/* Luxury Hospitality Services Centered Text */}
      <section className="py-20 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 mb-10 tracking-tight">
          Luxury Hospitality Services
        </h2>

        <div className="space-y-6 text-purple-950/80 font-sans text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-normal">
          <p>
            Welcome to Chazing Purple, your ultimate destination for luxury retreats and bespoke experiences. Discover a world of opulence and tranquility as you escape to our exclusive properties nestled in picturesque locations. Whether you&apos;re planning a romantic getaway, a family retreat, or a corporate event, Chazing Purple offers the perfect sanctuary for your every need.
          </p>

          <p>
            Our curated collection of luxury farmhouses, private villas, and exclusive estates are designed to exceed your expectations. Immerse yourself in elegance and comfort as you indulge in lavish amenities, personalized service, and breathtaking surroundings.
          </p>

          <p>
            At Chazing Purple, we go beyond just providing accommodations; we specialize in crafting unforgettable experiences tailored to your preferences. From private pool parties and outdoor movie nights to candlelit dinners under the stars, we ensure that every moment is filled with magic and wonder.
          </p>

          <p>
            With our dedicated team of retreat advisors, we&apos;re here to assist you every step of the way. Whether you&apos;re seeking guidance on property selection, personalized concierge services, or arranging unique experiences, we&apos;re committed to making your retreat dreams a reality.
          </p>

          <p>
            Experience luxury redefined with Chazing Purple. Book your getaway today and embark on a journey of indulgence, relaxation, and unforgettable memories. Welcome to the world of Chazing Purple, where every moment is an opportunity to escape, explore, and elevate your experience.
          </p>
        </div>
      </section>

      {/* Recommended On Platform Badges (Airbnb, Agoda, Booking.com) */}
      <section className="py-12 bg-white border-y border-purple-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <p className="font-serif-display text-xl font-bold text-purple-950 mb-8">
            Recommended on :
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-90">
            {/* Airbnb Logo */}
            <div className="flex items-center gap-2 text-[#FF5A5F] hover:scale-105 transition-transform">
              <svg className="w-9 h-9 fill-current" viewBox="0 0 32 32">
                <path d="M16 1c-2.008 0-3.483 1.41-4.708 3.407-1.246 2.03-2.316 4.793-3.324 7.641-1.026 2.9-1.928 5.867-2.617 8.358-.658 2.378-1.05 4.148-1.05 4.994 0 3.652 2.977 6.6 6.7 6.6 2.22 0 4.182-1.057 5.426-2.695 1.244 1.638 3.206 2.695 5.426 2.695 3.723 0 6.7-2.948 6.7-6.6 0-.846-.392-2.616-1.05-4.994-.689-2.49-1.59-5.457-2.617-8.358-1.008-2.848-2.078-5.61-3.324-7.641C20.483 2.41 19.008 1 16 1zm0 3.6c1.332 0 2.428.986 3.447 2.652.998 1.63 1.956 4.07 2.87 6.657.92 2.6 1.748 5.308 2.368 7.553.593 2.146.815 3.438.815 3.938 0 1.988-1.612 3.6-3.7 3.6-1.493 0-2.776-.848-3.418-2.08l-.382-.736-.382.736C18.776 28.152 17.493 29 16 29c-1.493 0-2.776-.848-3.418-2.08l-.382-.736-.382.736C11.176 28.152 9.893 29 8.4 29c-2.088 0-3.7-1.612-3.7-3.6 0-.5.222-1.792.815-3.938.62-2.245 1.448-4.953 2.368-7.553.914-2.587 1.872-5.027 2.87-6.657C11.572 5.586 12.668 4.6 16 4.6z" />
              </svg>
              <span className="font-sans font-bold text-2xl tracking-tight text-gray-800">
                airbnb
              </span>
            </div>

            {/* Agoda Logo */}
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-gray-700">
                agoda
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
              </div>
            </div>

            {/* Booking.com Logo */}
            <div className="flex items-center hover:scale-105 transition-transform">
              <span className="font-sans font-bold text-2xl tracking-tight text-[#003580]">
                Booking<span className="text-[#009FE3]">.com</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* "Who are we?" Dark Section with Right Image & Exact 3 Paragraph Chunks */}
      <section className="py-20 bg-[#1E1B4B] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 text-purple-200 text-xs font-bold uppercase tracking-wider border border-purple-700/50">
                <Sparkles className="w-3.5 h-3.5 text-[#C026D3]" />
                <span>Our Heritage</span>
              </div>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Who are we?
              </h2>

              <div className="space-y-4 pt-2">
                {whoWeAreChunks.map((chunk, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-900/30 border border-purple-700/40 rounded-2xl p-5 sm:p-6 shadow-md hover:border-[#C026D3]/60 transition-all duration-300 flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C026D3] shrink-0 mt-1" />
                    <p className="text-purple-100/95 font-sans text-sm sm:text-base leading-relaxed font-normal">
                      {chunk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-800/40 bg-black">
                <img
                  src="/images/gallery/whatsapp-image-2024-07-10-at-2.36.15-pm.jpeg"
                  alt="Lush green garden homestay foliage"
                  className="w-full h-[540px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "Why us?" Dark Section with Left Image & Exact 6 Paragraph Chunks matching "Who are we" layout */}
      <section className="py-20 bg-[#17153B] text-white border-t border-purple-900/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image (Matching 'Who are we' image styling) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-800/40 bg-black">
                <img
                  src="/images/destinations/blue-lagoon-1.jpg"
                  alt="Modern villa with blue pergola frame"
                  className="w-full h-[640px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Chunked Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 text-purple-200 text-xs font-bold uppercase tracking-wider border border-purple-700/50">
                <Sparkles className="w-3.5 h-3.5 text-[#C026D3]" />
                <span>Chazing Purple Difference</span>
              </div>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Why us?
              </h2>

              <div className="space-y-4 pt-2">
                {whyUsChunks.map((chunk, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-900/30 border border-purple-700/40 rounded-2xl p-4 sm:p-5 shadow-md hover:border-[#C026D3]/60 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#C026D3]/20 text-[#C026D3] text-xs font-bold flex items-center justify-center border border-[#C026D3]/40 shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-purple-100/95 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                      {chunk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Unified 5-Card Brand & Purpose Pillars Section in Image 2 White Card Style */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Brand Voice */}
          <div className="glass-card rounded-3xl p-8 bg-white border border-purple-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 shadow-sm">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-3">Brand Voice</h3>
              <p className="text-sm text-purple-900/70 leading-relaxed font-light">
                Chazing Purple&apos;s brand voice is sophisticated, yet approachable. We aim to convey elegance, luxury, and personalized service while remaining welcoming and accessible to all. Our tone is confident, knowledgeable, and attentive, ensuring that every interaction leaves a lasting impression of professionalism and warmth.
              </p>
            </div>
          </div>

          {/* Card 2: Brand Message */}
          <div className="glass-card rounded-3xl p-8 bg-white border border-purple-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-3">Brand Message</h3>
              <p className="text-sm text-purple-900/70 leading-relaxed font-light">
                At Chazing Purple, we believe that luxury should be accessible to all. We&apos;re not just about providing high-end retreats; we&apos;re dedicated to curating unforgettable experiences tailored to your preferences. Whether you&apos;re seeking relaxation, adventure, or celebration, Chazing Purple is your trusted partner in crafting moments that matter.
              </p>
            </div>
          </div>

          {/* Card 3: Our Vision */}
          <div className="glass-card rounded-3xl p-8 bg-white border border-purple-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6 shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-3">Our Vision</h3>
              <p className="text-sm text-purple-900/70 leading-relaxed font-light">
                Our vision at Chazing Purple is to redefine luxury travel by offering personalized, immersive experiences that elevate the senses and create lasting memories. We aspire to be the go-to destination for discerning travelers seeking unique and unforgettable retreats tailored to their individual tastes and desires.
              </p>
            </div>
          </div>

          {/* Card 4: Our Mission */}
          <div className="glass-card rounded-3xl p-8 bg-white border border-purple-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-3">Our Mission</h3>
              <p className="text-sm text-purple-900/70 leading-relaxed font-light">
                Chazing Purple is committed to providing unparalleled service and attention to detail in every aspect of your retreat experience. Our mission is to exceed your expectations by offering a curated selection of luxury properties, personalized concierge services, and unique experiences that cater to your every whim.
              </p>
            </div>
          </div>

          {/* Card 5: Our Aim */}
          <div className="glass-card rounded-3xl p-8 bg-white border border-purple-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-3">Our Aim</h3>
              <p className="text-sm text-purple-900/70 leading-relaxed font-light">
                Our aim at Chazing Purple is to inspire and empower our guests to embrace life&apos;s luxuries and create memories that last a lifetime. We aim to be the trusted partner you turn to for all your retreat needs, providing exceptional service, unparalleled comfort, and unforgettable experiences.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Meet Our Best Retreat Advisors Scroll Carousel Section */}
      <RetreatAdvisorsCarousel />

      <Footer />
    </main>
  );
}
