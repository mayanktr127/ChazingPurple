import type { Metadata } from 'next';
import './globals.css';
import FloatingSocialDock from '@/components/FloatingSocialDock';
import FloatingChatbot from '@/components/FloatingChatbot';

export const metadata: Metadata = {
  title: 'Chazing Purple — Luxury Retreats & Event Studio',
  description: 'Turning your wedding dreams and retreat experiences into ultimate reality. High-end luxury farmhouses, event planning, and styling.',
  keywords: ['wedding planner', 'luxury retreats', 'farmhouse Bangalore', 'event planner', 'Chazing Purple'],
  openGraph: {
    title: 'Chazing Purple — Luxury Retreats & Event Studio',
    description: 'Turning your wedding dreams into ultimate reality.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-purple-200 selection:text-purple-900">
        {children}
        {/* Left Side Social Media Floating Contact Dock */}
        <FloatingSocialDock />
        {/* Right Side AI Concierge Chatbot Widget */}
        <FloatingChatbot />
      </body>
    </html>
  );
}
