import { useState } from "react";
import SearchButton from "../Components/SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addRating } from "../app/moviesSlice";

function AddRating() {
  const [rating, setRating] = useState(0);
  const [currentMovie, setCurrentMovie] = useState({});
  const dispatch = useDispatch();

  const params = useParams();

  console.log(params.id);

  const state = useSelector((state) => {
    return state;
  });

  const handleRating = () => {
    let index = state.watched.findIndex((movie) => movie.imdbID == params.id);
    let movie = state.watched[index];
    setCurrentMovie(movie);
    console.log(currentMovie);
    currentMovie.myRating = rating; //lagt till nytt property;
    dispatch(addRating(currentMovie));
  };

  return (
    <>
      <section>
        <SearchButton
          title="-"
          disabled={rating == 0}
          action={() => {
            setRating(rating - 1);
          }}
        />
        <p>{rating} / 10</p>
        <SearchButton
          title="+"
          disabled={rating == 10}
          action={() => {
            setRating(rating + 1);
          }}
        />
      </section>
      <SearchButton title="save" action={handleRating} />
    </>
  );
}

export default AddRating;
