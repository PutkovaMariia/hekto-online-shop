import { useEffect } from 'react';
import SectionHeading from '../atoms/SectionHeading';
import ContentWrapper from '../atoms/ContentWrapper';
import { useAutoplayKeenSlider } from '../../hooks/useAutoplayKeenSlider';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useFilters } from '../../hooks/useFilters';
import { ItemCardVariants } from '../../types/itemCardVariants.ts';
import ItemCard from '../molecules/ItemCard.tsx';

const TOP_CATEGORIES_LIMIT = 12;
const classSlider =
  'keen-slider__slide overflow-visible px-1 md:px-3 lg:px-5 py-2 md:py-4 lg:py-7 xl:py-14';

export default function TopCategories() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useAutoplayKeenSlider(1, {
    '(min-width: 640px)': { slides: { perView: 2 } },
    '(min-width: 1024px)': { slides: { perView: 3 } },
    '(min-width: 1440px)': { slides: { perView: 4 } }
  });
  const windowWidth = useWindowWidth();

  const { availableFilters, loading, error } = useFilters();

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [availableFilters, instanceRef, windowWidth]);

  const topCategories: (string | undefined)[] = availableFilters
    ? availableFilters.category.values.slice(0, TOP_CATEGORIES_LIMIT)
    : Array.from({ length: TOP_CATEGORIES_LIMIT }, () => undefined);

  const slidesOption = instanceRef.current?.options.slides as
    | { perView: number }
    | number
    | undefined;
  const perView =
    typeof slidesOption === 'object' && slidesOption !== null && 'perView' in slidesOption
      ? slidesOption.perView
      : typeof slidesOption === 'number'
        ? slidesOption
        : 1;

  const totalGroups = Math.ceil(topCategories.length / perView);
  const activeGroup = Math.floor(currentSlide / perView);

  return (
    <ContentWrapper>
      <SectionHeading heading="Top Categories" />
      {error && <p className="text-red-600">{error}</p>}

      <div className="overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          {topCategories.map((category, idx) => (
            <div key={idx} className={classSlider}>
              <ItemCard category={category} loading={loading} variant={ItemCardVariants.CATEGORY} />
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && !loading && (
        <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
              className={`w-2 h-2 border border-primary rounded-full transition cursor-pointer ${
                activeGroup === idx ? 'bg-primary' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      )}
    </ContentWrapper>
  );
}
