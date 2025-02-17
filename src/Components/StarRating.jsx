/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const StarRating = ({ max = 2 }) => {
  return (
    <div className="flex gap-8 items-center ">
      <div className="flex gap-2">
        {Array.from({ length: max }, (_, i) => (
          <span key={2}>S{i + 1}</span>
        ))}
      </div>
      <p className="leading-5 m-0">10</p>
    
    </div>
  );
};

export default StarRating;
