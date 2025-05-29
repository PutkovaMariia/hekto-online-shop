import emptyCartImg from '../../assets/images/empty-cart.svg';
import SectionHeading from './SectionHeading.tsx';
import ButtonBase from './ButtonBase.tsx';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-8">
      <img src={emptyCartImg} alt="Your cart is empty" className="size-80" loading="lazy" />
      <SectionHeading heading="Your cart is empty" />
      <ButtonBase variant="big" text="Start Shopping" to="/" />
    </div>
  );
}
