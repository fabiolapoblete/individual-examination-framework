import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieAvatar from "../Components/MovieAvatar";

function Watched() {
  const state = useSelector((state) => {
    return state;
  });

  return (
    <main>
      <PageTitle title="Watched Movies" />
      {
        <section>
          {state.watched.map((movie) => (
            <>
              <MovieAvatar movie={movie} buttonTitle="-" key={movie.imdbID} />
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
