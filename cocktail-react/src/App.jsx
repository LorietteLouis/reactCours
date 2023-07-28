import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./page/HomePage";
import ListCocktailPage from "./page/ListCocktailPage";
import RandomCocktailPage from "./page/RandomCocktailPage";
import SearchResultsPage from "./page/SearchResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<ListCocktailPage />} />
        <Route path="/cocktails/random" element={<RandomCocktailPage />} />
        <Route path="/search-results" element={<SearchResultsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
