/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const WashedMovie = ({ watched,onDelete }) => {
  return (
    <ul className="divide-y divide-background-100 relative">
      {watched.map((movie) => (
        <li
          key={movie.imdbID}
          className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 items-center text-lg p-4"
        >
          <img
            className="w-16 h-24 object-cover rounded-md"
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
          <div>
            <h3 className="font-semibold">{movie.Title}</h3>
            <div className="space-y-1 flex gap-8 mt-2 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
              <button onClick={()=>onDelete(movie.imdbID)} className="absolute top-12 right-4 rounded-full px-2 text-black bg-red-500 font-bold ">
                <span>x</span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WashedMovie;
