import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  variant: 'big' | 'small';
  text: string;
  to?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const baseClasses = 'text-white-bright rounded-lg w-fit font-semibold';

export default function ButtonBase({ variant, text, to, ...rest }: ButtonProps) {
  const sizeClasses =
    variant === 'big'
      ? 'bg-primary text-sm lg:text-base px-5 lg:px-10 py-2 lg:py-4'
      : 'bg-success text-xs lg:text-sm px-2 lg:px-4 py-1.5 lg:py-3';

  const className = `cursor-pointer ${baseClasses} ${sizeClasses}`;

  return to ? (
    <Link to={to} className={className}>
      {text}
    </Link>
  ) : (
    <button className={className} {...rest}>
      {text}
    </button>
  );
}
