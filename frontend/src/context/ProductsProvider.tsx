import { useState, useRef, ReactNode } from 'react';
import { ProductsContext } from './ProductsContext';
import { Product } from '../types/product';
import { API_PRODUCTS_URL } from '../const/consts.ts';
import { FilterOptions, PriceFilter } from '../types/filterOptions.ts';
import { isPlainObject } from '../helpers/isPlainObject.tsx';

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [productsCache, setProductsCache] = useState<Record<string, Product[]>>({});
  const [totalCountCache, setTotalCountCache] = useState<Record<string, number>>({});
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);
  const pendingRequests = useRef(new Set<string>());

  const fetchProducts = async (filters: FilterOptions): Promise<void> => {
    const filterKey = JSON.stringify(filters);

    if (productsCache[filterKey] || pendingRequests.current.has(filterKey)) {
      return;
    }

    pendingRequests.current.add(filterKey);
    setLoadingMap((prev) => ({ ...prev, [filterKey]: true }));
    setError(null);

    try {
      const params = new URLSearchParams();

      for (const [key, value] of Object.entries(filters)) {
        if (value === null) continue;

        if (key === 'price' && isPlainObject(value)) {
          const { min, max } = value as PriceFilter;
          if (min !== null) params.append('price_gte', String(min));
          if (max !== null) params.append('price_lte', String(max));
          continue;
        }

        params.append(key, String(value));
      }

      const response = await fetch(`${API_PRODUCTS_URL}${params.toString()}`);
      if (!response.ok) {
        setError('Failed to fetch data');
        return;
      }

      const fetchedProducts: Product[] = await response.json();
      setProductsCache((prevCache) => ({
        ...prevCache,
        [filterKey]: fetchedProducts
      }));

      const totalCountHeader = response.headers.get('X-Total-Count');
      const totalCount = totalCountHeader ? Number(totalCountHeader) : 0;
      setTotalCountCache((prev) => ({
        ...prev,
        [filterKey]: totalCount
      }));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      pendingRequests.current.delete(filterKey);
      setLoadingMap((prev) => ({ ...prev, [filterKey]: false }));
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        productsCache,
        totalCountCache,
        loadingMap,
        error,
        fetchProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
