import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import Topbar from '../molecules/Topbar.tsx';
import Navbar from '../molecules/Navbar.tsx';
import ScrollToTop from '../../helpers/ScrollToTop.tsx';
import MobileMenu from '../molecules/MobileMenu.tsx';
import SpecificInput from "../molecules/SpecificInput.tsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsSticky(window.scrollY > 50);
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        ref={headerRef}
        className={`w-full bg-white-bright transition-shadow z-50 ${
          isSticky ? 'fixed top-0 shadow-md' : 'relative'
        }`}
      >
        <ScrollToTop />
        <Topbar />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {!isSticky && (
        <div className="lg:hidden px-4 sm:px-10 md:px-26 mt-4">
            <SpecificInput variant="search"/>
        </div>
      )}
    </header>
  );
}
