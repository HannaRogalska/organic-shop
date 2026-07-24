import { BottomBar } from './ui/bottom-bar';
import { FooterGrid } from './ui/footer-grid';
import { Newsletter } from './ui/newsletter';

export function Footer() {
  return (
    <footer>
      <Newsletter />
      <FooterGrid />
      <BottomBar />
    </footer>
  );
}
