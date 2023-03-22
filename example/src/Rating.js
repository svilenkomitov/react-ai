import React from "react";

const Rating = ({ value, max = 5, size = "text-lg", color = "text-yellow-400" }) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    stars.push(
      <svg
        key={i}
        className={`${size} ${color} ${
          i <= value ? "fill-current" : "stroke-current"
        }`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {i <= value ? (
          <path
            d="M12 2.69l3.09 6.28 6.91.99-5 4.86 1.18 6.88L12 18.18l-6.18 3.32 1.18-6.88-5-4.86 6.91-.99L12 2.69z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        ) : (
          <path
            d="M12 2.69l3.09 6.28 6.91.99-5 4.86 1.18 6.88L12 18.18l-6.18 3.32 1.18-6.88-5-4.86 6.91-.99L12 2.69z"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    );
  }

  return <div className="flex items-center">{stars}</div>;
};

export default Rating;
