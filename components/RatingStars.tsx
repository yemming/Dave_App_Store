import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
  showNumber?: boolean;
}

export default function RatingStars({ rating, size = 20, showNumber = false }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={size} className="text-yellow-400 fill-yellow-400" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star size={size} className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} size={size} className="text-gray-300" />
      ))}
      {showNumber && (
        <span className="ml-1 text-sm font-semibold text-secondary">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

