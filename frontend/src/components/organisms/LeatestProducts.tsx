import { useState, useMemo } from 'react';
import { useProducts } from '../../hooks/useProducts';
import SectionHeading from '../atoms/SectionHeading';
import Tabs from '../molecules/Tabs';
import TabButton from '../atoms/item/TabButton.tsx';
import { FilterOptions } from '../../types/filterOptions.ts';
import ItemCard from '../molecules/ItemCard.tsx';
import { ItemCardVariants } from '../../types/itemCardVariants.ts';
import { LeatestProductsTopicKey } from '../../types/leatestProductsTopicKey.ts';
import ContentWrapper from '../atoms/ContentWrapper.tsx';

const ITEMS_PER_SECTION = 6;
const classGrid = 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3';

const topics = Object.values(LeatestProductsTopicKey).map((topic) => ({ name: topic }));

const topicLabels: Record<LeatestProductsTopicKey, string> = {
  [LeatestProductsTopicKey.NewArrival]: 'New Arrival',
  [LeatestProductsTopicKey.BestSeller]: 'Best Seller',
  [LeatestProductsTopicKey.Featured]: 'Featured',
  [LeatestProductsTopicKey.SpecialOffer]: 'Special Offer'
};

export default function LatestProducts() {
  const [selectedTopic, setSelectedTopic] = useState<LeatestProductsTopicKey>(
    LeatestProductsTopicKey.NewArrival
  );

  const filter: FilterOptions = useMemo(() => {
    switch (selectedTopic) {
      case LeatestProductsTopicKey.NewArrival:
        return { _sort: 'createdAt', _order: 'desc', _limit: ITEMS_PER_SECTION };
      case LeatestProductsTopicKey.BestSeller:
        return { _sort: 'soldTimes', _order: 'desc', _limit: ITEMS_PER_SECTION };
      case LeatestProductsTopicKey.Featured:
        return { _sort: 'createdAt', _order: 'desc', isFeatured: true, _limit: ITEMS_PER_SECTION };
      case LeatestProductsTopicKey.SpecialOffer:
        return { _sort: 'createdAt', _order: 'desc', _limit: ITEMS_PER_SECTION * 4 };
      default:
        return { _sort: 'createdAt', _order: 'desc', _limit: ITEMS_PER_SECTION };
    }
  }, [selectedTopic]);

  const { products, loading, error } = useProducts(filter);

  let visibleProducts = products;
  if (selectedTopic === LeatestProductsTopicKey.SpecialOffer) {
    visibleProducts = products.filter((p) => p.specialOffer !== null).slice(0, ITEMS_PER_SECTION);
  }

  const handleSelect = (topic: LeatestProductsTopicKey) => {
    setSelectedTopic(topic);
  };

  return (
    <ContentWrapper>
      <SectionHeading heading="Latest Products" />
      <Tabs
        buttons={
          <>
            {topics.map((topicObj) => (
              <TabButton
                key={topicObj.name}
                isSelected={selectedTopic === topicObj.name}
                onClick={() => handleSelect(topicObj.name as LeatestProductsTopicKey)}
              >
                {topicLabels[topicObj.name as LeatestProductsTopicKey]}
              </TabButton>
            ))}
          </>
        }
      >
        {error && <p className="text-red-600">{error}</p>}

        <div className={classGrid}>
          {Array.from({ length: ITEMS_PER_SECTION }).map((_, idx) => {
            const product = visibleProducts[idx];
            return (
              <ItemCard
                key={product ? product.id : idx}
                product={product}
                loading={loading}
                variant={ItemCardVariants.LATEST}
              />
            );
          })}
        </div>

        {!visibleProducts.length && !loading && <p>No products found.</p>}
      </Tabs>
    </ContentWrapper>
  );
}
