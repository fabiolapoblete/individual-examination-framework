/*Libraries*/
import { useSelector } from "react-redux";
/*Components*/
import PageTitle from "../Components/PageTitle";
import MovieAvatar from "../Components/MovieAvatar";
/*Styling*/
import style from "./PageStyling.module.scss";

function Watched() {
  /* Get state*/
  const state = useSelector((state) => {
    return state;
  });
  /**/

  return (
    <main className={style.page}>
      <PageTitle title="Watched Movies" />
      {
        <section className={style.page__movies}>
          {state.watchedMovies.map((movie) => (
            <section key={movie.imdbID}>
              <MovieAvatar movie={movie} buttonTitle="-" />
              {movie.rating ? (
                <section className={style.page__movies__rating}>
                  <p>{movie.rating} / 10</p>
                  <span style={{ fontSize: 25, color: "#FFB92A" }}>
                    &#9733;
                  </span>
                </section>
              ) : null}
            </section>
          ))}
        </section>
      }
    </main>
  );
}

export default Watched;
