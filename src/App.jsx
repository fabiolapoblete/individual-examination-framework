/*Libraries*/
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
/*Componens*/
import Header from "./Components/Header";
import MyList from "./pages/MyList";
import Watched from "./pages/Watched";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./Components/Footer";
import PageNotFound from "./pages/PageNotFound";
/*Styling*/
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<MyList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/error" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
