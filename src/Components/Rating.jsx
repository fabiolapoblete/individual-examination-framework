import { useState } from "react";
import RegularButton from "./RegularButton";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addRating } from "../app/moviesSlice";
import style from "./Rating.module.scss";

function Rating({ myRating }) {
  const [rating, setRating] = useState(myRating ? myRating : null);
  const [buttonTitle, setButtonTitle] = useState(myRating ? "edit" : "save");

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
              setButtonTitle("save");
            }}
          />
          <p className={style.ratingBox}>{rating} / 10</p>
          <RegularButton
            title="+"
            disabled={rating == 10}
            action={() => {
              setRating(rating + 1);
              setButtonTitle("save");
            }}
          />
          <RegularButton
            title={buttonTitle}
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
