/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import MovieData from "./Components/MovieData";
import WatchedData from "./Components/WatchedData";
import WashedSummary from "./Components/WashedSummary";
import WashedMovie from "./Components/WashedMovie";
import MovieList from "./Components/MovieList";
import Box from "./Components/Box";
import StarRating from "./Components/StarRating";

const key = "e3ea8184";

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

  // const average = (arr) => {
  //   // Check if array is empty or undefined
  //   if (!arr || arr.length === 0) return 0;
  //   return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  // };

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  const [selectedMovie, setSelectedMovie] = useState(null);

  function updateWashedMovie(newMovie) {
    setWatched((prevWashed) => [...prevWashed, newMovie]);
  }
  //const querie = "fast";
  //interstellarisselectedMovie
  // <div>MovieData</div>;

  function handleSelectedMovie(id) {
    setSelectedMovie((selectedMovie) => (id === selectedMovie ? null : id));
    // setisSelectedMovie(true);
  }

  function handleDelete(id) {
    setWatched((watched) => watched.filter((mov) => mov.imdbID != id));
  }

  function closeMovie() {
    setSelectedMovie(null);
    // setisSelectedMovie(false);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovie() {
        try {
          setisLoading(true);

          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("unable to fetch movies");

          const data = await res.json();
          //console.log(data);

          if (data.Response === "False") throw new Error("Movie not found");

          if (!data.Search || !Array.isArray(data.Search)) {
            throw new Error("Invalid response format from API");
          }

          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          //console.log(err)
          //console.log(err.message);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setisLoading(false);
        }
      }
      fetchMovie();
      return () => controller.abort();
    },
    [query]
  );

  return (
    <>
      <div className="bg-[#212529]">
        <Navbar setQuery={setQuery} query={query} movies={movies} />

        <main className="flex justify-center gap-6 mt-6">
          <Box>
            {/* {isLoading ? <Loader/> : <MovieList movies={movies} />} */}

            {isLoading && <Loader />}

            {!isLoading && error && <Error message={error} />}

            {!isLoading && !error && (
              <MovieList
                movies={movies}
                handleSelectedMovie={handleSelectedMovie}
              />
            )}
          </Box>

          <Box>
            {selectedMovie ? (
              <MovieSelected
                updateWashedMovie={updateWashedMovie}
                movid={selectedMovie}
                closeMovie={closeMovie}
                watched={watched}
              />
            ) : (
              <>
                <WashedSummary
                  watched={watched}
                  avgRuntime={avgRuntime}
                  avgUserRating={avgUserRating}
                  avgImdbRating={avgImdbRating}
                />

                <WashedMovie watched={watched} onDelete={handleDelete} />
              </>
            )}
            {/* {isselectedMovie ? selectedMovie : <WashedMovie watched={watched} />} */}
          </Box>
        </main>
      </div>
    </>
  );
}

export default App;

function Loader() {
  return <p>Loading...</p>;
}

function Error({ message }) {
  //console.log("Error component received:", message);
  return (
    <div className="text-red-500 text-lg font-bold">
      <span>⛔</span> <p>{message}</p>
    </div>
  );
}

function MovieSelected({ movid, closeMovie, updateWashedMovie, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [userRating, setUserRting] = useState(0);

  const isWatched = watched.map((mov) => mov.imdbID).includes(movid);
  const watchedUserRating = watched.find(
    (mov) => mov.imdbID === movid
  )?.userRating;

  const {
    Title,
    Poster,
    Released,
    Genre,
    Runtime,
    imdbRating,
    Plot,
    Actors,
    Director,
    imdbID,
    Year,
  } = movie;

  function addAsWashedMovie() {
    const isWatched = {
      imdbID,
      Title,
      Poster,
      Year,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(" ").at(0)),
      userRating,
    };

    updateWashedMovie(isWatched), closeMovie();
  }

  useEffect(
    function () {
      async function getDetails() {
        setisLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${movid}`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
        setisLoading(false);
      }

      getDetails();
    },
    [movid]
  );

  useEffect(
    function () {
      if (!Title) return;
      document.title = Title;

      return function () {
        document.title = "Use Poporn";
      };
    },

    [Title]
  );

  useEffect(
    function  () {

      function escapeKey(e){
        if (e.code === "Escape") {
          closeMovie();
        }
      }

      document.addEventListener("keydown",escapeKey );
      return ()=> document.removeEventListener("keydown",escapeKey)

    },
    [closeMovie]
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="flex h-40 mb-12 ">
            <button
              onClick={closeMovie}
              className="rounded-full px-2 absolute ml-2 mt-2 bg-amber-50 text-black"
            >
              &larr;
            </button>
            <img className="mr-12" src={Poster} alt="" />
            <div className="text-sm/8">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span className="mr-4 ">⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <div className="flex flex-col items-center justify-center p-4 bg-amber-950">
            {!isWatched ? (
              <>
                <StarRating
                  max={10}
                  color="yellow"
                  txt="text-yellow-300"
                  onRate={setUserRting}
                />

                {userRating ? (
                  <button
                    onClick={addAsWashedMovie}
                    className="rounded bg-blue-500 px-3 mt-4"
                  >
                    + Add to List
                  </button>
                ) : (
                  ""
                )}
              </>
            ) : (
              <p>
                You have rated this movie {watchedUserRating} <span>⭐</span>
              </p>
            )}
          </div>

          <section className="text-center mt-12 text-sm/8">
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
