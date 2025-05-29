import ItemCard from './ItemCard';
import { ItemCardVariants } from '../../types/itemCardVariants';
import { Product } from '../../types/product.ts';
import { BASIC_LAYOUT_CARDS_AMOUNT } from '../../const/consts.ts';

export interface ProductsListProps {
  products: Product[];
  selectedRating?: string[];
  layoutVariant: ItemCardVariants;
  loading: boolean;
}

export function ProductsList({
  products,
  selectedRating = [],
  layoutVariant,
  loading
}: ProductsListProps) {
  if (loading) {
    return (
      <div
        className={
          layoutVariant === ItemCardVariants.BASIC_VERTICAL
            ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6'
            : 'flex flex-col gap-y-6'
        }
      >
        {Array.from({ length: BASIC_LAYOUT_CARDS_AMOUNT }).map((_, index) => (
          <ItemCard key={index} loading={true} variant={layoutVariant} />
        ))}
      </div>
    );
  }

  const filteredProducts =
    selectedRating.length > 0
      ? products.filter((product) => {
          if (!product.rating) return false;
          const ceiledRating = Math.ceil(product.rating.value);
          return selectedRating.includes(String(ceiledRating));
        })
      : products;

  if (filteredProducts.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div
      className={
        layoutVariant === ItemCardVariants.BASIC_VERTICAL
          ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6'
          : 'flex flex-col gap-y-6'
      }
    >
      {filteredProducts.map((product) => (
        <ItemCard key={product.id} product={product} loading={loading} variant={layoutVariant} />
      ))}
    </div>
  );
}
