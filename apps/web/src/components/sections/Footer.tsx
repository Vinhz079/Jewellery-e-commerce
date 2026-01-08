'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Footer() {
  const { ref: footerRef, isIntersecting: footerVisible } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '100px 0px'
  });

  return (
    <footer ref={footerRef} className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 transition-transform duration-700 ${footerVisible ? 'animate-fade-in-up' : 'translate-y-8'}`}>
          
          {/* Brand Section */}
          <div className={`lg:col-span-2 transition-transform duration-700 ${footerVisible ? 'animate-fade-in-up stagger-1' : 'translate-y-8'}`}>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-light tracking-[0.2em] text-gray-900">
                OBJKTS
              </span>
            </Link>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              Modern luxury jewelry crafted for the contemporary individual. From engagement rings to everyday pieces, discover timeless designs that celebrate your unique style.
            </p>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xs text-gray-500 font-light">We accept:</div>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold">VISA</span>
                </div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold">MC</span>
                </div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold">AMEX</span>
                </div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold">PP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className={`transition-transform duration-700 ${footerVisible ? 'animate-fade-in-up stagger-2' : 'translate-y-8'}`}>
            <h3 className="text-sm font-light tracking-wide uppercase text-gray-900 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Engagement Rings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Travel Rings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Wedding Bands
                </Link>
              </li>
              <li>
                <Link href="#men" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className={`transition-transform duration-700 ${footerVisible ? 'animate-fade-in-up stagger-3' : 'translate-y-8'}`}>
            <h3 className="text-sm font-light tracking-wide uppercase text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#help-1" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#shipping" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#returns" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#ring-guide" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Ring Size Guide
                </Link>
              </li>
              <li>
                <Link href="#care-guide" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link href="#warranty" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className={`transition-transform duration-700 ${footerVisible ? 'animate-fade-in-up stagger-4' : 'translate-y-8'}`}>
            <h3 className="text-sm font-light tracking-wide uppercase text-gray-900 mb-4">
              About OBJKTS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#the-objkts-edit" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  The OBJKTS Edit
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#press" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#affiliates" className="text-gray-600 hover:text-gray-900 font-light text-sm transition-colors">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-gray-500 font-light text-center md:text-left">
              © {new Date().getFullYear()} OBJKTS Jewelry. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms-of-service" className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookie-policy" className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Social Media Links */}
            <div className={`flex gap-4 transition-transform duration-700 ${footerVisible ? 'animate-fade-in-up stagger-5' : 'translate-y-8'}`}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
    </footer>
  );
}
