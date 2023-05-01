import { useState } from "react";
import SearchButton from "../Components/SearchButton";

function ImputBox({ movie }) {
  const [textInput, setTextInput] = useState("");

  const handleAddReview = (event) => {
    let reviewedMovie = movie;

    let review = textInput;

    reviewedMovie.review = review; //Lagt till nytt keyvalue

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
