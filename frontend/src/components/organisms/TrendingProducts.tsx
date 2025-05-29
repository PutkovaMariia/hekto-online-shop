import { useProducts } from '../../hooks/useProducts';
import ItemCard from '../molecules/ItemCard.tsx';
import SectionHeading from '../atoms/SectionHeading.tsx';
import { ItemCardVariants } from '../../types/itemCardVariants.ts';
import ContentWrapper from '../atoms/ContentWrapper.tsx';
import { Product } from '../../types/product.ts';

const ITEMS_PER_SECTION = 4;

export default function TrendingProducts() {
  const { products, loading, error } = useProducts({
    _sort: 'soldTimes',
    _order: 'desc',
    _limit: ITEMS_PER_SECTION
  });

  const slidesToRender: (Product | undefined)[] = loading
    ? Array.from({ length: ITEMS_PER_SECTION }, () => undefined)
    : products;

  return (
    <ContentWrapper>
      <SectionHeading heading="Trending Products" />

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-4 pt-2 md:pt-4 lg:pt-7 xl:pt-14 size-full">
        {slidesToRender.map((item, idx) => (
          <div key={item ? item.id : idx} className="w-full h-fit">
            <ItemCard product={item} loading={loading} variant={ItemCardVariants.TRENDING} />
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
}
