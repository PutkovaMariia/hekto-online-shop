import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `transition-colors ${isActive ? 'text-primary' : 'text-black'}`;

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {navLinks.map(({ to, label }) => (
        <li key={to}>
          <NavLink to={to} className={linkClasses} onClick={onClick}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
