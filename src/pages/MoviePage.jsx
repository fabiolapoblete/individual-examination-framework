import MovieCard from "../Components/MovieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchButton from "../Components/SearchButton";
import { addToWatchList } from "../app/moviesSlice";
import style from "./MoviePage.module.scss";
import PageTitle from "../Components/PageTitle";
// import InputBox from "../Components/InputBox";
import AddRating from "./AddRating";
import { addDetailData } from "../app/moviesSlice";

function MoviePage() {
  const params = useParams();

  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  let movie = state.watchList.find(
    (movieItem) => movieItem.imdbID == params.id
  );

  if (movie === undefined) {
    movie = state.movies.find((movieItem) => movieItem.imdbID == params.id);
  }

  const API_URL = "http://www.omdbapi.com/?apikey=37fe945a&i=" + params.id;

  useEffect(() => {
    params.id == "" || params.id == undefined
      ? null
      : fetch(API_URL)
          .then((response) => response.json())
          .then((movieData) => {
            dispatch(addDetailData(movieData));
            console.log(movieData);
          });
  }, []);

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

  if (movie === undefined) {
    return <h1>hej</h1>;
  }

  return (
    <main className={style.moviePage}>
      <PageTitle title={movie.Title} />
      <section className={style.moviePage__subheader}>
        <p>{movie.Language}</p>
        <span>|</span>
        <p>{movie.Runtime}</p>
        <span>|</span>
        <p>
          {movie.Type} from {movie.Year}
        </p>
      </section>

      <section className={style.moviePage__movieCard}>
        {inWatchList ? (
          <MovieCard movie={movie} />
        ) : inWatchedList ? (
          <>
            <MovieCard movie={movie} />
            <section>
              <AddRating movie={movie} />
              {/* <SearchButton title="save" /> */}
            </section>
          </>
        ) : (
          <>
            <MovieCard movie={movie} />
            <SearchButton
              title="Add to Watch List"
              action={() => {
                dispatch(addToWatchList(movie));
              }}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default MoviePage;
