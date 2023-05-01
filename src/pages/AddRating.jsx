import { useState } from "react";
import SearchButton from "../Components/SearchButton";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addRating } from "../app/moviesSlice";

function AddRating({ movie }) {
  const [rating, setRating] = useState(movie.rating ? movie.rating : 0);

  const dispatch = useDispatch();

  const params = useParams();

  const handleRating = () => {
    dispatch(
      addRating({
        id: params.id,
        rating,
      })
    );
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
