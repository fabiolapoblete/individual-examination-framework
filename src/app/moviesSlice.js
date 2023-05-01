import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: [],
  watched: [],
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fillMovieList: (state, action) => {
      state.movies = action.payload;
    },
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
      let id = state.watchList.findIndex(
        (movie) => movie.imdbID == action.payload.imdbID
      );
      state.watchList.splice(id, 1);
    },
    addToWatchedList: (state, action) => {
      state.watched.push(action.payload);
    },
    addRating: (state, action) => {
      let index = state.watched.findIndex(
        (movie) => movie.imdbID == action.payload.imdbID
      );
      state.watched.splice(index, 1);
      state.watched.push(action.payload);
      console.log(state.watched);
    },
  },
});

export const {
  fillMovieList,
  addToWatchList,
  removeFromWatchList,
  addToWatchedList,
  addRating,
} = movieSlice.actions;

export default movieSlice.reducer;
