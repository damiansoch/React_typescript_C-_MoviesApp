import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./movies/MovieList";
import { inTheaters, upcomingReleases } from "./movies/moviesData";
import { landingPageDTO } from "./movies/movie.model";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: inTheaters,
        upcomingReleases: upcomingReleases,
      });
    }, 2000);
    return () => clearTimeout(timerId);
  });
  return (
    <div className="container">
      <h3>In theaters</h3>

      <MovieList movies={movies.inTheaters} />
      <h3>Upcoming releases</h3>
      <MovieList movies={movies.upcomingReleases} />
    </div>
  );
}

export default App;
