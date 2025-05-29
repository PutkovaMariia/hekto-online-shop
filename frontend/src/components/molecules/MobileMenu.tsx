import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../atoms/Dropdown.tsx';
import { currencies, languages } from '../../const/dropdownOptions.ts';
import TextIcon from '../atoms/TextIcon.tsx';
import NavLinks from './NavLinks.tsx';
import crossImg from '/assets/icons/cross.svg';

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}) {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        ref={menuRef}
        className="absolute top-0 right-0 w-64 h-full bg-tertiary-light shadow-lg z-50"
      >
        <button>
          <img
            src={crossImg}
            alt="Close button"
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          />
        </button>

        <div className="p-8">
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </div>

        <div className="flex flex-col gap-8 p-8">
          <div className="flex w-full pb-8" onClick={() => setIsMenuOpen(false)}>
            <Link to="/cart">
              <TextIcon
                text="Cart"
                icon="cart"
                position="after"
                className="bg-primary lg:bg-white-bright"
              />
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <TextIcon
              text="Login"
              icon="user"
              position="after"
              className="bg-primary lg:bg-white-bright"
            />
            <TextIcon
              text="Wishlist"
              icon="heart"
              position="after"
              className="bg-primary lg:bg-white-bright"
            />
          </div>

          <div className="flex items-center justify-between">
            <Dropdown
              options={languages}
              selected={selectedLang}
              onSelect={setSelectedLang}
              variant="top"
            />
            <Dropdown
              options={currencies}
              selected={selectedCurrency}
              onSelect={setSelectedCurrency}
              variant="top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
