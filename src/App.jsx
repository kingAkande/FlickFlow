/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./Components/Navbar";
import MovieData from "./Components/MovieData";
import WatchedData from "./Components/WatchedData";
import WashedSummary from "./Components/WashedSummary";
import WashedMovie from "./Components/WashedMovie";
import MovieList from "./Components/MovieList";
import Box from "./Components/Box";

function App() {
  const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ];

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  <div>MovieData</div>;
  return (
    <>
      <div className="bg-[#212529]">
        <Navbar setQuery={setQuery} query={query} movies={movies} />

        <main className="flex justify-center gap-6 mt-6">
          {/* <MovieData
            //movies={movies}
            isOpen1={isOpen1}
            setIsOpen1={setIsOpen1}
          >
            <MovieList movies={movies} />
          </MovieData> */}
          <Box>
            <MovieList movies={movies} />
          </Box>

          <Box>
            <WashedSummary
              watched={watched}
              avgRuntime={avgRuntime}
              avgUserRating={avgUserRating}
              avgImdbRating={avgImdbRating}
            />
            <WashedMovie watched={watched} />
          </Box>

          {/* <WatchedData
            //watched={watched}
            isOpen2={isOpen2}
            setIsOpen2={setIsOpen2}
          >
            <WashedSummary
              watched={watched}
              avgRuntime={avgRuntime}
              avgUserRating={avgUserRating}
              avgImdbRating={avgImdbRating}
            />
            <WashedMovie watched={watched} />
          </WatchedData> */}
        </main>
      </div>
    </>
  );
}

export default App;
