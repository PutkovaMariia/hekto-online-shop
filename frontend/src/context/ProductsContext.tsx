import { createContext } from 'react';
import { Product } from '../types/product';
import { FilterOptions } from '../types/filterOptions.ts';

export type ProductsCache = Record<string, Product[]>;
export type TotalCountCache = Record<string, number>;

export interface ProductsContextType {
  productsCache: ProductsCache;
  totalCountCache: TotalCountCache;
  loadingMap: Record<string, boolean>;
  error: string | null;
  fetchProducts: (filters: FilterOptions) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);
