'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Craftsmanship',
      description: 'Every piece is meticulously crafted by skilled artisans who pour their expertise into creating jewelry that stands the test of time.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'We use lab-grown diamonds and ethically sourced materials, creating stunning jewelry while protecting our planet for future generations.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Authenticity',
      description: 'Our designs celebrate individual stories and genuine connections, moving beyond trends to create pieces that resonate with personal meaning.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We challenge traditional luxury jewelry conventions, using cutting-edge technology and modern design to create accessible elegance.',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded with a vision to democratize luxury jewelry. Started in a small studio with a commitment to quality and innovation.',
    },
    {
      year: '2019',
      title: 'Travel Ring Collection',
      description: 'Launched our signature travel rings, revolutionizing how people think about everyday luxury jewelry.',
    },
    {
      year: '2021',
      title: 'Sustainable Commitment',
      description: 'Transitioned to 100% lab-grown diamonds and launched our sustainability initiative.',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Reached customers in over 50 countries, bringing our vision of accessible luxury worldwide.',
    },
    {
      year: '2024',
      title: 'Innovation Award',
      description: 'Recognized as a leading disruptor in the luxury jewelry industry for our commitment to sustainability and design.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: '/images/team/sarah.jpg',
      bio: 'Former jewelry designer with 15 years of experience in luxury brands.',
    },
    {
      name: 'Michael Roberts',
      role: 'Creative Director',
      image: '/images/team/michael.jpg',
      bio: 'Award-winning designer passionate about modern elegance.',
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Sustainability',
      image: '/images/team/emma.jpg',
      bio: 'Environmental scientist dedicated to ethical jewelry production.',
    },
    {
      name: 'David Park',
      role: 'Chief Craftsman',
      image: '/images/team/david.jpg',
      bio: 'Master jeweler with expertise in traditional and modern techniques.',
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500&family=Montserrat:wght@300;400&display=swap');
          
          .about-page h1,
          .about-page h2 {
            font-family: 'Cormorant', serif;
          }
          
          .about-page {
            font-family: 'Montserrat', sans-serif;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animate-fade-in-delay {
            animation: fadeInUp 1s ease-out 0.3s forwards;
            opacity: 0;
          }

          @keyframes customBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-custom-bounce {
            animation: customBounce 2s infinite;
          }
        `
      }} />
      
      <div className="about-page min-h-screen bg-white">
        
        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <Image
              src="/images/hero-about.jpg"
              alt="OBJKTS Jewelry Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide animate-fade-in">
              Redefining
              <br />
              Luxury Jewelry
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-fade-in-delay">
              Where timeless craftsmanship meets contemporary design
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-custom-bounce">
            <div className="flex flex-col items-center gap-2 text-white">
              <span className="text-sm font-light tracking-widest uppercase">Scroll</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Content */}
              <div className="space-y-6">
                <span className="text-sm tracking-widest uppercase text-gray-500 font-light">Our Story</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
                  A Modern Approach to Timeless Beauty
                </h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed text-lg">
                  <p>
                    OBJKTS was born from a simple belief: luxury jewelry should be accessible, sustainable, and meaningful. We saw an industry bound by tradition and high markups, and we knew there was a better way.
                  </p>
                  <p>
                    By combining cutting-edge technology with traditional craftsmanship, we create pieces that honor the artistry of jewelry making while embracing modern values of sustainability and transparency.
                  </p>
                  <p>
                    Every piece tells a story—not just ours, but yours. Whether it&apos;s an engagement ring that marks a new chapter, a travel ring that accompanies your adventures, or a gift that celebrates a special moment, our jewelry becomes part of your life&apos;s most precious memories.
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href="#"
                    className="inline-block px-8 py-4 bg-gray-900 text-white font-light tracking-wide uppercase hover:bg-gray-800 transition-colors"
                  >
                    Explore Our Collections
                  </Link>
                </div>
              </div>

              {/* Right: Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/about-1.jpg"
                      alt="Craftsmanship"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/about-2.jpg"
                      alt="Design Process"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/about-3.jpg"
                      alt="Jewelry Detail"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/about-4.jpg"
                      alt="Studio"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-gray-500 font-light">Our Values</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mt-4 mb-6">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Our core principles guide everything we do, from design to delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-gray-900 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-light tracking-wide mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-gray-500 font-light">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mt-4">
                Growing Together
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    onMouseEnter={() => setActiveTimeline(index)}
                  >
                    {/* Year Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div 
                        className={`w-4 h-4 rounded-full border-4 border-white transition-all duration-300 ${
                          activeTimeline === index ? 'bg-gray-900 scale-150' : 'bg-gray-300'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <div className="bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                        <span className="text-3xl font-light text-gray-900 block mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-light tracking-wide mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-gray-500 font-light">Our Team</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mt-4 mb-6">
                Meet The Makers
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Passionate individuals united by a love for beautiful jewelry
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-light tracking-wide mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-3 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-3">50K+</div>
                <div className="text-sm md:text-base text-white/70 font-light tracking-wide uppercase">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-3">100%</div>
                <div className="text-sm md:text-base text-white/70 font-light tracking-wide uppercase">
                  Lab-Grown Diamonds
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-3">50+</div>
                <div className="text-sm md:text-base text-white/70 font-light tracking-wide uppercase">
                  Countries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-3">4.9</div>
                <div className="text-sm md:text-base text-white/70 font-light tracking-wide uppercase">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about-commitment.jpg"
                  alt="Our Commitment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                <span className="text-sm tracking-widest uppercase text-gray-500 font-light">Our Commitment</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
                  Building a Better Future
                </h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                  <p className="text-lg">
                    We believe luxury and sustainability can coexist. That&apos;s why every decision we make—from sourcing materials to packaging—is guided by our commitment to environmental responsibility.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-light tracking-wide mb-1">Carbon Neutral Shipping</h4>
                      <p className="text-sm text-gray-600 font-light">All deliveries offset through verified carbon programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-light tracking-wide mb-1">Recycled Packaging</h4>
                      <p className="text-sm text-gray-600 font-light">100% recyclable and biodegradable materials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-light tracking-wide mb-1">Ethical Sourcing</h4>
                      <p className="text-sm text-gray-600 font-light">Transparent supply chain with fair labor practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-light tracking-wide mb-1">Lifetime Warranty</h4>
                      <p className="text-sm text-gray-600 font-light">We stand behind every piece we create</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link 
                    href="#"
                    className="inline-flex items-center text-gray-900 font-light tracking-wide uppercase text-sm hover:text-gray-600 transition-colors"
                  >
                    <span>Learn More About Our Practices</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
              Join thousands of customers who have chosen meaningful, sustainable luxury
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="px-8 py-4 bg-white text-gray-900 font-light tracking-wide uppercase hover:bg-gray-100 transition-colors"
              >
                Shop Collections
              </Link>
              <Link
                href="#"
                className="px-8 py-4 border-2 border-white text-white font-light tracking-wide uppercase hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}