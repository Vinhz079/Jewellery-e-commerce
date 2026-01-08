'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-banner.jpg"
          alt="OBJKTS Jewelry Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide font-['Cormorant',_serif]">
          Modern Disruptor of
          <br />
          Luxury Jewellery
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light">
          Discover our collection of exquisite travel rings and engagement pieces
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/collections/all-new-arrivals"
            className="px-8 py-4 bg-white text-gray-900 font-light tracking-wide uppercase hover:bg-gray-100 transition-colors"
          >
            Shop New Arrivals
          </Link>
          <Link
            href="/collections/engagement-rings"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-light tracking-wide uppercase hover:bg-white hover:text-gray-900 transition-colors"
          >
            Engagement Rings
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
