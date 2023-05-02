import PageTitle from "../Components/PageTitle";
import MovieAvatar from "../Components/MovieAvatar";
import MovieSearch from "../Components/MovieSearch";
import { useSelector } from "react-redux";
import style from "./SearchPage.module.scss";

function Search() {
  const state = useSelector((state) => {
    return state;
  });

  console.log(state.movies);

  return (
    <main className={style.searchPage}>
      <PageTitle title="Movie Search" />
      <MovieSearch />

      <section className={style.searchPage__movies}>
        {state.movies &&
          state.movies.map((movie) => (
            <MovieAvatar movie={movie} key={movie.imdbID} buttonTitle="+" />
          ))}
      </section>
    </main>
  );
}

export default Search;
