import { Product } from '../../types/product.ts';

export interface CartItemType extends Product {
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
  onIncrement: (item: CartItemType) => void;
  onDecrement: (item: CartItemType) => void;
}

export default function CartItem({ item, onIncrement, onDecrement }: CartItemProps) {
  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <li className="flex h-fit sm:h-36 items-center justify-between text-black">
      <div className="flex items-center w-1/2 sm:w-2/3 h-full">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="h-full hidden sm:block"
          loading="lazy"
        />
        <div className="pl-6">
          <p className="font-bold text-base lg:text-xl pb-2">{item.name}</p>
          <p className="font-normal text-base">${item.price}</p>
        </div>
      </div>
      <div className="border border-grey-2 rounded-lg font-lato font-normal text-sm text-black flex items-center">
        <button onClick={() => onDecrement(item)} className="pl-3 py-1 cursor-pointer">
          -
        </button>
        <span className="px-5">{item.quantity}</span>
        <button onClick={() => onIncrement(item)} className="pr-3 py-1 cursor-pointer">
          +
        </button>
      </div>
      <div>${itemTotal}</div>
    </li>
  );
}
