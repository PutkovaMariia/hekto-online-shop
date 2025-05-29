import { Product } from '../../../types/product.ts';
import { Link } from 'react-router-dom';
import StarsRating from '../StarsRating.tsx';
import HoverIcons from './HoverIcons.tsx';

export default function BasicHorizontalCard({ product }: { product: Product }) {
  return (
    <div className="shadow-xl p-4 flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/3 h-56 md:h-auto overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover rounded"
          />
        </Link>
      </div>

      <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between flex-1">
        <Link to={`/product/${product.id}`}>
          <div className="flex justify-between">
            <p className="font-sans font-bold text-black text-xl pb-2">{product.category}</p>
            <StarsRating rating={product.rating.value} />
          </div>
          <div className="flex gap-x-3.5 font-normal items-center pt-2">
            <p className="text-base text-black font-sans">${product.price}</p>
            <p className="text-sm text-grey-3 line-through">${product.wasPrice}</p>
          </div>
          <p className="font-lato font-normal text-base text-grey-3">{product.description}</p>
        </Link>

        <div className="flex gap-2 pointer-events-auto">
          <HoverIcons product={product} />
        </div>
      </div>
    </div>
  );
}
