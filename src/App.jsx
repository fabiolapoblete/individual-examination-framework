//Libraries
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Components
import MyList from "./pages/MyList";
import Watched from "./pages/Watched";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import MovieDetails from "./pages/MovieDetails";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//Styling
import "./styling/App.css";

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
