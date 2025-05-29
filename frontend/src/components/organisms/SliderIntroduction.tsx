import { useAutoplayKeenSlider } from '../../hooks/useAutoplayKeenSlider';
import SlideIntroduction from '../molecules/SlideIntroduction';

export default function SliderIntroduction() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useAutoplayKeenSlider(1);

  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      <div ref={sliderRef} className="keen-slider flex-1">
        <div className="keen-slider__slide bg-tertiary-light">
          <SlideIntroduction />
        </div>
        <div className="keen-slider__slide bg-info-light">
          <SlideIntroduction />
        </div>
        <div className="keen-slider__slide bg-success-light">
          <SlideIntroduction />
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3">
          {Array.from({ length: instanceRef.current.track.details.slides.length }, (_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 border border-primary rotate-45 transition cursor-pointer ${
                currentSlide === idx ? 'bg-primary' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
