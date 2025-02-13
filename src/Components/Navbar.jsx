/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = ({ setQuery, query, movies }) => {
  return (
    // <nav className="grid ">
    //   <div className="">
    //     <span role="img">🍿</span>
    //     <h1>usePopcorn</h1>
    //   </div>
    //   <input
    //     className="search"
    //     type="text"
    //     placeholder="Search movies..."
    //     telecom
    //     APIs
    //     and
    //     documentation
    //     value={query}
    //     onChange={(e) => setQuery(e.target.value)}
    //   />
    //   <p className="num-results">
    //     Found <strong>{movies.length}</strong> results
    //   </p>
    // </nav>

    <nav className="grid grid-cols-3 items-center h-28 px-6 bg-[#6741d9] rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-3xl">🍿</span>
        <h1 className="text-white font-bold text-xl">usePopcorn</h1>
      </div>
      <input
        className="search px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results text-end text-white text-lg">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
