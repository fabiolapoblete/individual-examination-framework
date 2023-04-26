import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fillMovieList } from "../app/moviesSlice";
import style from "./SearchBar.module.scss";

function SearchBar() {
  const dispatch = useDispatch();
  let inputValue = "";

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Emma");

  const API_URL = "http://www.omdbapi.com/?apikey=37fe945a&s=" + searchTerm;

  useEffect(() => {
    console.log("fetch");
    searchTerm == "" || searchTerm == undefined
      ? null
      : fetch(API_URL)
          .then((response) => response.json())
          .then((movieData) => {
            setSearchResult(movieData.Search);
          });
  }, [searchTerm]);

  useEffect(() => {
    if (searchResult.length > 0) {
      console.log("dispatch");
      dispatch(fillMovieList(searchResult));
    }
  }, [searchResult]);

  return (
    <section className={style.searchBar}>
      <input
        className={style.searchBar__input}
        onChange={(e) => {
          inputValue = e.target.value;
        }}
        id="search"
        type="text"
        placeholder="search..."
      />
      <button
        className="searchButton"
        type="button"
        onClick={() => setSearchTerm(inputValue)}
      >
        SEARCH
      </button>
    </section>
  );
}

export default SearchBar;
