import { ProductDetailsTopicKey } from '../../types/productDetailsTopicKey.ts';
import { useMemo, useState } from 'react';
import Tabs from './Tabs.tsx';

import ProductDetailsPageDescriptionTab from '../atoms/ProductDetailsPageDescriptionTab.tsx';
import TabButton from '../atoms/item/TabButton.tsx';

const topics = Object.values(ProductDetailsTopicKey).map((topic) => ({ name: topic }));
const topicLabels: Record<ProductDetailsTopicKey, string> = {
  [ProductDetailsTopicKey.Description]: 'Description',
  [ProductDetailsTopicKey.AdditionalInfo]: 'Additional Info',
  [ProductDetailsTopicKey.Reviews]: 'Reviews',
  [ProductDetailsTopicKey.Video]: 'Video'
};

export default function ProductDetailsPageTabs() {
  const [selectedTopic, setSelectedTopic] = useState<ProductDetailsTopicKey>(
    ProductDetailsTopicKey.Description
  );

  const handleSelect = (topic: ProductDetailsTopicKey) => {
    setSelectedTopic(topic);
  };

  const renderedContent = useMemo(() => {
    switch (selectedTopic) {
      case ProductDetailsTopicKey.Description:
        return <ProductDetailsPageDescriptionTab />;
      case ProductDetailsTopicKey.AdditionalInfo:
        return <div>Additional Info</div>;
      case ProductDetailsTopicKey.Reviews:
        return <div>Reviews</div>;
      case ProductDetailsTopicKey.Video:
        return <div>Video</div>;
      default:
        return null;
    }
  }, [selectedTopic]);

  return (
    <Tabs
      buttons={
        <>
          {topics.map((topicObj) => (
            <TabButton
              key={topicObj.name}
              isSelected={selectedTopic === topicObj.name}
              onClick={() => handleSelect(topicObj.name as ProductDetailsTopicKey)}
            >
              {topicLabels[topicObj.name as ProductDetailsTopicKey]}
            </TabButton>
          ))}
        </>
      }
    >
      <div>{renderedContent}</div>
    </Tabs>
  );
}
