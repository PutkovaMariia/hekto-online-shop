import type { FiltersData } from '../../types/filtersData';

import { CheckboxGroup } from './CheckboxGroup';

import { MultiSelectFilterKeys, priceOptions, PriceRange } from '../../types/filterOptions.ts';

interface FiltersPanelProps {
  filters: FiltersData;
  selectedFilters: Partial<Record<Exclude<MultiSelectFilterKeys, 'price'>, string[]>>;
  onFilterChange: (key: Exclude<MultiSelectFilterKeys, 'price'>, vals: string[]) => void;
  selectedPriceRanges: PriceRange[];
  onPriceChange: (ranges: PriceRange[]) => void;
}

export function FiltersPanel({
  filters,
  selectedFilters,
  onFilterChange,
  selectedPriceRanges,
  onPriceChange
}: FiltersPanelProps) {
  const configs = [
    {
      label: filters.brand.label,
      options: filters.brand.values,
      selected: selectedFilters.brand || [],
      onChange: (vals: string[]) => onFilterChange('brand', vals),
      colorClass: 'bg-info-light peer-checked:bg-info'
    },
    {
      label: filters.category.label,
      options: filters.category.values,
      selected: selectedFilters.category || [],
      onChange: (vals: string[]) => onFilterChange('category', vals),
      colorClass: 'bg-danger-light peer-checked:bg-primary'
    },
    {
      label: 'Price',
      options: priceOptions,
      selected: selectedPriceRanges,
      onChange: onPriceChange,
      renderOption: (p: PriceRange) => p.label,
      colorClass: 'bg-danger-light peer-checked:bg-primary'
    },
    {
      label: filters.rating.label,
      options: filters.rating.values.map(String),
      selected: selectedFilters.rating || [],
      onChange: (vals: string[]) => onFilterChange('rating', vals),
      renderOption: (opt: string) => opt,
      colorClass: 'bg-info-light peer-checked:bg-info'
    }
  ];

  return (
    <div>
      {configs.map((cfg, i) => (
        <CheckboxGroup
          key={i}
          label={cfg.label}
          options={cfg.options}
          selectedValues={cfg.selected}
          onChange={cfg.onChange}
          renderOption={cfg.renderOption}
          colorClass={cfg.colorClass}
        />
      ))}
    </div>
  );
}
