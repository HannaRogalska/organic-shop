import { Brand } from './ui/brand';
import { CartActions } from './ui/cart-actions';
import { HeaderTopBar } from './ui/header-top-bar';
import { MainNavBar } from './ui/main-nav-bar';
import { MobileNavigation } from './ui/mobile-navigation';
import { SearchForm } from './ui/search-form';

export function Header() {
  return (
    <header>
      <HeaderTopBar />

      <div className="mx-auto flex w-full max-w-330 items-center gap-5 px-4 py-5 sm:px-6 lg:h-24 lg:justify-between lg:px-6 lg:py-0 xl:px-0">
        <Brand />
        <div className="hidden w-full max-w-130 lg:block">
          <SearchForm />
        </div>
        <CartActions />
      </div>

      <div className="px-4 pb-4 sm:px-6 lg:hidden">
        <SearchForm />
      </div>
      <MobileNavigation />
      <MainNavBar />
    </header>
  );
}
