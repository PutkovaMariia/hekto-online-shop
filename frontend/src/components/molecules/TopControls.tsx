import Dropdown from '../atoms/Dropdown';
import type { DropdownOption } from '../../types/dropdown';
import { productsPerPageOptions, productsSortOptions } from '../../const/dropdownOptions';
import VariantsTitle from '../atoms/VariantsTitle';
import LayoutSwitcher from '../atoms/LayoutSwitcher';
import { ItemCardVariants } from '../../types/itemCardVariants';

interface TopControlsProps {
  selectedPerPage: DropdownOption;
  onPerPageChange: (option: DropdownOption) => void;
  selectedSort: DropdownOption;
  onSortChange: (option: DropdownOption) => void;
  layoutVariant: ItemCardVariants;
  onLayoutChange: (variant: ItemCardVariants) => void;
}

export default function TopControls({
  selectedPerPage,
  onPerPageChange,
  selectedSort,
  onSortChange,
  layoutVariant,
  onLayoutChange
}: TopControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-end gap-x-10 2xl:gap-x-24 my-4">
      <div className="flex items-center gap-x-3">
        <VariantsTitle title="Per Page" />
        <div>
          <Dropdown
            options={productsPerPageOptions}
            selected={selectedPerPage}
            onSelect={(option) => onPerPageChange(option)}
            variant="filter"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <VariantsTitle title="Sort By" />
        <div>
          <Dropdown
            options={productsSortOptions}
            selected={selectedSort}
            onSelect={onSortChange}
            variant="filter"
          />
        </div>
      </div>
      <LayoutSwitcher currentVariant={layoutVariant} onChange={onLayoutChange} />
    </div>
  );
}
