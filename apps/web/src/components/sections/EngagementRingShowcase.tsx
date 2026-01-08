'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const shapes = [
  { name: 'Round', image: '/images/shapes/round.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Round' },
  { name: 'Oval', image: '/images/shapes/oval.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Oval' },
  { name: 'Radiant', image: '/images/shapes/radiant.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Radiant' },
  { name: 'Pear', image: '/images/shapes/pear.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Pear' },
  { name: 'Emerald', image: '/images/shapes/emerald.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Emerald' },
  { name: 'Cushion', image: '/images/shapes/cushion.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Cushion' },
  { name: 'Marquise', image: '/images/shapes/marquise.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Marquise' },
  { name: 'Princess', image: '/images/shapes/princess.png', link: '/collections/engagement-rings/?filter.p.m.custom.shop_by_shape=Princess' },
];

export default function EngagementRingShowcase() {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
  });
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px 0px'
  });
  const { ref: featureRef, isIntersecting: featureVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px'
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 transition-transform duration-700 ${headerVisible ? 'animate-fade-in-up' : 'translate-y-8'}`}>
            Find Your Perfect Engagement Ring
          </h2>
          <p className={`text-gray-600 font-light max-w-2xl mx-auto mb-8 transition-transform duration-700 ${headerVisible ? 'animate-fade-in-up stagger-1' : 'translate-y-8'}`}>
            Shop by diamond shape and discover the ring that tells your unique love story
          </p>
        </div>

        {/* Shapes Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-12">
          {shapes.map((shape, index) => (
            <Link
              key={index}
              href={shape.link}
              className={`group flex flex-col items-center transition-transform duration-700 ${
                sectionVisible ? 'animate-fade-in-up' : 'translate-y-8'
              } ${sectionVisible ? `stagger-${(index % 4) + 1}` : ''}`}
            >
              <div className="w-full aspect-square bg-white rounded-lg p-4 mb-3 transition-all duration-300 group-hover:shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={shape.image}
                    alt={shape.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-sm font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">
                {shape.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Feature Highlights */}
        <div ref={featureRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Left: Image */}
          <div className={`relative aspect-[4/5] overflow-hidden transition-transform duration-700 ${featureVisible ? 'animate-slide-in-left' : 'translate-x-8'}`}>
            <Image
              src="/images/engagement-feature.jpg"
              alt="Engagement Ring Collection"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className={`flex flex-col justify-center transition-transform duration-700 ${featureVisible ? 'animate-slide-in-right stagger-1' : '-translate-x-8'}`}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-6">
              Crafted for Your Forever Moment
            </h3>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              Each engagement ring is meticulously crafted with the finest materials and attention to detail. Choose from various carat sizes, settings, and styles to create a ring as unique as your love story.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 font-light">Lab-grown diamonds with D-F color grade</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 font-light">Lifetime warranty and resizing</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 font-light">60-day returns with free shipping</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/collections/engagement-rings"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-light tracking-wide uppercase text-center hover:bg-gray-800 transition-colors"
              >
                Shop Engagement Rings
              </Link>
              <Link
                href="/pages/ring-guide"
                className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-light tracking-wide uppercase text-center hover:bg-gray-900 hover:text-white transition-colors"
              >
                Ring Size Guide
              </Link>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
