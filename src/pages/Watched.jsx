import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";

function Watched() {
  const watchedMovies = useSelector((state) => state.watched);

  return (
    <main>
      <PageTitle title="Watched Movies" />
      {
        <section>
          {watchedMovies.map((movie) => (
            <>
              <MovieItem movie={movie} buttonTitle="-" key={movie.imdbID} />
              {movie.rating ? (
                <>
                  <p>{movie.rating}</p>
                  <span style={{ fontSize: 25, color: "white" }}>&#9733;</span>
                </>
              ) : null}
            </>
          ))}
        </section>
      }
    </main>
  );
}

export default Watched;
