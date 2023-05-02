import { useState } from "react";
import RegularButton from "./RegularButton";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addRating } from "../app/moviesSlice";
import style from "./Rating.module.scss";

function Rating({ myRating }) {
  const [rating, setRating] = useState(myRating ? myRating : 0);

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

  const navigate = useNavigate();
  return (
    <>
      <section className={style.ratingContainer}>
        <h3>Rate the movie!</h3>
        <section className={style.rating}>
          <RegularButton
            title="-"
            disabled={rating == 0}
            action={() => {
              setRating(rating - 1);
            }}
          />
          <p className={style.ratingBox}>{rating} / 10</p>
          <RegularButton
            title="+"
            disabled={rating == 10}
            action={() => {
              setRating(rating + 1);
            }}
          />
          <RegularButton
            title={rating > 0 ? "edit" : "save"}
            action={() => {
              handleRating();
              navigate("/watched");
            }}
          />
        </section>
      </section>
    </>
  );
}

export default Rating;
