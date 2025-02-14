/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const WatchedData = ({
  isOpen2,
  setIsOpen2,
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    //     <div className="box">
    //       <button
    //         className="btn-toggle"
    //         onClick={() => setIsOpen2((open) => !open)}
    //       >
    //         {isOpen2 ? "–" : "+"}
    //       </button>
    //       {isOpen2 && (
    //         <>
    //           <div className="summary">
    //             <h2>Movies you watched</h2>
    //             <div>
    //               <p>
    //                 <span>#️⃣</span>
    //                 <span>{watched.length} movies</span>
    //               </p>
    //               <p>
    //                 <span>⭐️</span>
    //                 <span>{avgImdbRating}</span>
    //               </p>
    //               <p>
    //                 <span>🌟</span>
    //                 <span>{avgUserRating}</span>
    //               </p>
    //               <p>
    //                 <span>⏳</span>
    //                 <span>{avgRuntime} min</span>
    //               </p>
    //             </div>
    //           </div>

    //           <ul className="list">
    //             {watched.map((movie) => (
    //               <li key={movie.imdbID}>
    //                 <img src={movie.Poster} alt={`${movie.Title} poster`} />
    //                 <h3>{movie.Title}</h3>
    //                 <div>
    //                   <p>
    //                     <span>⭐️</span>
    //                     <span>{movie.imdbRating}</span>
    //                   </p>
    //                   <p>
    //                     <span>🌟</span>
    //                     <span>{movie.userRating}</span>
    //                   </p>
    //                   <p>
    //                     <span>⏳</span>
    //                     <span>{movie.runtime} min</span>
    //                   </p>
    //                 </div>
    //               </li>
    //             ))}
    //           </ul>
    //         </>
    //       )}
    //     </div>
    <div className="w-[42rem] max-w-[42rem] bg-[#2b3035] rounded-lg  relative p-4 text-white">
      <button
        className="absolute top-2 right-2 h-6 w-6 rounded-full border-none bg-[#212529] text-text font-bold text-lg flex items-center justify-center cursor-pointer z-50"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>

      {isOpen2 && (
        <>
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

          <ul className="divide-y divide-background-100">
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WatchedData;
