import { ItemCardVariants } from '../../types/itemCardVariants';
import VariantsTitle from './VariantsTitle.tsx';

interface LayoutSwitcherProps {
  currentVariant: ItemCardVariants;
  onChange: (variant: ItemCardVariants) => void;
}

export default function LayoutSwitcher({ currentVariant, onChange }: LayoutSwitcherProps) {
  return (
    <div className="flex gap-x-4 items-center justify-center">
      <VariantsTitle title="View" />
      <button
        onClick={() => onChange(ItemCardVariants.BASIC_VERTICAL)}
        className={`flex items-center justify-center cursor-pointer ${currentVariant === ItemCardVariants.BASIC_VERTICAL ? 'text-primary' : 'text-black'}`}
      >
        <span
          className="w-4 h-4 inline-block bg-current mask mask-no-repeat mask-center mask-contain"
          style={{
            maskImage: "url('assets/icons/view-grid.svg')",
            WebkitMaskImage: "url('assets/icons/view-grid.svg')"
          }}
        ></span>
      </button>
      <button
        onClick={() => onChange(ItemCardVariants.BASIC_HORIZONTAL)}
        className={`flex items-center justify-center cursor-pointer ${currentVariant === ItemCardVariants.BASIC_HORIZONTAL ? 'text-primary' : 'text-black'}`}
      >
        <span
          className="w-4 h-4 inline-block bg-current mask mask-no-repeat mask-center mask-contain"
          style={{
            maskImage: "url('assets/icons/view-list.svg')",
            WebkitMaskImage: "url('assets/icons/view-list.svg')"
          }}
        ></span>
      </button>
    </div>
  );
}
