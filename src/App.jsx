import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  let [watchlist, setWatchlist] = useState(() => {
    let storedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    return storedWatchlist || [];
  });

  let addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
  };

  let removeFromWatchlist = (movie) => {
    let newWatchlist = watchlist.filter((m) => m.id !== movie.id);
    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  addToWatchlist={addToWatchlist}
                  removeFromWatchlist={removeFromWatchlist}
                  watchlist={watchlist}
                />{" "}
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                removeFromWatchlist={removeFromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
