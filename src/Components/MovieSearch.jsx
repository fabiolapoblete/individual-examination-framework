/*Libraries*/
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
/*Reducers*/
import { fillSearchResultList } from "../app/moviesSlice";
/*Components*/
import RegularButton from "./RegularButton";
/*Styling*/
import style from "./SearchBar.module.scss";

function MovieSearch() {
  const dispatch = useDispatch();

  /* Declaration of states */
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  /**

  /* Declaration of variables */
  const API_URL =
    "http://www.omdbapi.com/?apikey=37fe945a&s=" + searchTerm + "&page=" + page;

  let inputValue = "";
  /**/

  /* 
  If there is no search term, recommended movies will be shown.
  If a search is made a fetch to the API is made with set search term.
  If there is a search result the state is updated and movies are displayed.
  */
  useEffect(() => {
    searchTerm == ""
      ? fetch("/recommendedMovies.json")
          .then((response) => response.json())
          .then((recommendedMovies) => {
            dispatch(fillSearchResultList(recommendedMovies));
          })
      : fetch(API_URL)
          .then((response) => response.json())
          .then((movieData) => {
            console.log(movieData);
            setSearchResult(movieData.Search);
            console.log(searchResult);
          });
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchResult) {
      dispatch(fillSearchResultList(searchResult));
    } else if (searchResult == undefined) {
      dispatch(fillSearchResultList([]));
    }
  }, [searchResult]);
  /**/

  return (
    <section className={style.searchBar}>
      <input
        className={style.searchBar__input}
        onChange={(e) => {
          inputValue = e.target.value;
        }}
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
          disabled={page == 1}
          action={() => {
            setPage(page - 1);
          }}
        />
        <p className={style.searchBar__pagination__pageNumber}>{page}</p>
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
