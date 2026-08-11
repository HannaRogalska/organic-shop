import { connection } from 'next/server';
import { getHotDeals } from '@/entities/product/api/get-hot-deals';
import { getPopularProducts } from '@/entities/product/api/get-popular-products';
import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { HomeHero } from '@/widgets/home-hero/home-hero';
import { FeaturedProducts } from '@/widgets/featured-products/featured-products';
import { ProfessionalMembers } from '@/widgets/professional-members/professional-members';
import { Testimonials } from '@/widgets/testimonials/testimonials';
import { Sponsors } from '@/widgets/sponsors/sponsors';

export default async function Home() {
  await connection();
  const [popularProducts, hotDeals] = await Promise.all([getPopularProducts(4), getHotDeals(3)]);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="w-full flex-1 px-4 py-15 sm:px-8 lg:px-16">
        <HomeHero />
        <FeaturedProducts products={popularProducts} hotDeals={hotDeals} />
        <ProfessionalMembers />
        <Testimonials />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
