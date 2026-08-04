'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import VenueDecorGallery from '@/components/VenueDecorGallery';
import { Send, CheckCircle2 } from 'lucide-react';

export default function PropertyOwnersPage() {
  const [partnerFormSubmitted, setPartnerFormSubmitted] = useState(false);
  const [partnerFormData, setPartnerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerFormSubmitted(true);
  };

  const propertyOwnerPoints = [
    {
      title: 'Assured ROI',
      desc: 'By partnering with us on a revenue share model, property owners can enjoy a steady income stream with guaranteed returns on their investment.',
    },
    {
      title: 'Professional Property Management',
      desc: 'We take care of all aspects of property management, including maintenance, cleaning, and guest services. This ensures that the property is well-maintained and in optimal condition at all times.',
    },
    {
      title: 'Access to a Wide Network',
      desc: 'Chazing Purple has a vast network of clients seeking luxury retreats. By partnering with us, property owners gain access to this extensive clientele, increasing their property’s visibility and booking potential.',
    },
    {
      title: 'Marketing and Promotion',
      desc: 'We handle the marketing and promotion of the property, including listing it on our website and other relevant platforms. This exposure helps attract more guests and maximize occupancy rates.',
    },
    {
      title: 'Flexible Usage',
      desc: 'Property owners can still enjoy the flexibility of using their holiday home or farmhouse for personal use when it’s not booked by guests. We work with owners to ensure a balance between rental income and personal enjoyment of the property.',
    },
    {
      title: 'Risk Mitigation',
      desc: 'Chazing Purple assumes the risk associated with rental operations, including cancellations and property damage. Property owners can have peace of mind knowing that their investment is protected.',
    },
    {
      title: 'Professional Expertise',
      desc: 'Our team brings years of experience in the hospitality industry, ensuring that properties are managed efficiently and guests receive exceptional service.',
    },
    {
      title: 'Streamlined Process',
      desc: 'Partnering with Chazing Purple streamlines the rental process for property owners, saving them time and effort while maximizing the property’s earning potential.',
    },
  ];

  const serviceProviderPoints = [
    {
      title: 'Exposure to Targeted Audience',
      desc: 'Partnering with Chazing Purple exposes your business to a targeted audience of luxury travelers and event organizers who are seeking high-quality services for their retreats and events. This can lead to increased visibility and bookings for your business.',
    },
    {
      title: 'Steady Stream of Clients',
      desc: 'Chazing Purple has a steady stream of clients seeking various services for their retreats, events, and productions. By collaborating with us, service providers can tap into this client base and secure consistent bookings throughout the year.',
    },
    {
      title: 'Networking Opportunities',
      desc: 'Collaborating with Chazing Purple provides service providers with networking opportunities with other vendors and businesses in the hospitality and events industry. This can lead to valuable partnerships, referrals, and collaborations on future projects.',
    },
    {
      title: 'Enhanced Credibility',
      desc: 'Being associated with a reputable brand like Chazing Purple can enhance the credibility and reputation of your business. Clients are more likely to trust and choose service providers recommended by a trusted source like Chazing Purple.',
    },
    {
      title: 'Streamlined Operations',
      desc: 'By partnering with Chazing Purple, service providers can streamline their operations and bookings. Our platform provides a centralized system for managing bookings, payments, and communication, making it easier to coordinate with clients and deliver exceptional service.',
    },
    {
      title: 'Access to Resources',
      desc: 'Chazing Purple may provide access to resources such as marketing materials, promotional opportunities, and industry insights that can help service providers grow their business and reach new clients.',
    },
    {
      title: 'Mutually Beneficial Collaborations',
      desc: 'Collaborating with Chazing Purple opens up opportunities for mutually beneficial collaborations with other service providers in our network. This can lead to joint packages, cross-promotions, and shared resources that benefit all parties involved.',
    },
    {
      title: 'Flexible Partnership Models',
      desc: 'Chazing Purple offers flexible partnership models that cater to the unique needs and preferences of service providers. Whether it’s revenue-sharing arrangements, referral partnerships, or exclusive vendor contracts, we work with service providers to create mutually beneficial agreements.',
    },
  ];

  const clientTargetGroups = [
    {
      title: 'Couples and Romantic Getaways',
      desc: 'Experience intimate and luxurious accommodations, enjoy personalized romantic experiences, and create unforgettable memories in picturesque surroundings.',
    },
    {
      title: 'Families and Group Retreats',
      desc: 'Relax in spacious and comfortable accommodations, bond over shared experiences and activities such as BBQs and outdoor movie screenings, and enjoy quality time together away from the hustle and bustle of daily life.',
    },
    {
      title: 'Corporate Retreats and Team Building',
      desc: 'Enhance team cohesion and productivity in a serene and distraction-free environment, enjoy tailored team-building activities and workshops, and foster creativity and innovation among team members.',
    },
    {
      title: 'Event Planners and Wedding Parties',
      desc: 'Discover unique and picturesque wedding venues, receive personalized assistance and support from experienced event planners, and create unforgettable moments for special occasions with access to luxurious amenities and services.',
    },
    {
      title: 'Production Houses and Filmmakers',
      desc: 'Utilize stunning and versatile filming locations, access professional production services and equipment, and benefit from the convenience and flexibility of customizable filming packages tailored to specific project needs.',
    },
    {
      title: 'Solo Travelers and Wellness Seekers',
      desc: 'Enjoy peace and solitude in tranquil surroundings, rejuvenate mind, body, and soul with wellness activities and services such as yoga, meditation, and spa treatments, and embark on a journey of self-discovery and relaxation.',
    },
    {
      title: 'Adventure Enthusiasts and Outdoor Lovers',
      desc: 'Explore breathtaking natural landscapes and engage in a variety of outdoor activities such as hiking, biking, and wildlife watching, rejuvenate in nature’s embrace, and create thrilling and memorable adventures.',
    },
    {
      title: 'Foodies and Culinary Connoisseurs',
      desc: 'Indulge in simple ‘soul food’, hearty meals & dining experiences curated by talented chefs, savor locally sourced and seasonal ingredients, and enjoy farm-to-table meals showcasing the region’s culinary delights.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge="FOR PROPERTY OWNERS & PARTNERS"
        title="Partner Your Property with Chazing Purple"
        subtitle="Collaborate with Chazing Purple as a property owner or service provider to monetize your estate with assured ROI, professional hospitality management, and wide client reach."
        bgImage="/images/destinations/whatsapp-image-2024-07-10-at-2.36.16-pm.jpeg"
        ctaText="Partner With Us"
        ctaHref="#partner-form"
      />

      {/* Main Content Structured Chunks Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-12 text-purple-950 font-sans">
        
        {/* 1. Property Owners Chunks */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 mb-4 tracking-tight">
              Property Owners
            </h2>
            <div className="bg-[#FAF5FF] border-l-4 border-[#C026D3] rounded-r-2xl p-5 shadow-sm">
              <p className="text-base md:text-lg text-purple-950/90 leading-relaxed font-normal">
                Collaborating with Chazing Purple as a property owner offers numerous benefits, including:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {propertyOwnerPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#C026D3] text-xs font-bold flex items-center justify-center border border-purple-200/80 shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-purple-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-purple-950/80 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF5FF] border-l-4 border-purple-900 rounded-r-2xl p-5 shadow-sm mt-8">
            <p className="text-base md:text-lg text-purple-950/90 leading-relaxed font-normal">
              Overall, collaborating with Chazing Purple provides property owners with a hassle-free way to monetize their holiday homes or farmhouses while enjoying the benefits of professional property management and a guaranteed ROI.
            </p>
          </div>
        </div>

        {/* Subtle Divider Line */}
        <hr className="border-purple-100 my-16" />

        {/* 2. Vendors & Service Providers Chunks */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 mb-4 tracking-tight">
              Vendors &amp; service providers
            </h2>
            <div className="bg-[#FAF5FF] border-l-4 border-[#C026D3] rounded-r-2xl p-5 shadow-sm">
              <p className="text-base md:text-lg text-purple-950/90 leading-relaxed font-normal">
                Collaborating with Chazing Purple as a service provider offers numerous benefits, including:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {serviceProviderPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#C026D3] text-xs font-bold flex items-center justify-center border border-purple-200/80 shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-purple-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-purple-950/80 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF5FF] border-l-4 border-purple-900 rounded-r-2xl p-5 shadow-sm mt-8">
            <p className="text-base md:text-lg text-purple-950/90 leading-relaxed font-normal">
              Overall, collaborating with Chazing Purple as a service provider provides access to a targeted audience, networking opportunities, enhanced credibility, streamlined operations, and the potential for mutually beneficial collaborations, ultimately leading to business growth and success.
            </p>
          </div>
        </div>

        {/* Subtle Divider Line */}
        <hr className="border-purple-100 my-16" />

        {/* 3. Clients / End Users Chunks */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-purple-950 mb-6 tracking-tight">
              Clients / End users
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {clientTargetGroups.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#C026D3] text-xs font-bold flex items-center justify-center border border-purple-200/80 shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-purple-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-purple-950/80 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF5FF] border-l-4 border-[#C026D3] rounded-r-2xl p-5 shadow-sm mt-8">
            <p className="text-base md:text-lg text-purple-950/90 leading-relaxed font-normal">
              Each client group can benefit from the unique offerings and tailored experiences provided by Chazing Purple, ensuring a memorable and satisfying stay for all.
            </p>
          </div>
        </div>

        {/* Subtle Divider Line */}
        <hr className="border-purple-100 my-16" />

        {/* 4. Partner With Us Compact Form Section */}
        <div id="partner-form" className="pt-4 max-w-xl mx-auto">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-purple-950 mb-5 tracking-tight text-center sm:text-left">
            Partner With Us
          </h2>

          <div className="bg-[#F8F7F9] rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm">
            {partnerFormSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-purple-950 mb-1.5">
                  Thank You for Partnering!
                </h3>
                <p className="text-xs text-purple-900/70 mb-5">
                  Your details have been submitted. Our property partnership team will reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => setPartnerFormSubmitted(false)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#C026D3] hover:bg-purple-900 transition-colors"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerFormData.name}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Your email
                    </label>
                    <input
                      type="email"
                      required
                      value={partnerFormData.email}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96065 27070"
                      value={partnerFormData.phone}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerFormData.subject}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Your message (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={partnerFormData.message}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 transition-colors resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#C026D3] hover:bg-purple-900 shadow-sm hover:shadow transition-all duration-300"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* Decor Gallery */}
      <VenueDecorGallery />

      <Footer />
    </main>
  );
}
