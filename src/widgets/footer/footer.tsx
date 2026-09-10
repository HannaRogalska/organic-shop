import { BottomBar } from './ui/bottom-bar';
import { FooterGrid } from './ui/footer-grid';
import { Newsletter } from './ui/newsletter';

type FooterProps = {
  variant?: 'home' | 'inner';
};

export function Footer({ variant = 'home' }: FooterProps) {
  return (
    <footer>
      <Newsletter variant={variant} />
      <FooterGrid variant={variant} />
      <BottomBar variant={variant} />
    </footer>
  );
}
