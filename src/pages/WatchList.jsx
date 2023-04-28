import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";

function WatchList() {
  const movies = useSelector((state) => state.watchList);
  console.log(movies);

  return (
    <main>
      <PageTitle title="My List" />
      {/*Någon typ av filterfunktion*/}
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          buttonTitle="&#x2713;"
          key={movie.imdbID}
          inWatchList={true}
        />
      ))}
    </main>
  );
}

export default WatchList;
