import { useState } from "react";

interface Props {
  rate: object | number;
}
export const StarRating = ({ rate }: Props) => {
  const [rating, setRating] = useState<React.SetStateAction<number>>(
    typeof rate === "object" ? 0 : rate
  );
  const [hover, setHover] = useState<React.SetStateAction<number>>(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`star-btn ${
              index <= Number(hover || rating) ? "on" : "off"
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
