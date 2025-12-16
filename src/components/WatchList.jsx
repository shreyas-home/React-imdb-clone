import React, { useState, useEffect } from "react";
import generes from "../utilities/geners";

function WatchList({ watchlist, removeFromWatchlist }) {
  const [allMovies, setAllMovies] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  useEffect(() => {
    setAllMovies(watchlist);
  }, [watchlist]);

  useEffect(() => {
    let genresSet = new Set(
      watchlist.map((movie) => {
        return generes[movie.genre_ids[0]];
      })
    );
    setAllGenres(["All Genres", ...genresSet]);
  }, [watchlist]);

  function searchMovies(e) {
    let query = e.target.value.toLowerCase();
    let filteredMovies = watchlist.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setAllMovies(filteredMovies);
  }

  function sortAscending() {
    let sortedMovies = [...allMovies].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setAllMovies(sortedMovies);
  }

  function sortDescending() {
    let sortedMovies = [...allMovies].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setAllMovies(sortedMovies);
  }

  function handleFilter(genre) {
    setCurrentGenre(genre);
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-5">
        {allGenres.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre === genre
                  ? "bg-blue-400 rounded-lg shadow-md m-2 p-3 font-bold text-white cursor-pointer"
                  : "bg-gray-400 rounded-lg shadow-md m-2 p-3 font-bold text-white cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center my-4 w-full">
        <input
          onChange={searchMovies}
          type="text"
          className="h-[2rem] w-[18rem] p-2 outline-none bg-gray-200"
          placeholder="Search Movies..."
        />
      </div>

      <div className="overflow-hidden m-8 my-2 rounded-lg shadow-lg">
        <table className="border border-gray-400 text-center w-full rounded-lg shadow-md">
          <thead className="bg-gray-300 border-b-2 border-gray-400">
            <tr className="text-lg font-semibold">
              <th>NAME</th>
              <th>
                <span onClick={sortAscending} className="mx-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-down-1-9"></i>
                </span>
                RATING
                <span onClick={sortDescending} className="mx-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-up-1-9"></i>
                </span>
              </th>
              <th>GENRE</th>
              <th>POPULARITY</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 ">
            {allMovies
              .filter((movie) => {
                if (currentGenre === "All Genres") {
                  return true;
                } else {
                  return generes[movie.genre_ids[0]] === currentGenre;
                }
              })
              .map((movie) => {
                return (
                  <tr className="hover:bg-gray-100 transition duration-200 ease-in-out py-2 border-b-2">
                    <td className="flex items-center p-3">
                      <img
                        className="h-[8rem] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      />
                      <p className="font-bold px-3">{movie.title}</p>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{generes[movie.genre_ids[0]]}</td>
                    <td>{movie.popularity}</td>
                    <td>
                      <button
                        onClick={() => removeFromWatchlist(movie)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:cursor-pointer hover:bg-red-700 transition duration-200"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
