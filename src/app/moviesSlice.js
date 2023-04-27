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
  },
});

export const { fillMovieList, addToWatchList } = movieSlice.actions;

export default movieSlice.reducer;
