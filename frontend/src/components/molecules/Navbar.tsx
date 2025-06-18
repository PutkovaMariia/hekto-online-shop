import hektoLogo from '/assets/hekto-logo.svg';
import NavLinks from './NavLinks.tsx';
import MenuToggleButton from '../atoms/MenuToggleButton.tsx';
import SpecificInput from './SpecificInput.tsx';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../const/navLinks.ts';

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}) {
  return (
    <nav
      className="w-full flex justify-between items-center py-3.5 px-4 sm:px-10 md:px-26 xl:px-52
        bg-white-bright transition-shadow duration-300 z-40"
    >
      <div className="flex items-center gap-6 md:gap-20">
        <NavLink to={navLinks.home.to}>
          <img
            src={hektoLogo}
            alt="Hekto Logo"
            className="header-logo cursor-pointer w-24 md:w-28"
          />
        </NavLink>
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
      </div>

      <MenuToggleButton isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      <div className="hidden lg:block lg:w-1/3 2xl:w-1/5">
        <SpecificInput variant="search" />
      </div>
    </nav>
  );
}
