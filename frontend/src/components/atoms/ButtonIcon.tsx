import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes } from 'react';

type ButtonIconProps = {
  icon: string;
  to?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const baseClasses =
  'size-8 flex items-center justify-center rounded-full hover:bg-grey-2 transition cursor-pointer';

export default function ButtonIcon({ icon, to, ...rest }: ButtonIconProps) {
  const iconStyles = {
    maskImage: `url('/assets/icons/${icon}.svg')`,
    WebkitMaskImage: `url('/assets/icons/${icon}.svg')`
  };
  const iconClasses = `size-4 bg-tertiary mask mask-no-repeat mask-center mask-contain`;

  const content = <span className={iconClasses} style={iconStyles} />;

  return to ? (
    <Link to={to} className={baseClasses}>
      {content}
    </Link>
  ) : (
    <button className={baseClasses} {...rest}>
      {content}
    </button>
  );
}
