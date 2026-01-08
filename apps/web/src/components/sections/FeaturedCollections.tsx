'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const collections = [
  {
    title: 'Now Trending',
    image: '/images/collections/trending.jpg',
    link: '#',
  },
  {
    title: 'Travel Rings',
    image: '/images/collections/travel-rings.jpg',
    link: '#',
  },
  {
    title: 'The Duo Set',
    image: '/images/collections/duo-set.jpg',
    link: '#',
  },
  {
    title: 'New Collection',
    image: '/images/collections/mens.jpg',
    link: '#',
  },
];

export default function FeaturedCollections() {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-25px 0px'
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 transition-all duration-600 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            Featured Collections
          </h2>
          <p className={`text-gray-600 font-light max-w-2xl mx-auto transition-all duration-600 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            Explore our carefully curated collections of fine jewelry
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.link as any}
              className={`group relative overflow-hidden aspect-[3/4] bg-gray-100 transition-all duration-600 ${
                sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'
              }`}
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                  {collection.title}
                </h3>
                <div className="mt-2 flex items-center text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Shop Now</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
