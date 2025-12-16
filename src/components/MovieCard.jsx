import React from "react";

function MovieCard({
  key,
  movie,
  addToWatchlist,
  removeFromWatchlist,
  watchlist,
}) {

  function isInWatchlist() {
    return watchlist.find((m) => m.id === movie.id);
  }

  return (
    <div
      id={key}
      className="h-[40vh] w-[180px] flex flex-col justify-between items-end bg-cover bg-center rounded-xl shadow-md hover:scale-110 duration-300 hover:cursor-pointer m-3"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      {isInWatchlist() ? (
        <div
          onClick={() => {
            removeFromWatchlist(movie);
          }}
          className="flex justify-center items-center text-lg h-8 w-8 bg-red-900/80 rounded-lg shadow-md m-2"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            addToWatchlist(movie);
          }}
          className="flex justify-center items-center text-lg h-8 w-8 bg-gray-900/60 rounded-lg shadow-md m-2"
        >
          &#128151;
        </div>
      )}


      <div className="flex justify-center items-end text-xl text-white text-center rounded-xl w-full bg-gray-900/60">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;
