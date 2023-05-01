import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchButton from "../Components/SearchButton";

function ImputBox({ movie }) {
  const [textInput, setTextInput] = useState("");

  const dispatch = useDispatch();

  const handleAddReview = (event) => {
    let reviewedMovie = movie;
    console.log(reviewedMovie);

    let review = textInput;
    console.log(review);

    reviewedMovie.review = review; //Lagt till nytt keyvalue

    // dispatch(addReview(reviewedMovie));
    event.preventDefault();
  };

  return (
    <form>
      <textarea
        name=""
        id=""
        cols="48"
        rows="10"
        placeholder="What did you think about the movie?"
        onChange={(event) => setTextInput(event.target.value)}
      ></textarea>
      <SearchButton title="save" action={handleAddReview} />
    </form>
  );
}

export default ImputBox;
