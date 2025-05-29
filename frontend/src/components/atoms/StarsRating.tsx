const TOTAL_STARS = 5;

interface StarsRatingProps {
  rating: number;
}

export default function StarsRating({ rating }: StarsRatingProps) {
  const activeStars = Math.ceil(rating);
  const inactiveStars = TOTAL_STARS - activeStars;

  return (
    <div className="flex gap-x-1">
      {Array.from({ length: activeStars }).map((_, idx) => (
        <img
          key={`active-${idx}`}
          src="/assets/icons/star-active.svg"
          alt="Active star"
          className="w-4 h-4"
        />
      ))}
      {Array.from({ length: inactiveStars }).map((_, idx) => (
        <img
          key={`inactive-${idx}`}
          src="/assets/icons/star.svg"
          alt="Inactive star"
          className="w-4 h-4"
        />
      ))}
    </div>
  );
}
