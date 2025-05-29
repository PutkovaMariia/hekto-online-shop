import { useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { AUTOPLAY_KEEN_SLIDER_TIMEOUT } from '../const/consts';

const defaultBreakpoints = {
  '(min-width: 640px)': { slides: { perView: 1 } },
  '(min-width: 1024px)': { slides: { perView: 1 } },
  '(min-width: 1440px)': { slides: { perView: 1 } }
};

export function useAutoplayKeenSlider(
  slidesToShow: number = 1,
  customBreakpoints?: Record<string, any>
) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const breakpoints = customBreakpoints ?? defaultBreakpoints;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: slidesToShow
      },
      breakpoints,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      }
    },
    [
      (slider) => {
        let mouseOver = false;

        const clearNextTimeout = () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };

        const nextTimeout = () => {
          clearNextTimeout();
          if (mouseOver) return;
          timeoutRef.current = setTimeout(() => {
            const slidesOption = slider.options.slides as { perView: number } | undefined;
            const perView = slidesOption?.perView || slidesToShow;
            slider.moveToIdx(slider.track.details.rel + perView);
          }, AUTOPLAY_KEEN_SLIDER_TIMEOUT);
        };

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  return {
    sliderRef,
    instanceRef,
    currentSlide,
    loaded
  };
}
