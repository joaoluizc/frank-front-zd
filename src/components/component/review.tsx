// feedback screen, to leave a review from 1-5 stars
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);
  const [hovered, setHovered] = useState(false);

  const paintStars = (star: number) => {
    if (hovered) {
      if (star <= hoveredRating) {
        return 'text-yellow-500 fill-yellow-500';
      }
      return 'text-gray-300 fill-gray-300';
    }
    if (star <= rating) {
      return 'text-yellow-500 fill-yellow-500';
    }
    return 'text-gray-300 fill-gray-300';
  };

  return (
    <div className="space-y-4 flex flex-col justify-center items-center w-4/5 m-auto">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="p-1 rounded-full bg-transparent"
            onMouseOver={() => {
                setHoveredRating(star)
                setHovered(true)
            }}
            onMouseLeave={() => {
                setHoveredRating(0)
                setHovered(false)
            }}
          >
            <Star
              className={`h-6 w-6 ${paintStars(star)}`}
            />
          </button>
        ))}
      </div>
      <Textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave a review..."
      />
      <Button
        onClick={() => {
          console.log({ rating, review });
        }}
        className={'hover:bg-background hover:text-foreground'}
      >
        Submit
      </Button>
    </div>
  );
};

export default ReviewScreen;