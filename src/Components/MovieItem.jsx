import { useDispatch, useSelector } from "react-redux";
import style from "./MovieItem.module.scss";
import {
  addToWatchList,
  removeFromWatchList,
  addToWatchedList,
} from "../app/moviesSlice";
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

  const inWatchedList = state.watched.some((movieItem) => {
    if (movie.imdbID === movieItem.imdbID) {
      return true;
    }
    return false;
  });

  return (
    <article className={style.movieContainer}>
      <MovieItemContent movie={movie} />
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

  // if (inWatchList) {
  //   return (
  //     <article className={style.movieContainer}>
  //       <MovieItemContent movie={movie} />
  //       <RoundButton
  //         title="&#x2713;"
  //         action={() => {
  //           dispatch(removeFromWatchList(movie));
  //           dispatch(addToWatchedList(movie));
  //           //remove from watchList
  //         }}
  //       />
  //     </article>
  //   );
  // }
  // if (inWatchedList) {
  //   return (
  //     <article className={style.movieContainer}>
  //       <MovieItemContent movie={movie} />
  //     </article>
  //   );
  // }
  // return (
  //   <article className={style.movieContainer}>
  //     <MovieItemContent movie={movie} />
  //     <RoundButton
  //       title={buttonTitle}
  //       action={() => {
  //         dispatch(addToWatchList(movie));
  //       }}
  //     />
  //   </article>
  // );
}

export default MovieItem;
