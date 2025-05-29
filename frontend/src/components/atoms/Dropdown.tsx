import { useState, useRef } from 'react';
import type { FocusEvent } from 'react';
import type { DropdownOption, DropdownProps } from '../../types/dropdown';

export type DropdownVariant = 'top' | 'filter';

export interface ExtendedDropdownProps extends DropdownProps {
  variant?: DropdownVariant;
}

const buttonBaseClass =
  'flex items-center px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer';
const topVariantClasses = 'bg-transparent gap-x-1';
const topVariantClassesArrow = 'after:bg-primary lg:after:bg-grey-1';
const filterVariantClasses =
  'gap-x-4 text-black font-lato font-normal text-sm border rounded-lg px-3 py-2 border-grey-2 bg-white-bright';
const filterVariantClassesArrow = 'after:bg-black';

const listBaseClasses =
  'absolute mt-1 border border-grey-2 shadow-md rounded-xl overflow-hidden z-50 w-full';

export default function Dropdown({
  options,
  selected,
  onSelect,
  variant = 'filter'
}: ExtendedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const buttonClasses = variant === 'top' ? topVariantClasses : filterVariantClasses;
  const listClasses =
    variant === 'top'
      ? 'bg-transparent lg:bg-tertiary'
      : 'bg-white-bright text-black font-lato font-normal text-sm';
  const arrowClasses = variant === 'top' ? topVariantClassesArrow : filterVariantClassesArrow;

  function handleClickOutside(event: FocusEvent<HTMLDivElement>) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
    }
  }

  function handleOptionSelect(option: DropdownOption) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative" tabIndex={0} onBlur={handleClickOutside}>
      <button
        className={`${buttonBaseClass} ${buttonClasses}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected.label}
        <span
          className={`flex items-center transition-transform duration-300
                      after:content-[''] after:size-4 ${arrowClasses}
                      after:mask after:[mask-image:url('assets/icons/chevron-down.svg')]
                    ${isOpen ? 'rotate-180' : ''}`}
        ></span>
      </button>

      {isOpen && (
        <ul className={`${listBaseClasses} ${listClasses}`}>
          {options.map((option) => (
            <li
              key={option.code}
              className="px-4 py-2 hover:bg-tertiary-light hover:rounded-xl hover:text-tertiary cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
