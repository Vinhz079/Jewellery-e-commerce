import {
  HeroSection,
  FeaturedCollections,
  ShopByCategory,
  BestSellers,
  EngagementRingShowcase,
  Testimonials,
  Newsletter,
  Footer
} from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <ShopByCategory />
      <BestSellers />
      <EngagementRingShowcase />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}