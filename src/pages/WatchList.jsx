import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";
import style from "./WatchList.module.scss";

function WatchList() {
  const movies = useSelector((state) => state.watchList);

  return (
    <main className={style.watchList}>
      <PageTitle title="My List" />
      {/*Någon typ av filterfunktion*/}
      <section className={style.watchList__movies}>
        {movies.map((movie) => (
          <MovieItem
            movie={movie}
            buttonTitle="&#x2713;"
            key={movie.imdbID}
            inWatchList={true} //kan ta bort?
          />
        ))}
      </section>
    </main>
  );
}

export default WatchList;
