import { createSlice } from "@reduxjs/toolkit";

/* Declares the initial states*/
const initialState = {
  watchList: [
    {
      Title: "Turning Red",
      Year: "2022",
      Rated: "PG",
      Released: "11 Mar 2022",
      Runtime: "100 min",
      Genre: "Animation, Adventure, Comedy",
      Director: "Domee Shi",
      Writer: "Domee Shi, Julia Cho, Sarah Streicher",
      Actors: "Rosalie Chiang, Sandra Oh, Ava Morse",
      Plot: "A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.",
      Language: "English, Cantonese, Korean",
      Country: "United States, Canada",
      Awards: "Nominated for 1 Oscar. 7 wins & 88 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWYxZDMxYWUtNjNiZC00MDE1LWI2Y2QtNWZhNDAyMGY5ZjVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.0/10" },
        { Source: "Rotten Tomatoes", Value: "95%" },
        { Source: "Metacritic", Value: "83/100" },
      ],
      Metascore: "83",
      imdbRating: "7.0",
      imdbVotes: "131,695",
      imdbID: "tt8097030",
      Type: "movie",
      DVD: "11 Mar 2022",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Top Gun: Maverick",
      Year: "2022",
      Rated: "PG-13",
      Released: "27 May 2022",
      Runtime: "130 min",
      Genre: "Action, Drama",
      Director: "Joseph Kosinski",
      Writer: "Jim Cash, Jack Epps Jr., Peter Craig",
      Actors: "Tom Cruise, Jennifer Connelly, Miles Teller",
      Plot: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to ...",
      Language: "English",
      Country: "United States",
      Awards: "Won 1 Oscar. 87 wins & 199 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.3/10" },
        { Source: "Metacritic", Value: "78/100" },
      ],
      Metascore: "78",
      imdbRating: "8.3",
      imdbVotes: "560,750",
      imdbID: "tt1745960",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$718,732,821",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Dune",
      Year: "2021",
      Rated: "PG-13",
      Released: "22 Oct 2021",
      Runtime: "155 min",
      Genre: "Action, Adventure, Drama",
      Director: "Denis Villeneuve",
      Writer: "Jon Spaihts, Denis Villeneuve, Eric Roth",
      Actors: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
      Plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      Language: "English, Mandarin",
      Country: "United States, Canada",
      Awards: "Won 6 Oscars. 170 wins & 281 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.0/10" },
        { Source: "Rotten Tomatoes", Value: "83%" },
        { Source: "Metacritic", Value: "74/100" },
      ],
      Metascore: "74",
      imdbRating: "8.0",
      imdbVotes: "665,392",
      imdbID: "tt1160419",
      Type: "movie",
      DVD: "22 Oct 2021",
      BoxOffice: "$108,327,830",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ],
  watchedMovies: [],
  searchResultList: [],
};

/* Creates slice called movies, with multiple reducers */
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    /*This reducer replaces the searchResultList with the received payload (list of movies)*/
    fillSearchResultList: (state, action) => {
      state.searchResultList = action.payload;
    },
    /* Adds a movie to the watchList */
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    /* Removes a movie from the watchList using the movies id to find the correct movie in watchList */
    removeFromWatchList: (state, action) => {
      let index = state.watchList.findIndex(
        (movie) => movie.imdbID == action.payload.imdbID
      );
      state.watchList.splice(index, 1);
    },
    /* Adds a movie to watchedMovies */
    addToWatchedMovies: (state, action) => {
      state.watchedMovies.push(action.payload);
    },
    /* Removes a movie from watchedMovies using the movies id to find the correct movie in watchedMovies */
    removeFromWatchedMovies: (state, action) => {
      let index = state.watchedMovies.findIndex(
        (movie) => movie.imdbID == action.payload.imdbID
      );
      state.watchedMovies.splice(index, 1);
    },
    /* Uses an id to find the correct movie in watchedMovies. A new propery, rating, is added and given a value*/
    addRating: (state, action) => {
      let movie = state.watchedMovies.find(
        (movie) => movie.imdbID == action.payload.id
      );
      movie.rating = action.payload.rating;
    },
  },
});

export const {
  fillSearchResultList,
  addToWatchList,
  removeFromWatchList,
  addToWatchedMovies,
  removeFromWatchedMovies,
  addRating,
} = movieSlice.actions;

export default movieSlice.reducer;
