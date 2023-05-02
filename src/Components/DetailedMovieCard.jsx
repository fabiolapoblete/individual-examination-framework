import style from "./MovieCard.module.scss";

function DetailedMovieCard({ movie }) {
  const genres = movie.Genre;
  let genreList = [];

  if (genres) {
    genreList = genres.split(", ");
  }

  return (
    <article className={style.movieCard}>
      <img className={style.movieCard__img} src={movie.Poster} alt="" />
      <section className={style.movieCard__genre}>
        {genreList.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </section>
      <section>
        <h4>Plot </h4>
        <p className={style.movieCard__plot}>{movie.Plot}</p>
      </section>
      <section className={style.movieCard__rating}>
        <span style={{ fontSize: 25, color: "white" }}>&#9733;</span>
        <p>{movie.imdbRating} / 10</p>
      </section>
    </article>
  );
}

export default DetailedMovieCard;
