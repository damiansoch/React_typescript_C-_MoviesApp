import React from "react";
import { movieDTO } from "./movie.model";
import css from "./individualMovie.module.css";

const IndividualMovie = (movie: movieDTO) => {
  const buildLink = () => `/movie/${movie.id}`;

  return (
    <div className={css.div}>
      <a href={buildLink()}>
        <img src={movie.poster} alt="Poster" />
      </a>
      <p>
        <a href={buildLink()}>{movie.title}</a>
      </p>
    </div>
  );
};

export default IndividualMovie;
