export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export const priceOptions: PriceRange[] = [
  { label: '$0 - $150', min: 0, max: 150 },
  { label: '$150 - $350', min: 150, max: 350 },
  { label: '$350 - $500', min: 350, max: 500 },
  { label: '$500 - $800', min: 500, max: 800 },
  { label: '$800+', min: 800, max: 6500 }
];

export type MultiSelectFilterKeys = 'brand' | 'category' | 'rating' | 'price';

export type PriceFilter = { min?: number; max?: number };

export interface FilterOptions {
  isFeatured?: boolean;
  brand?: string[];
  category?: string[];
  colors?: string[];
  rating?: string[];
  price?: PriceFilter | undefined;
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
}
