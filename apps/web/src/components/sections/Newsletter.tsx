'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '50px 0px'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing! Check your email for exclusive offers.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'translate-y-8'}`}>
          Join Our Community
        </h2>
        <p className={`text-white/80 font-light text-lg mb-8 max-w-2xl mx-auto transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up stagger-1' : 'translate-y-8'}`}>
          Be the first to know about new collections, exclusive offers, and jewelry care tips
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className={`max-w-xl mx-auto mb-6 transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up stagger-2' : 'translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-white text-gray-900 font-light tracking-wide uppercase hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {message && (
          <p className="text-white/90 font-light mb-6">{message}</p>
        )}

        {/* Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 transition-transform duration-700 ${sectionVisible ? '' : 'translate-y-8'}`}>
          <div className={`flex flex-col items-center transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up stagger-3' : 'translate-y-8'}`}>
            <svg
              className="w-12 h-12 mb-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <h3 className="text-lg font-light tracking-wide mb-2">Exclusive Offers</h3>
            <p className="text-white/70 font-light text-sm">
              Get 10% off your first order when you subscribe
            </p>
          </div>

          <div className={`flex flex-col items-center transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up stagger-4' : 'translate-y-8'}`}>
            <svg
              className="w-12 h-12 mb-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-lg font-light tracking-wide mb-2">Early Access</h3>
            <p className="text-white/70 font-light text-sm">
              Be the first to shop new collections and limited editions
            </p>
          </div>

          <div className={`flex flex-col items-center transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'translate-y-8'}`} style={{ animationDelay: sectionVisible ? '1.2s' : '0s' }}>
            <svg
              className="w-12 h-12 mb-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-lg font-light tracking-wide mb-2">Jewelry Tips</h3>
            <p className="text-white/70 font-light text-sm">
              Expert advice on care, styling, and trends
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={`flex justify-center gap-6 mt-12 transition-transform duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'translate-y-8'}`} style={{ animationDelay: sectionVisible ? '1.4s' : '0s' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Pinterest"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </a>
        </div>
        </div>
    </section>
  );
}
