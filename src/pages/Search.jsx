import PageTitle from "../Components/PageTitle";
import MovieAvatar from "../Components/MovieAvatar";
import MovieSearch from "../Components/MovieSearch";
import { useSelector } from "react-redux";
// import style from "./SearchPage.module.scss";
import style from "./PageStyling.module.scss";

function Search() {
  const state = useSelector((state) => {
    return state;
  });

  console.log(state.searchResultList);

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
