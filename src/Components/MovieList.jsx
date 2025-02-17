/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MovieList = ({ movies }) => {
  return (
    <ul className="mt-6">
      {movies?.map((movie) => (
        <li
          key={movie.imdbID}
          className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 items-center text-lg p-4 border-b border-background-100"
        >
          <img
            className="w-16 h-24 object-cover rounded-md"
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
          <div>
            <h3 className="font-semibold">{movie.Title}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>🗓</span>
              <span>{movie.Year}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
