"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 font-['Montserrat',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif]">
      {/* Main Navigation Bar */}
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Left Section - Hamburger Menu (Mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-gray-900 hover:text-gray-700 transition-colors">
                OBJKTS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link 
              href="#" 
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase"
            >
              Shop
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase"
            >
              Collections
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase"
            >
              Rings
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase"
            >
              Necklaces
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase"
            >
              Bracelets
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase"
            >
              About
            </Link>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6 flex-1 justify-end">
            
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Account Icon */}
            <Link 
              href="#" 
              className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Account"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Shopping Cart Icon with Badge */}
            <Link 
              href="#" 
              className="relative p-2 text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Shopping cart"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Currency Selector (Desktop) */}
            <button 
              className="hidden lg:flex items-center space-x-1 text-sm text-gray-800 hover:text-gray-600 transition-colors font-semibold"
              aria-label="Select currency"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 9h20" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="font-semibold">GB</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Search Bar Dropdown */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-4 text-lg border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="#" 
              className="block text-base font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="#" 
              className="block text-base font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              href="#" 
              className="block text-base font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rings
            </Link>
            <Link 
              href="#" 
              className="block text-base font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link 
              href="#" 
              className="block text-base font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Bracelets
            </Link>
            <Link 
              href="/about" 
              className="block text-base font-semibold tracking-wide text-gray-800 hover:text-gray-600 transition-colors uppercase py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Currency Selector (Mobile) */}
            <button className="flex items-center space-x-2 text-base text-gray-800 hover:text-gray-600 transition-colors py-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 9h20" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="font-semibold">GB - United Kingdom (GBP £)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}