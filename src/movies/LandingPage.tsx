import React, { useEffect, useState } from "react";
import { landingPageDTO } from "./movie.model";
import MovieList from "./MovieList";
import { inTheaters, upcomingReleases } from "./moviesData";

const LandingPage = () => {
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
    <>
      <h3>In theaters</h3>
      <MovieList movies={movies.inTheaters} />
      <h3>Upcoming releases</h3>
      <MovieList movies={movies.upcomingReleases} />
    </>
  );
};

export default LandingPage;
