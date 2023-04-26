import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fillMovieList } from "../app/moviesSlice";
import style from "./SearchBar.module.scss";
import Button from "./Button";

function SearchBar() {
  const dispatch = useDispatch();
  let inputValue = "";

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Emma");
  const [page, setPage] = useState(1);

  const API_URL =
    "http://www.omdbapi.com/?apikey=37fe945a&s=" + searchTerm + "&page=" + page;

  useEffect(() => {
    console.log("fetch");
    searchTerm == "" || searchTerm == undefined
      ? null
      : fetch(API_URL)
          .then((response) => response.json())
          .then((movieData) => {
            setSearchResult(movieData.Search);
          });
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchResult > 0) {
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
      <Button title="search" action={() => setSearchTerm(inputValue)} />
      <section className={style.searchBar__pagination}>
        {/* <Button
          className={style.searchBar__pagination__button}
          disabled={page == 1}
          title="&lt;"
          action={() => setPage(page - 1)}
        />
        <p className={style.searchBar__pagination__page}>{page}</p>
        <Button title="&gt;" action={() => setPage(page + 1)} /> */}
        <button
          className={style.searchBar__pagination__button}
          disabled={page == 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          &lt;
        </button>
        <p className={style.searchBar__pagination__page}>{page}</p>
        <button
          className={style.searchBar__pagination__button}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          &gt;
        </button>
      </section>
    </section>
  );
}

export default SearchBar;
