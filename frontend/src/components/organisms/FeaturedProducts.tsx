import { useProducts } from '../../hooks/useProducts';
import ItemCard from '../molecules/ItemCard.tsx';
import { useAutoplayKeenSlider } from '../../hooks/useAutoplayKeenSlider';
import { useEffect } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth.tsx';
import SectionHeading from '../atoms/SectionHeading.tsx';
import { ItemCardVariants } from '../../types/itemCardVariants.ts';
import { Product } from '../../types/product.ts';
import ContentWrapper from '../atoms/ContentWrapper.tsx';

const classSlider =
  'keen-slider__slide overflow-visible px-1 md:px-3 lg:px-5 py-2 md:py-4 lg:py-7 xl:py-14';

export default function FeaturedProducts() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useAutoplayKeenSlider(1, {
    '(min-width: 640px)': { slides: { perView: 2 } },
    '(min-width: 1024px)': { slides: { perView: 3 } },
    '(min-width: 1440px)': { slides: { perView: 4 } }
  });
  const { products, loading, error } = useProducts({
    isFeatured: true,
    _limit: 16
  });

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

  const totalGroups = Math.ceil(products.length / perView);
  const activeGroup = Math.floor(currentSlide / perView);
  const windowWidth = useWindowWidth();

  const slidesToRender: (Product | undefined)[] = loading
    ? Array.from({ length: perView }, () => undefined)
    : products;

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [products, instanceRef, windowWidth]);

  return (
    <ContentWrapper>
      <SectionHeading heading="Featured Products" />
      {error && <p className="text-red-600">{error}</p>}

      <div className="overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          {slidesToRender.map((item, idx) => (
            <div key={item ? item.id : idx} className={classSlider}>
              <ItemCard product={item} loading={loading} variant={ItemCardVariants.FEATURED} />
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
              className={`h-1 transition-all duration-300 cursor-pointer rounded-lg ${
                activeGroup === idx ? 'bg-primary w-3 sm:w-6' : 'bg-primary-light-2 w-1.5 sm:w-4'
              }`}
            />
          ))}
        </div>
      )}
    </ContentWrapper>
  );
}
