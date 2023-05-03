import DetailedMovieCard from "../Components/DetailedMovieCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RegularButton from "../Components/RegularButton";
import {
  addToWatchList,
  removeFromWatchList,
  removeFromWatchedMovies,
} from "../app/moviesSlice";
import pageStyle from "./PageStyling.module.scss";
import PageTitle from "../Components/PageTitle";
import style from "./MovieDetails.module.scss";
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

  let clickedAvatar = state.watchedMovies.find(
    (movie) => movie.imdbID == params.id
  );

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
  const inWatchedMovies = state.watchedMovies.some((movieItem) => {
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
        <main className={pageStyle.page}>
          <PageTitle title={movie.Title} />
          <section className={style.subheader}>
            <p>{movie.Language}</p>

            {movie.Type == "movie" ? (
              <>
                <span>|</span> <p>{movie.Runtime}</p>{" "}
              </>
            ) : null}
            <>
              <span>|</span>
              <p>
                {movie.Type} from {movie.Year}
              </p>
            </>
          </section>
          <section className={style.movieCard}>
            <DetailedMovieCard movie={movie} />
            {inWatchList ? (
              <section>
                <RegularButton
                  title="Remove from Watch List"
                  action={() => {
                    dispatch(removeFromWatchList(movie));
                  }}
                />
              </section>
            ) : inWatchedMovies ? (
              <>
                <section>
                  <Rating movie={movie} myRating={clickedAvatar.rating} />
                </section>
                <section>
                  <RegularButton
                    title="Remove from Watched"
                    action={() => {
                      dispatch(removeFromWatchedMovies(movie));
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
