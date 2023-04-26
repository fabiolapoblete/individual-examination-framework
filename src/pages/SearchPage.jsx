import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";
import SearchBar from "../Components/SearchBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./SearchPage.module.scss";

function SearchPage() {
  const state = useSelector((state) => {
    return state;
  });

  const [movies, setMovies] = useState([state.movies]);

  useEffect(() => {
    setMovies(state.movies);
  }, [state]);

  return (
    <main className={style.searchPage}>
      <PageTitle title="Movie Search" />
      <SearchBar />
      <section className={style.searchPage__movies}>
        {movies.map((movie, i) => (
          <MovieItem movie={movie} key={movie.id + i.toString()} />
        ))}
      </section>
    </main>
  );
}

export default SearchPage;