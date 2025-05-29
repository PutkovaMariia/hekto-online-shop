import { Link } from 'react-router-dom';
import type { Product } from '../../../types/product.ts';
import HoverIcons from './HoverIcons.tsx';
import ProductImage from './ProductImage.tsx';
import SaleBadge from './SaleBadge.tsx';

type LatestCardProps = {
  product: Product;
};

export default function LatestCard({ product }: LatestCardProps) {
  return (
    <div className="group relative size-full aspect-[4/3]">
      {product.isSale && <SaleBadge />}

      <div className="flex flex-col size-full">
        <div className="relative h-5/6">
          <div className="absolute left-2 bottom-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto">
            <HoverIcons product={product}/>
          </div>
          <Link to={`/product/${product.id}`}>
            <ProductImage product={product} />
          </Link>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="w-full h-1/6 flex items-center justify-between"
        >
          <p className="text-sm font-normal text-black">{product.brand}</p>
          <div className="flex items-center gap-4">
            <p className="text-base font-normal text-black">${product.price}</p>
            <p className="text-sm font-normal text-primary">${product.wasPrice}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
