/*Libraries*/
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
/*Reducers*/
import {
  addToWatchList,
  removeFromWatchList,
  addToWatchedMovies,
} from "../app/moviesSlice";
/*Components*/
import RoundButton from "./RoundButton";
/*Styling*/
import style from "./MovieAvatar.module.scss";

function MoviePoster({ movie }) {
  /* Navigation to MovieDetails page on click */
  return (
    <>
      <Link to={"/movie/" + movie.imdbID}>
        <figure>
          <img
            className={style.movieAvatar__poster}
            src={
              movie.Poster == "N/A"
                ? "https://plus.unsplash.com/premium_photo-1676049461949-185dcea09d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcGNvcm58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                : movie.Poster
            }
            alt=""
          />
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

  /* Check to see in which list the movie is in in order to render buttons accordingly */
  const inWatchList = state.watchList.some((movieItem) => {
    if (movie.imdbID === movieItem.imdbID) {
      return true;
    }
    return false;
  });

  const inWatchedMovies = state.watchedMovies.some((movieItem) => {
    if (movie.imdbID === movieItem.imdbID) {
      return true;
    }
    return false;
  });
  /**/

  return (
    <article className={style.movieAvatar}>
      <MoviePoster movie={movie} />
      {inWatchList ? (
        <RoundButton
          title="&#x2713;"
          action={() => {
            dispatch(removeFromWatchList(movie));
            dispatch(addToWatchedMovies(movie));
          }}
        />
      ) : inWatchedMovies ? null : (
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
