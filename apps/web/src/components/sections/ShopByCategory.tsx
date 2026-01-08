'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const categories = [
  {
    title: 'Rings',
    link: '/collections/rings',
    image: '/images/categories/rings.jpg',
  },
  {
    title: 'Bracelets',
    link: '/collections/bracelets',
    image: '/images/categories/bracelets.jpg',
  },
  {
    title: 'Necklaces',
    link: '/collections/necklaces',
    image: '/images/categories/necklaces.jpg',
  },
  {
    title: 'Earrings',
    link: '/collections/earrings',
    image: '/images/categories/earrings.jpg',
  },
  {
    title: 'Bundles & Sets',
    link: '/collections/bundles-sets',
    image: '/images/categories/bundles-sets.jpg',
  },
];

export default function ShopByCategory() {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
  });
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px 0px'
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 transition-transform duration-700 ${headerVisible ? 'animate-fade-in-up' : 'translate-y-8'}`}>
            Shop By Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className={`group transition-transform duration-700 ${
                sectionVisible ? 'animate-fade-in-up' : 'translate-y-8'
              } ${sectionVisible ? `stagger-${(index % 4) + 1}` : ''}`}
            >
              <div className="relative aspect-square mb-3 overflow-hidden rounded-full bg-white">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-sm md:text-base font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/collections/shop-all"
            className={`inline-flex items-center text-gray-900 font-light tracking-wide uppercase text-sm hover:text-gray-600 transition-all duration-700 ${
              headerVisible ? 'animate-fade-in-up stagger-2' : 'translate-y-8'
            }`}
          >
            <span>View All Collections</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        </div>
    </section>
  );
}
