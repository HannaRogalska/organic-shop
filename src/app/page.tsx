import { connection } from 'next/server';
import { getPopularProducts } from '@/entities/product/api/get-popular-products';
import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { HomeHero } from '@/widgets/home-hero/home-hero';
import { FeaturedProducts } from '@/widgets/featured-products/featured-products';
import { ProfessionalMembers } from '@/widgets/professional-members/professional-members';
import { Testimonials } from '@/widgets/testimonials/testimonials';

export default async function Home() {
  await connection();
  const popularProducts = await getPopularProducts(4);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="w-full flex-1 px-4 py-15 sm:px-8 lg:px-16">
        <HomeHero />
        <FeaturedProducts products={popularProducts} />
        <ProfessionalMembers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
