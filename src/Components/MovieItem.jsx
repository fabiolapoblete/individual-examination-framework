import style from "./MovieItem.module.scss";

function MovieItem({ movie }) {
  return (
    //Button for adding/removing items
    //Button takes title and action
    <figure className={style.poster}>
      <img className={style.poster__img} src={movie.Poster} alt="" />
      <button>+</button>
    </figure>
  );
}

export default MovieItem;
