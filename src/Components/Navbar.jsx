/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = ({setQuery}) => {
  return (
    <nav className="">
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
    <input
      className="search"
      type="text"
      placeholder="Search movies..."telecom APIs and documentation
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  </nav>
  )
}

export default Navbar