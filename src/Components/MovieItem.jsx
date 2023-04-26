import style from "./MovieItem.module.scss";

function MovieItem({ movie }) {
  return (
    //Figure with a background image of movie
    //Button for adding/removing items
    //Button takes title and action
    <figure
      className={style.poster}
      style={{
        backgroundImage: `url(${movie.Poster})`,
      }}
    >
      <button>-</button>
    </figure>
  );
}

export default MovieItem;
