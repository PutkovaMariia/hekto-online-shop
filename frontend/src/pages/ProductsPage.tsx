import { useState, useMemo } from 'react';
import ContentWrapper from '../components/atoms/ContentWrapper';
import SectionHeading from '../components/atoms/SectionHeading';
import { useFilters } from '../hooks/useFilters';
import { useProducts } from '../hooks/useProducts';
import { FiltersPanel } from '../components/molecules/FiltersPanel';
import { ProductsList } from '../components/molecules/ProductsList';
import { ProductsPagination } from '../components/molecules/ProductsPagination';
import type { FilterOptions, MultiSelectFilterKeys, PriceRange } from '../types/filterOptions';
import { usePagination } from '../hooks/usePagination';
import { buildProductQuery } from '../helpers/buildProductQuery';
import TopControls from '../components/molecules/TopControls';
import type { DropdownOption } from '../types/dropdown';
import { productsPerPageOptions, productsSortOptions } from '../const/dropdownOptions';
import { INITIAL_PAGE, RADIX_TEN_BASED } from '../const/consts';
import { ItemCardVariants } from '../types/itemCardVariants';

export default function ProductsPage() {
    const {
        availableFilters,
        selectedFilters,
        updateFilter,
        loading: filtersLoading,
        error: filtersError
    } = useFilters();

    const [selectedSort, setSelectedSort] = useState<DropdownOption>(productsSortOptions[0]);
    const [selectedPerPage, setSelectedPerPage] = useState<DropdownOption>(productsPerPageOptions[0]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>([]);
    const initialPerPage = parseInt(selectedPerPage.label, RADIX_TEN_BASED);

    const { page, setPage, productsPerPage, setProductsPerPage, resetPage } = usePagination(
        INITIAL_PAGE,
        initialPerPage
    );

    const [layoutVariant, setLayoutVariant] = useState<ItemCardVariants>(
        ItemCardVariants.BASIC_VERTICAL
    );

    const onFilterChange = (key: MultiSelectFilterKeys, value: string[]) => {
        updateFilter(key, value);
        resetPage();
    };

    const onPriceChange = (ranges: PriceRange[]) => {
        setSelectedPriceRanges(ranges);
        if (ranges.length > 0) {
            const combinedRange = {
                min: Math.min(...ranges.map((r) => r.min)),
                max: Math.max(...ranges.map((r) => r.max))
            };
            updateFilter('price', combinedRange);
        } else {
            updateFilter('price', undefined);
        }
        resetPage();
    };

    const onSortChange = (option: DropdownOption) => {
        setSelectedSort(option);
        if (option.code === 'high-low') {
            updateFilter('_sort', 'price');
            updateFilter('_order', 'desc');
        } else if (option.code === 'low-high') {
            updateFilter('_sort', 'price');
            updateFilter('_order', 'asc');
        }
        resetPage();
    };

    const productQuery: FilterOptions = useMemo(() => {
        return buildProductQuery(selectedFilters, page, productsPerPage);
    }, [selectedFilters, page, productsPerPage]);

    const {
        products,
        loading: productsLoading,
        error: productsError,
        totalCount
    } = useProducts(productQuery);
    const calculatedTotalPages = useMemo(
        () => Math.ceil(totalCount / productsPerPage),
        [totalCount, productsPerPage]
    );

    return (
        <ContentWrapper>
            <SectionHeading heading="Products" />

            <TopControls
                selectedPerPage={selectedPerPage}
                onPerPageChange={(option) => {
                    setSelectedPerPage(option);
                    const newItemsPerPage = parseInt(option.label, RADIX_TEN_BASED);
                    setProductsPerPage(newItemsPerPage);
                    resetPage();
                }}
                selectedSort={selectedSort}
                onSortChange={onSortChange}
                layoutVariant={layoutVariant}
                onLayoutChange={setLayoutVariant}
            />

            <div className="flex w-full gap-x-3 sm:gap-x-10 2xl:gap-x-24">
                <div className="w-1/4">
                    {filtersError && <p className="text-red-600">Error loading filters: {filtersError}</p>}
                    {filtersLoading ? (
                        <p>Loading filters...</p>
                    ) : availableFilters ? (
                        <FiltersPanel
                            filters={availableFilters}
                            selectedFilters={
                                selectedFilters as Partial<
                                    Record<Exclude<MultiSelectFilterKeys, 'price'>, string[]>
                                >
                            }
                            onFilterChange={onFilterChange}
                            selectedPriceRanges={selectedPriceRanges}
                            onPriceChange={onPriceChange}
                        />
                    ) : null}
                </div>
                <div className="w-3/4">
                    {productsError && <p className="text-red-600">Error loading products: {productsError}</p>}
                    <ProductsList
                        products={products}
                        selectedRating={selectedFilters.rating || []}
                        layoutVariant={layoutVariant}
                        loading={productsLoading}
                    />
                </div>
            </div>

            <ProductsPagination page={page} totalPages={calculatedTotalPages} onPageChange={setPage} />
        </ContentWrapper>
    );
}
