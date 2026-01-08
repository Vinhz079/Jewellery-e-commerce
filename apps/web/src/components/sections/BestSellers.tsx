'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const products = [
  {
    id: 1,
    name: 'Classic Travel Ring',
    price: 129,
    image: '/images/products/product-1.jpg',
    hoverImage: '/images/products/product-1-hover.jpg',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Oval Engagement Ring',
    price: 299,
    image: '/images/products/product-2.jpg',
    hoverImage: '/images/products/product-2-hover.jpg',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Tennis Bracelet',
    price: 189,
    image: '/images/products/product-3.jpg',
    hoverImage: '/images/products/product-3-hover.jpg',
    badge: null,
  },
  {
    id: 4,
    name: 'Stacking Band Set',
    price: 149,
    image: '/images/products/product-4.jpg',
    hoverImage: '/images/products/product-4-hover.jpg',
    badge: 'Sale',
  },
];

export default function BestSellers() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
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
            Best Sellers
          </h2>
          <p className={`text-gray-600 font-light max-w-2xl mx-auto transition-all duration-600 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            Our most loved pieces, handpicked by you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-600 ${
                sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={'/products/' + product.id as any}>
                {/* Product Image */}
                <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                  {/* Default Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover absolute inset-0 transition-opacity duration-500 ease-out ${
                      hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Hover Image */}
                  <Image
                    src={product.hoverImage}
                    alt={product.name}
                    fill
                    className={`object-cover absolute inset-0 transition-opacity duration-500 ease-out delay-200 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-light tracking-wide px-3 py-1 uppercase">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Add Button */}
                  <button
                    className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 py-3 font-light tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      // Add to cart logic here
                    }}
                  >
                    Quick Add
                  </button>

                  {/* Wishlist Button */}
                  <button
                    className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      // Add to wishlist logic here
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-light tracking-wide text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-light">
                    £{product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className={`inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-light tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-all duration-600 ${
              headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'
            }`}
          >
            View All Best Sellers
          </Link>
        </div>
        </div>
    </section>
  );
}
