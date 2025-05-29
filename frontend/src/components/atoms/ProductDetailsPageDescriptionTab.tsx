import checkImg from '/assets/icons/check.svg';

interface ProductDetailsDataType {
  title: string;
  text: string;
  subTitle: string;
  description: string[];
}

const ProductDetailsData: ProductDetailsDataType = {
  title: 'Varius tempor.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor...',
  subTitle: 'More details',
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor.',
    'In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.',
    'Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.',
    'Mauris vitae massa molestie, sagittis ligula vel, egestas massa.',
    'Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.'
  ]
};

export default function ProductDetailsPageDescriptionTab() {
  return (
    <div>
      <div className="font-bold text-xl text-black pb-4">{ProductDetailsData.title}</div>
      <div className="font-lato font-normal text-base text-grey-3 pb-8">
        {ProductDetailsData.text}
      </div>
      <div className="font-bold text-xl text-black pb-4">{ProductDetailsData.subTitle}</div>
      <ul className="grid grid-cols-2 gap-6 text-sm lg:text-base font-normal text-grey-3 font-lato">
        {ProductDetailsData.description.map((item, index) => (
          <li key={index} className="flex items-center gap-x-2">
            <img src={checkImg} alt="Check sign" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
