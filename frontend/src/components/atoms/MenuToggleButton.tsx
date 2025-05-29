interface MenuToggleButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MenuToggleButton({ isOpen, toggleMenu }: MenuToggleButtonProps) {
  return (
    <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={toggleMenu}>
      <span
        className={`w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <span className={`w-6 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
      <span
        className={`w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </button>
  );
}
