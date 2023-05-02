import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fillMovieList } from "../app/moviesSlice";
import style from "./SearchBar.module.scss";
import SearchButton from "./SearchButton";

function SearchBar() {
  const dispatch = useDispatch();
  let inputValue = "";

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const API_URL =
    "http://www.omdbapi.com/?apikey=37fe945a&s=" + searchTerm + "&page=" + page;

  useEffect(() => {
    searchTerm == "" || searchTerm == undefined
      ? fetch("../public/recommendedMovies.json")
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

  const [disabled, setDisabled] = useState(false);

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
      <SearchButton
        title="search"
        action={() => {
          setSearchTerm(inputValue);
          setPage(1);
        }}
      />
      <section className={style.searchBar__pagination}>
        <SearchButton
          title="&lt;"
          disabled={disabled}
          action={() => {
            setPage(page - 1);
          }}
        />
        <p className={style.searchBar__pagination__page}>{page}</p>
        <SearchButton
          title="&gt;"
          action={() => {
            setPage(page + 1);
          }}
        />
      </section>
    </section>
  );
}

export default SearchBar;
