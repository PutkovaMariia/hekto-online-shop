import headphonesImg from '../../assets/images/headphones.svg';
import ButtonBase from '../atoms/ButtonBase.tsx';
import checkImg from '/assets/icons/check.svg';

interface DiscountItemCardDataType {
  title: string;
  subTitle: string;
  text: string;
  description: string[];
}

interface DiscountItemCardProps {
  color: string;
}

const DiscountItemCardData: DiscountItemCardDataType = {
  title: '20% Discount Of All Products',
  subTitle: 'Headphones Compact',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.',
  description: [
    'Material expose like metals',
    'Clear lines and geomatric figures',
    'Simple neutral colours.',
    'Material expose like metals'
  ]
};

export default function DiscountItemCard({ color }: DiscountItemCardProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between 2xl:justify-center items-center size-full gap-x-16 overflow-visible">
        <div className="w-full flex flex-col justify-center text-left gap-y-6">
          <h3 className="text-2xl lg:text-4xl font-bold text-black">
            {DiscountItemCardData.title}
          </h3>
          <p className="text-base lg:text-2xl font-bold text-primary">
            {DiscountItemCardData.subTitle}
          </p>
          <p className="text-sm lg:text-lg font-normal text-grey-3 font-lato">
            {DiscountItemCardData.text}
          </p>
          <ul className="grid grid-cols-2 gap-6 text-sm lg:text-base font-normal text-grey-3 font-lato">
            {DiscountItemCardData.description.map((item, index) => (
              <li key={index} className="flex items-center gap-x-2">
                <img src={checkImg} alt="Check sign" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonBase variant="big" to="/products" text="Shop Now" />
        </div>

        <div className="w-full max-w-2/3 lg:max-w-1/2 flex justify-end items-center">
          <div className="relative aspect-square w-full max-h-[90%] sm:max-w-[66vw] lg:max-w-[50vw] xl:max-w-[33vw] 2xl:max-w-[25vw]">
            <div
              className={`absolute inset-[5%] rounded-full opacity-50 z-0 translate-x-[10%] -translate-y-[10%] ${color}`}
            />
            <div className={`absolute inset-0 rounded-full z-10 -translate-x-[5%] ${color}`} />
            <img
              src={headphonesImg}
              alt="Headphones"
              className="relative z-20 w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
