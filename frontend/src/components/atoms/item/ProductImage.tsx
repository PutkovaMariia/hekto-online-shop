import type { Product } from '../../../types/product.ts';

type ProductImageProps = {
  product: Product;
  className?: string;
};

export default function ProductImage({ product, className = '' }: ProductImageProps) {
  return (
    <img
      src={product?.thumbnail}
      alt={product?.name}
      className={`absolute inset-0 size-full object-cover z-0 ${className}`}
      loading="lazy"
    />
  );
}
