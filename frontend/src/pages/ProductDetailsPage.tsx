import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ContentWrapper from '../components/atoms/ContentWrapper';
import ButtonBase from '../components/atoms/ButtonBase';
import ButtonIcon from '../components/atoms/ButtonIcon';
import StarsRating from '../components/atoms/StarsRating';
import ProductDetailsPageTabs from '../components/molecules/ProductDetailsPageTabs';
import { useState, useEffect } from 'react';
import {useCart} from "../context/CartContext.tsx";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { products, loading, error } = useProducts({});
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [mainImage, setMainImage] = useState<string>('');
  const [sideImages, setSideImages] = useState<string[]>([]);

  useEffect(() => {
    if (product) {
      setMainImage(product.thumbnail);
      setSideImages(product.imageSet);
    }
  }, [product]);

    const handleCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        product && addItem(product);
    };

  const handleSideImageClick = (index: number) => {
    const clickedImage = sideImages[index];
    setSideImages((prev) => {
      const newSideImages = [...prev];
      newSideImages[index] = mainImage;
      return newSideImages;
    });
    setMainImage(clickedImage);
  };

  return (
    <ContentWrapper>
      {loading && <div className="animate-pulse w-full rounded-lg shadow-xl bg-grey-1" />}
      {error && <p className="text-red-600">{error}</p>}
      {product ? (
        <>
          <div className="flex flex-col lg:flex-row gap-x-10 2xl:gap-x-32">
            <div className="w-full h-96 flex flex-col lg:flex-row gap-x-8 rounded-lg">
              <div className="w-1/3 hidden lg:flex lg:flex-col gap-y-4 justify-between rounded-lg overflow-auto">
                {sideImages.map((image, idx) => (
                  <div key={idx} className="w-full h-24 cursor-pointer">
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                      onClick={() => handleSideImageClick(idx)}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-2/3 h-full">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full pt-10">
              <h3 className="font-bold text-4xl text-black">{product.name}</h3>
              <div className="pt-2">
                <StarsRating rating={product.rating.value} />
              </div>
              <div className="flex gap-x-3.5 font-normal items-center pt-6">
                <p className="text-base text-black">${product.price}</p>
                <p className="text-sm text-primary line-through">${product.wasPrice}</p>
              </div>
              <p className="font-lato font-normal text-base text-grey-3 pt-6">
                {product.description}
              </p>
              <div className="flex pt-16 gap-x-8 items-center">
                <ButtonBase variant="big" text="Add To Cart" onClick={handleCartClick}/>
                <ButtonIcon icon="heart" />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ProductDetailsPageTabs />
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </ContentWrapper>
  );
}
