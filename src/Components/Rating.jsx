import { useState } from "react";
import RegularButton from "./RegularButton";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addRating } from "../app/moviesSlice";

function Rating({ movie }) {
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
        <RegularButton
          title="-"
          disabled={rating == 0}
          action={() => {
            setRating(rating - 1);
          }}
        />
        <p>{rating} / 10</p>
        <RegularButton
          title="+"
          disabled={rating == 10}
          action={() => {
            setRating(rating + 1);
          }}
        />
      </section>
      <RegularButton title="save" action={handleRating} />
    </>
  );
}

export default Rating;
