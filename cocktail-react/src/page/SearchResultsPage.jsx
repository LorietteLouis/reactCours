import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useSearchParams } from "react-router-dom";
import Footer from "../component/Footer";

const SearchResultsPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
    //Permet de récupérer les paramètres "Search" dans l'url

  useEffect(() => {
    fetchSearchResults();
  }, [search]);



  const fetchSearchResults = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const responseJs = await response.json();
    //Cela permet de faire appel via fetch à l'Api puis de l'envoyer à useState pour stocker le résultat
    setCocktails(responseJs.drinks);
  };

  return (
    <>
      <Header />
      <h1>Résultats de la recherche : </h1>

      <div>
        {cocktails.map((cocktail) => (
          <div>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default SearchResultsPage;