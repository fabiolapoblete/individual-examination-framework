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
      console.log(state.movies, "movies");
    },
    // addMovieToWatchList: (state, action) => {
    //   state.watchList.push(action.payload);
    // },
    // removeMovieFromWatchList: (state, action) => {},
    // addMovieToWatchedList: (state, action) => {
    //   state.watched.push(action.payload);
    // },
    // removeMovieFromWatchedList: (state, action) => {},
    // displaySearchResult: (state, action) => {},
  },
});

export const { fillMovieList } = movieSlice.actions;
//generates actions from our reducers
// export const {
//   //   addMovieToWatchList,
//   //   removeMovieFromWatchList,
//   //   addMovieToWatchedList,
//   //   removeMovieFromWatchedList,
//   //   displaySearchResult,
//   fillMovieList,
// } = movieSlice.actions;

//exports reducer
export default movieSlice.reducer;
