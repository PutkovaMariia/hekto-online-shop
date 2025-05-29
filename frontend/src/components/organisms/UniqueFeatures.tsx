import ContentWrapper from '../atoms/ContentWrapper.tsx';
import chairImg from '../../assets/images/chair-unique.svg';
import ButtonBase from '../atoms/ButtonBase.tsx';

interface UniqueFeaturesDataType {
  title: string;
  description: string[];
  productName: string;
  productPrice: string;
}

const UniqueFeaturesData: UniqueFeaturesDataType = {
  title: 'Unique Features Of Leatest & Trending Poducts',
  description: [
    'All frames constructed with hardwood solids and laminates',
    'Reinforced with double wood dowels, glue, screw - nails corner',
    'Arms, backs and seats are structurally reinforced'
  ],
  productName: 'B&B Italian Sofa',
  productPrice: '$32.00'
};

const dotColors = ['bg-primary', 'bg-info', 'bg-success'];

export default function UniqueFeatures() {
  return (
    <div className="w-full bg-tertiary-light-2">
      <ContentWrapper>
        <div className="relative flex flex-col sm:flex-row items-center justify-between w-full gap-x-16">
          <div
            className="relative w-6/10 sm:w-1/2 py-10
              before:content-[''] before:absolute before:top-0 before:left-0 before:size-full 
              before:bg-[url('/assets/icons/decor-pink.svg')]
              before:bg-no-repeat before:bg-center before:bg-contain"
          >
            <img
              src={chairImg}
              alt="Chair with unique features"
              className="relative z-10 scale-125 top-4 sm:top-8 2xl:top-16 left-4 sm:left-8 2xl:left-24"
              loading="lazy"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-y-10">
            <h3 className="font-bold text-2xl lg:text-4xl text-black">
              {UniqueFeaturesData.title}
            </h3>
            <ul className="font-lato font-normal text-xs lg:text-base text-grey-3 flex flex-col gap-y-3 list-none">
              {UniqueFeaturesData.description.map((item, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <span
                    className={`block w-2 h-2 rounded-full ${dotColors[index % dotColors.length]}`}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-2">
              <ButtonBase variant="big" text="Add To Cart" to="/cart" />
              <div className="font-sans font-normal text-sm text-black">
                {UniqueFeaturesData.productName} <br />
                {UniqueFeaturesData.productPrice}
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
