import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ addToWatchlist, removeFromWatchlist, watchlist }) {
  const [movies, setMovies] = useState([]);

  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9fbbb067c15413ee780559a2fd359b9c&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-1">
      <div className="text-center font-bold text-2xl">Trending Movies</div>

      <div className="p-3 flex justify-around flex-wrap">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=9fbbb067c15413ee780559a2fd359b9c&language=en-US&page=1
