import { Link } from 'react-router-dom';
import ButtonBase from '../ButtonBase.tsx';

type CategoryCardProps = {
  category: string;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div
      className="group flex flex-col items-center justify-center relative gap-x-6
    transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:z-10"
    >
      <div className="group relative w-full aspect-square">
        <div className="absolute inset-0 z-0 bg-grey-3 rounded-full"></div>
        <div
          className="bg-tertiary-light relative z-10 flex flex-col items-center justify-center text-center
        size-full rounded-full shadow-xl transform transition-transform duration-300 ease-in-out
        group-hover:-translate-y-2 group-hover:translate-x-2"
        >
          <span>{category}</span>
          <Link
            to={`/products`}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-2 opacity-0
            group-hover:opacity-100 transition-opacity duration-300"
          >
            <ButtonBase variant="small" text="View Category" />
          </Link>
        </div>
      </div>

      <div className="w-full h-1/3 2xl:h-1/5 flex flex-col items-center justify-center text-center py-3 2xl:py-6">
        <p className="text-xl font-bold text-black">{category}</p>
      </div>
    </div>
  );
}
