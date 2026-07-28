import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { HomeHero } from '@/widgets/home-hero/home-hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="w-full flex-1">
        <HomeHero />
      </main>
      <Footer />
    </div>
  );
}
