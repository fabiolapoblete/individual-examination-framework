import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";
import SearchBar from "../Components/SearchBar";
import { useSelector } from "react-redux";
import style from "./SearchPage.module.scss";

function SearchPage() {
  const state = useSelector((state) => {
    return state;
  });

  // const [movies, setMovies] = useState([state.movies]);
  // console.log(state.movies);

  // useEffect(() => {
  //   setMovies(state.movies);
  // }, [state]);

  // console.log(movies);

  return (
    <main className={style.searchPage}>
      <PageTitle title="Movie Search" />
      <SearchBar />

      <section className={style.searchPage__movies}>
        {state.movies &&
          state.movies.map((movie) => (
            <MovieItem movie={movie} key={movie.imdbID} buttonTitle="+" />
          ))}
      </section>
    </main>
  );
}

export default SearchPage;
