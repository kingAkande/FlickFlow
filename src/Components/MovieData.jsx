/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MovieData = ({ setIsOpen1, isOpen1, movies }) => {
  return (
    //     <div className="box">
    //     <button
    //       className="btn-toggle"
    //       onClick={() => setIsOpen1((open) => !open)}
    //     >
    //       {isOpen1 ? "–" : "+"}
    //     </button>
    //     {isOpen1 && (
    //       <ul className="list">
    //         {movies?.map((movie) => (
    //           <li key={movie.imdbID}>
    //             <img src={movie.Poster} alt={`${movie.Title} poster`} />
    //             <h3>{movie.Title}</h3>
    //             <div>
    //               <p>
    //                 <span>🗓</span>
    //                 <span>{movie.Year}</span>
    //               </p>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>

    <div className="w-[42rem] max-w-[42rem] bg-[#2b3035] rounded-lg  relative p-4 text-white">
      <button
        className="absolute top-4 right-4 text-2xl font-bold bg-[#212529] rounded-full w-8 h-8 flex items-center justify-center"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
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
      )}
    </div>
  );
};

export default MovieData;
