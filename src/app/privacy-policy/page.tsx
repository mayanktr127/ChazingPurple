'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <Navbar />

      {/* Page Hero Header */}
      <PageHero
        badge="LEGAL & GOVERNANCE"
        title="Privacy Policy & Guest Data Protection"
        subtitle="At Chazing Purple Solutions Pvt. Ltd., we are committed to safeguarding your privacy and protecting all personal data provided during staycation bookings and event inquiries."
        bgImage="/images/destinations/gruham-4.jpeg"
      />

      {/* Main Privacy Terms */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-12">
        <div className="glass-card rounded-3xl p-8 md:p-12 bg-white border border-purple-100 shadow-xl space-y-10">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-purple-950">
                1. Information Collection &amp; Usage
              </h2>
            </div>
            <p className="text-sm md:text-base text-purple-900/80 leading-relaxed font-light">
              Chazing Purple collects guest personal details (including full names, contact phone numbers, email addresses, check-in dates, guest counts, and government ID verification) solely for processing villa reservations, executing property rentals, and coordinating personalized concierge experiences.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-purple-950">
                2. Booking Security &amp; Financial Protection
              </h2>
            </div>
            <p className="text-sm md:text-base text-purple-900/80 leading-relaxed font-light">
              All financial transactions and advance booking deposits made through our payment gateways are encrypted with SSL protocol standards. We do not store sensitive credit card numbers or banking passwords on our local servers.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-purple-950">
                3. Guest Privacy &amp; Media Rights
              </h2>
            </div>
            <p className="text-sm md:text-base text-purple-900/80 leading-relaxed font-light">
              We respect your complete privacy during staycations and private celebrations. Any photography or videography captured on our premises by Chazing Purple media teams for promotional purposes is conducted only with explicit guest consent.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-purple-950">
                4. Third-Party Vendor Sharing
              </h2>
            </div>
            <p className="text-sm md:text-base text-purple-900/80 leading-relaxed font-light">
              Chazing Purple does not sell, rent, or trade guest personal information to third-party marketing companies. Information is shared strictly on a need-to-know basis with verified vendors (such as on-site chefs, decor planners, or transport coordinators) directly involved in fulfilling your staycation.
            </p>
          </div>

          <div className="pt-6 border-t border-purple-100">
            <h3 className="font-serif-display text-xl font-bold text-purple-950 mb-2">
              Contact Privacy Compliance Officer
            </h3>
            <p className="text-sm text-purple-900/70 font-light mb-4">
              For any questions or requests regarding your personal data protection, please contact us at:
            </p>
            <div className="text-sm font-semibold text-purple-950">
              Email: <a href="mailto:contactchazing@gmail.com" className="text-purple-700 underline">contactchazing@gmail.com</a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
