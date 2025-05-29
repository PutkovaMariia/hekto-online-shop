import { Dispatch, SetStateAction, useState } from 'react';

interface UsePaginationReturn {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  productsPerPage: number;
  setProductsPerPage: Dispatch<SetStateAction<number>>;
  resetPage: () => void;
}

export function usePagination(
  initialPage: number,
  initialItemsPerPage: number
): UsePaginationReturn {
  const [page, setPage] = useState(initialPage);
  const [productsPerPage, setProductsPerPage] = useState(initialItemsPerPage);

  const resetPage = () => setPage(initialPage);

  return { page, setPage, productsPerPage, setProductsPerPage, resetPage };
}
