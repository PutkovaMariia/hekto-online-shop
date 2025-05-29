import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, PHONE_NUMBER } from '../../const/consts.ts';
import { languages, currencies } from '../../const/dropdownOptions.ts';
import Dropdown from '../atoms/Dropdown.tsx';
import TextIcon from '../atoms/TextIcon.tsx';
import cartImg from '/assets/icons/cart.svg';

export default function Topbar() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div className="hidden lg:flex justify-between items-center py-3.5 px-26 xl:px-52 bg-tertiary text-white-bright font-semibold text-base">
      <div className="flex gap-12">
        <a href={`mailto:${CONTACT_EMAIL}`}>
          <TextIcon
            text={CONTACT_EMAIL}
            icon="envelope"
            position="before"
            className="bg-primary lg:bg-white-bright"
          />
        </a>
        <a href={`tel:${PHONE_NUMBER}`}>
          <TextIcon
            text={PHONE_NUMBER}
            icon="phone"
            position="before"
            className="bg-primary lg:bg-white-bright"
          />
        </a>
      </div>

      <div className="flex gap-8 items-center">
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
        <Link to="/cart">
          <img src={cartImg} alt="Cart Icon" className="size-4 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
