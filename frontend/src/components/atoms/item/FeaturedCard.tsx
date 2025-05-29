import type { Product } from '../../../types/product.ts';
import ButtonBase from '../ButtonBase.tsx';
import HoverIcons from './HoverIcons.tsx';
import ProductImage from './ProductImage.tsx';

type FeaturedCardProps = {
  product: Product;
};

export default function FeaturedCard({ product }: FeaturedCardProps) {
  return (
    <div className="group relative size-full rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:z-10 aspect-[75/87]">
      <div className="flex flex-col size-full">
        <div className="relative h-1/2 2xl:h-3/5 rounded-sm overflow-hidden">
          <div className="absolute inset-0 p-2 flex flex-col justify-between opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 z-10 sm:pointer-events-none">
            <div className="flex gap-2 pointer-events-auto">
                <HoverIcons product={product}/>
            </div>
            <div className="w-full flex justify-center pointer-events-auto">
              <ButtonBase variant="small" text="Shop Now" to={`/product/${product.id}`} />
            </div>
          </div>

          <ProductImage product={product} />
        </div>

        <div className="w-full h-1/2 2xl:h-2/5 flex flex-col items-center justify-center p-2">
          <p className="text-base font-bold text-primary py-3 2xl:py-6">{product.category}</p>
          <p className="text-sm font-normal text-grey-3 pb-2">Code - {product.code}</p>
          <p className="text-base font-bold text-black">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
