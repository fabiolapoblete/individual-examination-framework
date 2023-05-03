/*Libraries*/
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
/*Reducers*/
import {
  addToWatchList,
  removeFromWatchList,
  removeFromWatchedMovies,
} from "../app/moviesSlice";
/*Components*/
import PageTitle from "../Components/PageTitle";
import DetailedMovieCard from "../Components/DetailedMovieCard";
import Rating from "../Components/Rating";
import RegularButton from "../Components/RegularButton";
/*Styling*/
import pageStyle from "./PageStyling.module.scss";
import style from "./MovieDetails.module.scss";

function MovieDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  /* Get state */
  const state = useSelector((state) => {
    return state;
  });
  /**/

  const [movie, setMovie] = useState({});

  /* Declaration of API_URL using id from page url */
  const API_URL = "http://www.omdbapi.com/?apikey=37fe945a&i=" + params.id;
  /**/

  /* In order to get full details about a movie, a specific search has to be made. Hence another fetch towards API using id of current movie */
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((movieData) => {
        setMovie(movieData);
      });
  }, []);
  /**/

  /* Fetched movie details are not stored in store.
  In the Rating component rating can be set and added as a property to the movie stored in the store.
  In order to show the rating when switching pages "clickedAvatar.rating", which is the actual movie in store,
  is passed as a prop to the Rating component */
  let clickedAvatar = state.watchedMovies.find(
    (movie) => movie.imdbID == params.id
  );
  /**/

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
  /*PERHAPS POSSIBLE TO REFRACTOR*/

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
