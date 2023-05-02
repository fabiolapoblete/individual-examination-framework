//Libraries
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Components
import WatchList from "./pages/WatchList";
import Watched from "./pages/Watched";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import MoviePage from "./pages/MoviePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//Styling
import "./styling/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/error" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
