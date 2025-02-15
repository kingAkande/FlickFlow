/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const WashedSummary = ({ watched, avgImdbRating, avgUserRating, avgRuntime }) => {
  return (
    <div className="mb-4 p-4 bg-background-700 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Movies you watched</h2>
      <div className="space-y-2 flex gap-8">
        <p className="flex items-center gap-2 text-sm">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WashedSummary;
