import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieAvatar from "../Components/MovieAvatar";
import style from "./WatchList.module.scss";

function MyList() {
  const state = useSelector((state) => {
    return state;
  });

  return (
    <main className={style.watchList}>
      <PageTitle title="My List" />
      <section className={style.watchList__movies}>
        {state.watchList.map((movie) => (
          <MovieAvatar
            movie={movie}
            buttonTitle="&#x2713;"
            key={movie.imdbID}
          />
        ))}
      </section>
    </main>
  );
}

export default MyList;
