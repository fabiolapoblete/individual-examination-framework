import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";

function Watched() {
  const watchedMovies = useSelector((state) => state.watched);

  console.log(watchedMovies, "watched");

  return (
    <main>
      <PageTitle title="Watched Movies" />
      {
        <section>
          {watchedMovies.map((movie) => (
            <>
              <MovieItem movie={movie} buttonTitle="-" key={movie.imdbID} />
              {movie.rating ? <p>{movie.rating} </p> : null}
            </>
          ))}
        </section>
      }
    </main>
  );
}

export default Watched;
