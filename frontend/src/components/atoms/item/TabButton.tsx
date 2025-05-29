import { ButtonHTMLAttributes, ReactNode } from 'react';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  children: ReactNode;
}

export default function TabButton({ children, isSelected, ...props }: TabButtonProps) {
  return (
    <li>
      <button
        {...props}
        className={`font-lato font-normal text-lg cursor-pointer transition-colors ${
          isSelected ? 'text-primary' : 'text-black'
        }`}
      >
        {children}
      </button>
    </li>
  );
}
