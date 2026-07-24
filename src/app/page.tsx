import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="flex flex-1 w-full items-center justify-center">Hello</main>
      <Footer />
    </div>
  );
}
