import GenericList from "../utils/GenericList";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movie.model";
import css from "./movieList.module.css";

const MovieList = (props: MovieListProps) => {
  return (
    <GenericList list={props.movies}>
      <div className={css.div}>
        {props.movies?.map((release) => (
          <IndividualMovie {...release} key={release.id} />
        ))}
      </div>
    </GenericList>
  );
};
interface MovieListProps {
  movies?: movieDTO[];
}
export default MovieList;
