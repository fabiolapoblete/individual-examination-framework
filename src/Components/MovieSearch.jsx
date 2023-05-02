//Libraries
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//Reducers
import { fillMovieList } from "../app/moviesSlice";
//Components
import RegularButton from "./RegularButton";
//Styling
import style from "./SearchBar.module.scss";

function MovieSearch() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const API_URL =
    "http://www.omdbapi.com/?apikey=37fe945a&s=" + searchTerm + "&page=" + page;

  let inputValue = "";

  //If there is no search term recommended movies will be shown
  //Else an API fetch is made with set search term.
  //If there is a search result the result is added to the movie list to be displayed

  useEffect(() => {
    searchTerm == "" || searchTerm == undefined
      ? fetch("/recommendedMovies.json")
          .then((response) => response.json())
          .then((recommendedMovies) => {
            console.log(recommendedMovies);
            dispatch(fillMovieList(recommendedMovies));
          })
      : fetch(API_URL)
          .then((response) => response.json())
          .then((movieData) => {
            setSearchResult(movieData.Search);
          });
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchResult) {
      dispatch(fillMovieList(searchResult));
    }
  }, [searchResult]);

  //State handeling for disabeling pagination buttons
  useEffect(() => {
    page == 1 ? setDisabled(true) : setDisabled(false);
  }, [page]);

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
      <RegularButton
        title="search"
        action={() => {
          setSearchTerm(inputValue);
          setPage(1);
        }}
      />
      <section className={style.searchBar__pagination}>
        <RegularButton
          title="&lt;"
          disabled={disabled}
          action={() => {
            setPage(page - 1);
          }}
        />
        <p className={style.searchBar__pagination__page}>{page}</p>
        <RegularButton
          title="&gt;"
          action={() => {
            setPage(page + 1);
          }}
        />
      </section>
    </section>
  );
}

export default MovieSearch;
