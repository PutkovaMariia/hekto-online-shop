import type { Product } from '../../../types/product.ts';
import ProductImage from './ProductImage.tsx';
import { Link } from 'react-router-dom';

type TrendingCardProps = {
  product: Product;
};

export default function TrendingCard({ product }: TrendingCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative block w-full h-4/5 rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:z-10 aspect-[75/87]"
    >
      <div className="flex flex-col size-full">
        <div className="relative h-2/3 2xl:h-4/5 m-2 lg:m-4 rounded-sm overflow-hidden">
          <ProductImage product={product} />
        </div>

        <div className="w-full h-1/3 2xl:h-1/5 flex flex-col items-center justify-center py-3 2xl:py-6">
          <p className="text-base font-semibold text-primary pb-2">{product.category}</p>
          <div className="flex gap-x-3.5 font-normal items-center justify-center">
            <p className="text-base text-black">${product.price}</p>
            <p className="text-sm text-grey-3 line-through">${product.wasPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
