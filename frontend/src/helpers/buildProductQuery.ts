import type { FilterOptions, MultiSelectFilterKeys } from '../types/filterOptions';

export function buildProductQuery(
  selectedFilters: FilterOptions,
  page: number,
  productsPerPage: number
): FilterOptions {
  const query: FilterOptions = {
    ...selectedFilters,
    _page: page,
    _limit: productsPerPage
  };

  delete query.rating;

  (['category', 'brand', 'rating'] as Exclude<MultiSelectFilterKeys, 'price'>[]).forEach((key) => {
    if (Array.isArray(query[key]) && query[key]!.length === 0) {
      delete query[key];
    }
  });
  return query;
}
