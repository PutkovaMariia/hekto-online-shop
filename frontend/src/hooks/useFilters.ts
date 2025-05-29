import { useState, useEffect } from 'react';
import { FiltersData } from '../types/filtersData';
import { FilterOptions } from '../types/filterOptions';
import { API_FILTERS_URL } from '../const/consts';

export function useFilters(initialSelected: FilterOptions = {}) {
  const [availableFilters, setAvailableFilters] = useState<FiltersData | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>(initialSelected);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_FILTERS_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch filters');
        }
        return res.json();
      })
      .then((data: FiltersData) => {
        setAvailableFilters(data);
      })
      .catch((err) => {
        setError((err as Error).message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const updateFilter = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(value) && value.length === 0 ? undefined : value
    }));
  };

  return { availableFilters, selectedFilters, updateFilter, loading, error };
}
