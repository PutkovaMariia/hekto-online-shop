import ButtonBase from '../atoms/ButtonBase.tsx';

const SHIPPING_FEE = 0.1; //10%

interface CartItem {
  price: number;
  quantity: number;
}

interface CartSummaryProps {
  cart: CartItem[];
}

export default function CartSummary({ cart }: CartSummaryProps) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const shipping = (parseFloat(subtotal) * SHIPPING_FEE).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);

  return (
    <div className="bg-grey-1 flex flex-col items-center justify-center w-full gap-y-3 p-6 rounded-lg">
      <div className="w-full flex items-center justify-between font-bold text-base text-black pb-4 border-b border-grey-2">
        <div className="font-lato">Subtotal:</div>
        <div className="font-sans">${subtotal}</div>
      </div>
      <div className="w-full flex items-center justify-between font-bold text-base text-black pb-4 border-b border-grey-2">
        <div className="font-lato">Total:</div>
        <div className="font-sans">${total}</div>
      </div>
      <div className="w-full flex items-center justify-between font-normal text-sm text-grey-3">
        <div className="font-lato">Shipping:</div>
        <div className="font-sans">${shipping}</div>
      </div>

      <ButtonBase variant="big" text="Proceed to checkout" />
    </div>
  );
}
