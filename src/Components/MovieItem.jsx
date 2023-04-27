import { useDispatch } from "react-redux";
import style from "./MovieItem.module.scss";
import { addToWatchList } from "../app/moviesSlice";

function MovieItem({ movie }) {
  const dispatch = useDispatch();

  return (
    //Button for adding/removing items
    //Button takes title and action
    <figure className={style.poster}>
      <img className={style.poster__img} src={movie.Poster} alt="" />
      <button
        onClick={() => {
          dispatch(addToWatchList(movie));
        }}
      >
        +
      </button>
    </figure>
  );
}

export default MovieItem;
