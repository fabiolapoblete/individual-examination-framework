import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";
import SearchBar from "../Components/SearchBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SearchPage() {
  const state = useSelector((state) => {
    return state;
  });

  const [movies, setMovies] = useState([state.movies]);

  useEffect(() => {
    setMovies(state.movies);
  }, [state]);

  return (
    <main>
      <PageTitle title="Movie Search" />;
      <SearchBar />;
      <section>
        {movies.map((movie, i) => (
          <MovieItem movie={movie} key={movie.id + i.toString()} />
        ))}
      </section>
    </main>
  );
}

export default SearchPage;
