/*Libraries*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
/*Reducers*/
import { addRating } from "../app/moviesSlice";
/*Components*/
import RegularButton from "./RegularButton";
/*Styling*/
import style from "./Rating.module.scss";

function Rating({ myRating }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [rating, setRating] = useState(myRating ? myRating : null);
  const [buttonTitle, setButtonTitle] = useState(myRating ? "edit" : "save");

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
      <section className={style.ratingContainer}>
        <h3>Rate the movie!</h3>
        <section className={style.ratingContainer__setRating}>
          <RegularButton
            title="-"
            disabled={rating == 0 || rating == null}
            action={() => {
              setRating(rating - 1);
              setButtonTitle("save");
            }}
          />
          <p className={style.ratingContainer__displayRating}>{rating} / 10</p>
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
