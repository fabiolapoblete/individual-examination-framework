//Libraries
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Reducers
import {
  addToWatchList,
  removeFromWatchList,
  addToWatchedList,
} from "../app/moviesSlice";
//Components
import RoundButton from "./RoundButton";
//Styling
import style from "./MovieItem.module.scss";

function MoviePoster({ movie }) {
  //Navigation to MovieDetails page on click
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

function MovieAvatar({ movie, buttonTitle }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });

  //Check to see in which list the movie is in to render different buttons
  // const inList = (list) => {
  //   list.some((movieItem) => {
  //     if (movie.imdbID === movieItem.imdbID) {
  //       return true;
  //     }
  //     return false;
  //   });
  // };

  const inWatchList = state.watchList.some((movieItem) => {
    if (movie.imdbID === movieItem.imdbID) {
      return true;
    }
    return false;
  });

  const inWatchedList = state.watched.some((movieItem) => {
    if (movie.imdbID === movieItem.imdbID) {
      return true;
    }
    return false;
  });

  return (
    <article className={style.movieContainer}>
      <MoviePoster movie={movie} />
      {inWatchList ? (
        <RoundButton
          title="&#x2713;"
          action={() => {
            dispatch(removeFromWatchList(movie));
            dispatch(addToWatchedList(movie));
          }}
        />
      ) : inWatchedList ? null : (
        <RoundButton
          title={buttonTitle}
          action={() => {
            dispatch(addToWatchList(movie));
          }}
        />
      )}
    </article>
  );
}

export default MovieAvatar;
