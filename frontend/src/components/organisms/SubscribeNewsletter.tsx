import decorChairImg from '../../assets/images/decor-chair.svg';
import ButtonBase from '../atoms/ButtonBase.tsx';
import SectionHeading from '../atoms/SectionHeading.tsx';

interface SubscribeNewsletterDataType {
  title: string;
}

const SubscribeNewsletterData: SubscribeNewsletterDataType = {
  title: 'Get Latest Update By Subscribe 0ur Newsletter'
};

export default function SubscribeNewsletter() {
  return (
    <div className="w-full relative overflow-hidden mt-16 md:mt-24">
      <img src={decorChairImg} alt="Decor Image" loading="lazy" className="min-w-[800px] w-full h-auto object-contain"/>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 md:w-1/2
       text-center items-center justify-center flex flex-col gap-y-3 md:gap-y-7 xl:gap-y-14
       [text-shadow:0_0_8px_white] md:[text-shadow:none]">
        <SectionHeading heading={SubscribeNewsletterData.title} />
        <ButtonBase variant="big" text="Subscribe" />
      </div>
    </div>
  );
}
