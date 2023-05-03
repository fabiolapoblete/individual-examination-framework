/*Libraries*/
import { useSelector } from "react-redux";
/*Components*/
import PageTitle from "../Components/PageTitle";
import MovieAvatar from "../Components/MovieAvatar";
/*Styling*/
import style from "./PageStyling.module.scss";

function MyList() {
  /* Get state */
  const state = useSelector((state) => {
    return state;
  });
  /**/

  return (
    <main className={style.page}>
      <PageTitle title="My List" />
      <section className={style.page__movies}>
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
