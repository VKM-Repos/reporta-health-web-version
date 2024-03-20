import React from "react";

const StarRatings = ({ rating, className }) => {
  const roundedRating = Math.round(rating);
  const filledStars = Array.from({ length: roundedRating }, (_, index) => (
    <svg
      key={index}
      className={` aspect-square ${className}`}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.98116 2.81658L10.0078 4.86992C10.1478 5.15575 10.5212 5.42992 10.8362 5.48242L12.697 5.79158C13.887 5.98992 14.167 6.85325 13.3095 7.70492L11.8628 9.15158C11.6178 9.39658 11.4837 9.86908 11.5595 10.2074L11.9737 11.9983C12.3003 13.4157 11.5478 13.9641 10.2937 13.2233L8.54949 12.1908C8.23449 12.0041 7.71533 12.0041 7.39449 12.1908L5.65033 13.2233C4.40199 13.9641 3.64366 13.4099 3.97033 11.9983L4.38449 10.2074C4.46033 9.86908 4.32616 9.39658 4.08116 9.15158L2.63449 7.70492C1.78283 6.85325 2.05699 5.98992 3.24699 5.79158L5.10783 5.48242C5.41699 5.42992 5.79033 5.15575 5.93033 4.86992L6.95699 2.81658C7.51699 1.70242 8.42699 1.70242 8.98116 2.81658Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ));
  const emptyStars = Array.from({ length: 5 - roundedRating }, (_, index) => (
    <svg
      key={index + roundedRating}
      className={` aspect-square ${className}`}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.98116 2.81658L10.0078 4.86992C10.1478 5.15575 10.5212 5.42992 10.8362 5.48242L12.697 5.79158C13.887 5.98992 14.167 6.85325 13.3095 7.70492L11.8628 9.15158C11.6178 9.39658 11.4837 9.86908 11.5595 10.2074L11.9737 11.9983C12.3003 13.4157 11.5478 13.9641 10.2937 13.2233L8.54949 12.1908C8.23449 12.0041 7.71533 12.0041 7.39449 12.1908L5.65033 13.2233C4.40199 13.9641 3.64366 13.4099 3.97033 11.9983L4.38449 10.2074C4.46033 9.86908 4.32616 9.39658 4.08116 9.15158L2.63449 7.70492C1.78283 6.85325 2.05699 5.98992 3.24699 5.79158L5.10783 5.48242C5.41699 5.42992 5.79033 5.15575 5.93033 4.86992L6.95699 2.81658C7.51699 1.70242 8.42699 1.70242 8.98116 2.81658Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ));
  return (
    <div className="flex">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default StarRatings;
