import { Product } from '../../../types/product.ts';
import { Link } from 'react-router-dom';
import StarsRating from '../StarsRating.tsx';
import HoverIcons from './HoverIcons.tsx';

export default function BasicVerticalCard({ product }: { product: Product }) {
  return (
    <div className="shadow-xl p-4 flex flex-col min-h-[450px]">
      <div className="w-full h-56 overflow-hidden pb-5">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover rounded"
          />
        </Link>
      </div>

      <Link to={`/product/${product.id}`}>
        <p className="font-sans font-bold text-black text-xl pb-2">{product.category}</p>
        <StarsRating rating={product.rating.value} />
        <div className="flex gap-x-3.5 font-normal items-center pt-2">
          <p className="text-base text-black font-sans">${product.price}</p>
          <p className="text-sm text-grey-3 line-through">${product.wasPrice}</p>
        </div>
      </Link>
      <p className="font-lato font-normal text-base text-grey-3 flex-grow">{product.description}</p>
      <div className="flex gap-2 pointer-events-auto">
        <HoverIcons product={product} />
      </div>
    </div>
  );
}
