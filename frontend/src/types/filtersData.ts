export interface FiltersData {
  price: { label: string; min: number; max: number };
  brand: { label: string; values: string[] };
  category: { label: string; values: string[] };
  colors: { label: string; values: string[] };
  rating: { label: string; values: number[] };
}
