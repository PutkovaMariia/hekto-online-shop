import SliderIntroduction from '../components/organisms/SliderIntroduction.tsx';
import FeaturedProducts from '../components/organisms/FeaturedProducts.tsx';
import LeatestProducts from '../components/organisms/LeatestProducts.tsx';
import UniqueFeatures from '../components/organisms/UniqueFeatures.tsx';
import TrendingProducts from '../components/organisms/TrendingProducts.tsx';
import DiscountItem from '../components/organisms/DiscountItem.tsx';
import TopCategories from '../components/organisms/TopCategories.tsx';
import SubscribeNewsletter from '../components/organisms/SubscribeNewsletter.tsx';
import LeatestBlog from '../components/organisms/LeatestBlog.tsx';

export default function HomePage() {
  return (
    <>
      <SliderIntroduction />
      <FeaturedProducts />
      <LeatestProducts />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <SubscribeNewsletter />
      <LeatestBlog />
    </>
  );
}
