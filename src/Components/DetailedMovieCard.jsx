/*Styling*/
import style from "./DetailedMovieCard.module.scss";

function DetailedMovieCard({ movie }) {
  /* Splits the Genre list in the movie objekt for easier styling*/
  const genres = movie.Genre;
  let genreList = [];

  if (genres) {
    genreList = genres.split(", ");
  }
  /**/

  return (
    <article className={style.detailedMovieCard}>
      <img
        className={style.detailedMovieCard__img}
        src={
          movie.Poster == "N/A"
            ? "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
            : movie.Poster
        }
        alt=""
      />
      <section className={style.detailedMovieCard__genre}>
        {genreList.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </section>
      <section>
        <h4>Plot </h4>
        <p className={style.detailedMovieCard__plot}>{movie.Plot}</p>
      </section>
      <section className={style.detailedMovieCard__rating}>
        <span style={{ fontSize: 25, color: "#FFB92A" }}>&#9733;</span>
        <p>{movie.imdbRating} / 10</p>
      </section>
    </article>
  );
}

export default DetailedMovieCard;
