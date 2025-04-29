/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import PropTypes from "prop-types";




StarRating.propTypes ={
  max:PropTypes.number,
  color:PropTypes.string,
  txt:PropTypes.string,
  className:PropTypes.string,
  messages:PropTypes.object
}

export default function StarRating({
  max = 2,
  color,
  txt,
  className,
  messages = [],
  onRate,
}){
  const [rating, setRating] = useState(0);
  const [tempoRating, setTempoRating] = useState(0);

  function handleRate(rate) {
    setRating(rate);
    onRate(rate)
  }
  return (
    <div className="flex gap-8 items-center ">
      <div className="flex gap-2">
        {Array.from({ length: max }, (_, i) => (
          <Star
            key={i}
            handleRate={() => handleRate(i + 1)}
            full={tempoRating ? tempoRating >= i + 1 : rating >= i + 1}
            handleMouseEnter={() => setTempoRating(i + 1)}
            handleMouseLeave={() => setTempoRating(0)}
            color={color}
            className={className}
            poor
          />
        ))}
      </div>
      <p className={`leading-5 m-0 text-blue-900 text-3xl ${txt}`}>
        {messages.length === max
          ? messages[tempoRating ? tempoRating - 1 : rating - 1]
          : tempoRating || rating || ""}
      </p>
    </div>
  );
};


function Star({
  color = "blue",
  className = "h-8 w-8 cursor-pointer  ",
  handleRate,
  full,
  handleMouseEnter,
  handleMouseLeave,
}) {
  return (
    <span
      onClick={handleRate}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      color={color}
      className={className}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
