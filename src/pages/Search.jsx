/*Libraries*/
import { useSelector } from "react-redux";
/*Components*/
import PageTitle from "../Components/PageTitle";
import MovieSearch from "../Components/MovieSearch";
import MovieAvatar from "../Components/MovieAvatar";
/*Styling*/
import style from "./PageStyling.module.scss";

function Search() {
  /* Get state */
  const state = useSelector((state) => {
    return state;
  });
  /**/

  return (
    <main className={style.page}>
      <PageTitle title="Movie Search" />
      <MovieSearch />

      <section className={style.page__movies}>
        {state.searchResultList.length > 0 ? (
          state.searchResultList.map((movie) => (
            <MovieAvatar movie={movie} key={movie.imdbID} buttonTitle="+" />
          ))
        ) : (
          <p>No search results, try again!</p>
        )}
      </section>
    </main>
  );
}

export default Search;
