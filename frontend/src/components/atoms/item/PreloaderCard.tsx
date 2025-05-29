import { ItemCardVariants } from '../../../types/itemCardVariants.ts';

type PreloaderCardProps = {
  variant: ItemCardVariants;
};

const similarLayout = [
  ItemCardVariants.FEATURED,
  ItemCardVariants.TRENDING,
  ItemCardVariants.BASIC_VERTICAL
];

export default function PreloaderCard({ variant }: PreloaderCardProps) {
  if (variant === ItemCardVariants.LATEST) {
    return (
      <div className="flex flex-col w-full aspect-[4/3] bg-grey-1 animate-pulse">
        <div className="h-5/6 bg-grey-1" />
        <div className="w-full h-1/6 flex items-center justify-between px-2">
          <div className="bg-grey-1 w-1/3 h-4" />
          <div className="bg-grey-1 w-1/3 h-4" />
        </div>
      </div>
    );
  }

  if (variant === ItemCardVariants.BASIC_HORIZONTAL) {
    return (
      <div className="shadow-xl p-4 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/3 h-56 md:h-auto overflow-hidden"></div>
        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between flex-1"></div>
      </div>
    );
  }

  if (similarLayout.includes(variant)) {
    return <div className="animate-pulse w-full aspect-[75/87] rounded-lg shadow-xl bg-grey-1" />;
  }

  if (variant === ItemCardVariants.CATEGORY) {
    return <div className="w-full aspect-square bg-grey-1 animate-pulse rounded-full" />;
  }
}
