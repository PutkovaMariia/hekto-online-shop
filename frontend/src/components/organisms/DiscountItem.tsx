import SectionHeading from '../atoms/SectionHeading';
import Tabs from '../molecules/Tabs';
import TabButton from '../atoms/item/TabButton.tsx';
import ContentWrapper from '../atoms/ContentWrapper.tsx';
import { DiscountItemTopicKey } from '../../types/DiscountItemTopicKey.ts';
import { useState } from 'react';
import DiscountItemCard from '../molecules/DiscountItemCard.tsx';

const topics = Object.values(DiscountItemTopicKey).map((topic) => ({ name: topic }));

const topicLabels: Record<DiscountItemTopicKey, string> = {
  [DiscountItemTopicKey.Headphones]: 'Headphones',
  [DiscountItemTopicKey.Laptop]: 'Laptop',
  [DiscountItemTopicKey.Other]: 'Other'
};

const colorMap: Record<DiscountItemTopicKey, string> = {
  [DiscountItemTopicKey.Headphones]: 'bg-grey-2',
  [DiscountItemTopicKey.Laptop]: 'bg-primary-light',
  [DiscountItemTopicKey.Other]: 'bg-success-light'
};

export default function DiscountItem() {
  const [selectedTopic, setSelectedTopic] = useState<DiscountItemTopicKey>(
    DiscountItemTopicKey.Headphones
  );

  const handleSelect = (topic: DiscountItemTopicKey) => {
    setSelectedTopic(topic);
  };

  return (
    <ContentWrapper>
      <SectionHeading heading="Discount Item" />
      <Tabs
        buttons={
          <>
            {topics.map((topicObj) => (
              <TabButton
                key={topicObj.name}
                isSelected={selectedTopic === topicObj.name}
                onClick={() => handleSelect(topicObj.name as DiscountItemTopicKey)}
              >
                {topicLabels[topicObj.name as DiscountItemTopicKey]}
              </TabButton>
            ))}
          </>
        }
      >
        <DiscountItemCard color={colorMap[selectedTopic]} />
      </Tabs>
    </ContentWrapper>
  );
}
