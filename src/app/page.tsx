import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { ProductCard } from '@/entities/product/ui/product-card';

const featuredProduct = {
  id: 'organic-green-apple',
  title: 'Green Apple',
  image: '/images/product/green-apple.png',
  price: 14.99,
  rating: 4,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="flex flex-1 w-full items-center justify-center">
        <ProductCard product={featuredProduct} />
      </main>
      <Footer />
    </div>
  );
}
