import DetailedMovieCard from "../Components/DetailedMovieCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RegularButton from "../Components/RegularButton";
import { addToWatchList, removeFromWatchedList } from "../app/moviesSlice";
import style from "./MoviePage.module.scss";
import PageTitle from "../Components/PageTitle";
import Rating from "../Components/Rating";

function MovieDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return state;
  });

  const API_URL = "http://www.omdbapi.com/?apikey=37fe945a&i=" + params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((movieData) => {
        setMovie(movieData);
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

  return (
    <>
      {movie.Response == "False" ? (
        navigate("error")
      ) : (
        <main className={style.moviePage}>
          <PageTitle title={movie.Title} />
          <section className={style.moviePage__subheader}>
            <p>{movie.Language}</p>

            {movie.Type == "movie" ? (
              <>
                <span>|</span> <p>{movie.Runtime}</p>{" "}
              </>
            ) : null}

            <span>|</span>
            <p>
              {movie.Type} from {movie.Year}
            </p>
          </section>
          <section className={style.moviePage__movieCard}>
            <DetailedMovieCard movie={movie} />
            {inWatchList ? null : inWatchedList ? (
              <>
                <section>
                  <Rating movie={movie} />
                </section>
                <section>
                  <RegularButton
                    title="Remove from Watched"
                    action={() => {
                      dispatch(removeFromWatchedList(movie));
                    }}
                  />
                </section>
              </>
            ) : (
              <RegularButton
                title="Add to Watch List"
                action={() => {
                  dispatch(addToWatchList(movie));
                }}
              />
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default MovieDetails;
