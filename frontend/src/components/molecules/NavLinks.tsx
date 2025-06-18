import { NavLink } from 'react-router-dom';
import { navLinks } from '../../const/navLinks.ts';

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `transition-colors ${isActive ? 'text-primary' : 'text-black'}`;

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {Object.values(navLinks).map(({ to, label }) => (
        <li key={to}>
          <NavLink to={to} className={linkClasses} onClick={onClick}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
