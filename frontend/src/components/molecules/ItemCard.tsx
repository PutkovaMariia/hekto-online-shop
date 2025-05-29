import type { Product } from '../../types/product';
import FeaturedCard from '../atoms/item/FeaturedCard.tsx';
import LatestCard from '../atoms/item/LatestCard.tsx';
import { ComponentType } from 'react';
import { ItemCardVariants } from '../../types/itemCardVariants.ts';
import PreloaderCard from '../atoms/item/PreloaderCard.tsx';
import TrendingCard from '../atoms/item/TrendingCard.tsx';
import CategoryCard from '../atoms/item/CategoryCard.tsx';
import BasicHorizontalCard from '../atoms/item/BasicHorizontalCard.tsx';
import BasicVerticalCard from '../atoms/item/BasicVerticalCard.tsx';

type ItemCardProps = {
  loading: boolean;
  variant: ItemCardVariants;
  product?: Product;
  category?: string;
};

const VARIANT_MAP: Record<
  Exclude<ItemCardVariants, ItemCardVariants.CATEGORY>,
  ComponentType<{ product: Product }>
> = {
  [ItemCardVariants.FEATURED]: FeaturedCard,
  [ItemCardVariants.LATEST]: LatestCard,
  [ItemCardVariants.TRENDING]: TrendingCard,
  [ItemCardVariants.BASIC_HORIZONTAL]: BasicHorizontalCard,
  [ItemCardVariants.BASIC_VERTICAL]: BasicVerticalCard
};

export default function ItemCard({ product, loading, variant, category }: ItemCardProps) {
  if (variant === ItemCardVariants.CATEGORY) {
    return loading || !category ? (
      <PreloaderCard variant={variant} />
    ) : (
      <CategoryCard category={category} />
    );
  }

  const SpecificCard = VARIANT_MAP[variant];
  return loading || !product ? (
    <PreloaderCard variant={variant} />
  ) : (
    <SpecificCard product={product} />
  );
}
