import { useCart } from '../context/CartContext';
import ContentWrapper from '../components/atoms/ContentWrapper';
import EmptyCart from '../components/atoms/EmptyCart.tsx';
import { Product } from '../types/product.ts';
import CartItem from '../components/atoms/CartItem';
import CartSummary from '../components/molecules/CartSummary.tsx';

interface CartItem extends Product {
  quantity: number;
}

export default function CartPage() {
  const { cart, addItem, decrementItem, clearCart } = useCart();

  const handleIncrement = (item: CartItem) => {
    addItem(item);
  };

  const handleDecrement = (item: CartItem) => {
    decrementItem(item.id);
  };

  return (
    <ContentWrapper>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10 2xl:gap-x-26 w-full">
          <ul className="flex flex-col justify-between gap-y-6 w-full lg:w-3/4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
          </ul>
          <div className="w-full lg:w-1/4 pt-10 lg:pt-0 flex flex-col items-center justify-center">
            <CartSummary cart={cart} />
            <button
              className="font-lato font-normal text-base text-primary pt-8 cursor-pointer"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </ContentWrapper>
  );
}
