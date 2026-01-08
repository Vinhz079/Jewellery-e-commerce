'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 5,
    review: 'Absolutely stunning quality! The travel ring exceeded all my expectations. Perfect for everyday wear and it still looks brand new after months of use.',
    image: '/images/testimonials/customer-1.jpg',
    product: 'Classic Travel Ring',
  },
  {
    id: 2,
    name: 'James Peterson',
    rating: 5,
    review: 'Bought an engagement ring here and my fiancée is over the moon! The customer service was exceptional and the ring is simply breathtaking.',
    image: '/images/testimonials/customer-2.jpg',
    product: 'Oval Engagement Ring',
  },
  {
    id: 3,
    name: 'Emily Chen',
    rating: 5,
    review: 'The tennis bracelet is everything I wanted and more. Beautiful craftsmanship, arrives in gorgeous packaging, and the sparkle is incredible!',
    image: '/images/testimonials/customer-3.jpg',
    product: 'Tennis Bracelet',
  },
  {
    id: 4,
    name: 'Michael Brown',
    rating: 5,
    review: "As someone who's picky about jewelry, I'm thoroughly impressed. The quality rivals luxury brands at a fraction of the price.",
    image: '/images/testimonials/customer-4.jpg',
    product: "Men's Collection",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-25px 0px'
  });
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-25px 0px'
  });
  const { ref: badgesRef, isIntersecting: badgesVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-25px 0px'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 transition-all duration-600 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            What Our Customers Say
          </h2>
          <div className={`flex items-center justify-center gap-2 mb-4 transition-all duration-600 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 font-light ml-2">5.0 from 2,500+ reviews</span>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className={`relative transition-all duration-600 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-6 italic">
                      "{testimonial.review}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-light text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 font-light">Verified Purchase · {testimonial.product}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-gray-900 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div ref={badgesRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className={`text-center transition-all duration-600 ${badgesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            <div className="text-3xl font-light mb-2">2,500+</div>
            <div className="text-sm text-gray-600 font-light">5-Star Reviews</div>
          </div>
          <div className={`text-center transition-all duration-600 ${badgesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            <div className="text-3xl font-light mb-2">50K+</div>
            <div className="text-sm text-gray-600 font-light">Happy Customers</div>
          </div>
          <div className={`text-center transition-all duration-600 ${badgesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            <div className="text-3xl font-light mb-2">Lifetime</div>
            <div className="text-sm text-gray-600 font-light">Warranty</div>
          </div>
          <div className={`text-center transition-all duration-600 ${badgesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
            <div className="text-3xl font-light mb-2">60 Days</div>
            <div className="text-sm text-gray-600 font-light">Returns</div>
          </div>
        </div>
        </div>
    </section>
  );
}
