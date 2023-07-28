import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const RandomCocktailPage = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
 // Elle renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier.

  const fetchRandomCocktails = async () => {
    const responseApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const responseJson = await responseApi.json();

    setRandomCocktail(responseJson.drinks[0]);
    //On immobilise que le premier responseJson qui fait appel à la responseApi. 
  };

  useEffect(() => {
    fetchRandomCocktails();
  }, []);
  //On utilise useEffect pour indiquer à React que notre composant doit êtres exécuter après chaque affichage. React enregistre la fonction passée en argument 
  return(
    <>
    <Header/>
    <div className="randomCocktail">
    <h1>Cocktail du Moment</h1>

    {randomCocktail === null && <p>Loading...</p>}

    {randomCocktail !== null && (
        <div>
        <p>{randomCocktail.strDrink}</p>
        <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
        </div>
    )}
    <button onClick={fetchRandomCocktails}>Changer le cocktail</button>
    {/* Le bouton à pour instruction via onClick de changer de cocktail aléatoirement à chaque fois qu'on clique. */}
    <Link to={"/cocktails/show/" + randomCocktail.idDrink}><button>Voir +</button></Link>
    </div>
    <Footer/>
    </>
  )
};

export default RandomCocktailPage;