import { useDispatch, useSelector } from "react-redux";
import style from "./MovieItem.module.scss";
import { addToWatchList } from "../app/moviesSlice";
import RoundButton from "./RoundButton";
import { Link } from "react-router-dom";

function MovieItemContent({ movie }) {
  return (
    <>
      <Link to={"/movie/" + movie.imdbID}>
        <figure className={style.poster}>
          <img className={style.poster__img} src={movie.Poster} alt="" />
        </figure>
      </Link>
    </>
  );
}

function MovieItem({ movie, buttonTitle }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });

  const inWatchList = state.watchList.some((movieItem) => {
    if (movie.imdbID === movieItem.imdbID) {
      return true;
    }
    return false;
  });

  return (
    //Button for adding/removing items
    //Button takes title and action
    <>
      {inWatchList ? (
        <article className={style.movieContainer}>
          <MovieItemContent movie={movie} />
        </article>
      ) : (
        <article className={style.movieContainer}>
          <MovieItemContent movie={movie} />
          <RoundButton
            title={buttonTitle}
            action={() => {
              dispatch(addToWatchList(movie));
            }}
          />
        </article>
      )}
    </>
  );
}

export default MovieItem;
