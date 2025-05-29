import { useContext, useMemo, useEffect, useCallback } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import type { FilterOptions } from '../types/filterOptions';

export function useProducts(filters: FilterOptions) {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider!');
  }

  const { totalCountCache, productsCache, loadingMap, error, fetchProducts } = context;

  const filterKey = JSON.stringify(filters);
  const cachedProducts = productsCache[filterKey];
  const totalCount = totalCountCache[filterKey] ?? 0;

  const fetchFilteredProducts = useCallback(async () => {
    if (!cachedProducts) {
      await fetchProducts(filters);
    }
  }, [cachedProducts, filters, fetchProducts]);

  useEffect(() => {
    void fetchFilteredProducts();
  }, [fetchFilteredProducts]);

  const filteredProducts = useMemo(() => cachedProducts ?? [], [cachedProducts]);
  const loading = loadingMap[filterKey];

  return { products: filteredProducts, loading, error, totalCount };
}
