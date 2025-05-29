import lampImg from '../../assets/images/lamp.svg';
import headphonesImg from '../../assets/images/headphones.svg';
import ButtonBase from '../atoms/ButtonBase.tsx';

export default function SlideIntroduction() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center w-full h-[85vh] lg:h-[66vh] px-4 sm:px-10 md:px-26 gap-6 overflow-hidden">
        <div className="hidden lg:flex w-1/4 xl:w-1/5 2xl:w-1/6 justify-center self-start shrink-0">
          <img src={lampImg} alt="Lamp" className="h-1/2 object-contain" loading="lazy" />
        </div>

        <div className="w-full lg:w-2/6 flex flex-col justify-center text-left">
          <p className="text-sm lg:text-base font-bold text-primary font-lato">
            Best Headphones For Your Life....
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold my-2 lg:my-4 text-black">
            New Trendy Collection Headphones
          </h1>
          <p className="text-sm lg:text-base font-normal text-grey-3 font-lato pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>
          <ButtonBase variant="big" to="/products" text="Shop Now" />
        </div>

        <div className="w-full lg:max-w-3/6 flex justify-center items-center">
          <div className="relative aspect-square w-full max-h-9/10 sm:max-w-[66vw] lg:max-w-[50vw] xl:max-w-[33vw] 2xl:max-w-[25vw]">
            <div className="absolute inset-0 bg-grey-3 rounded-full z-0 translate-y-6" />
            <div className="absolute inset-0 bg-grey-2 rounded-full opacity-80 z-10 translate-x-6 -translate-y-2" />
            <img
              src={headphonesImg}
              alt="Headphones"
              className="relative z-20 w-full h-full object-contain"
              loading="lazy"
            />
            <div
              className="absolute top-10 right-5 bg-info z-30"
              style={{
                maskImage: "url('/assets/icons/sale-badge.svg')",
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
                aspectRatio: '1/1',
                width: 'clamp(6rem, 8vw, 9rem)'
              }}
            >
              <h3 className="absolute inset-0 flex items-center justify-center text-white-bright font-bold text-xl xl:text-3xl">
                50% <br />
                off
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
