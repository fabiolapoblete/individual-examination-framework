import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageTitle from "../Components/PageTitle";
import MovieItem from "../Components/MovieItem";

function WatchList() {
  const state = useSelector((state) => {
    return state;
  });

  const [watchList, setWatchList] = useState([state.watchList]);

  useEffect(() => {
    setWatchList(state.watchList);
    console.log(watchList);
  }, [state]);

  return (
    <main>
      <PageTitle title="My List" />
      {/*Någon typ av filterfunktion*/}
      {watchList.map((movie, i) => {
        <MovieItem movie={movie} key={movie.id + i.toString()} />;
      })}
    </main>
  );
}

export default WatchList;
