import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const RandomCocktailPage = () => {
  const [randomCoctail, setRandomCoctail] = useState(null);
 // Elle renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier.

  const fetchRandomCoctails = async () => {
    const responseApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const responseJson = await responseApi.json();

    setRandomCoctail(responseJson.drinks[0]);
    //On immobilise que le premier responseJson qui fait appel à la responseApi. 
  };

  useEffect(() => {
    fetchRandomCoctails();
  }, []);
  //On utilise useEffect pour indiquer à React que notre composant doit êtres exécuter après chaque affichage. React enregistre la fonction passée en argument 
  return(
    <>
    <Header/>
    <div className="randomCoctail">
    <h1>Cocktail du Moment</h1>

    {randomCoctail === null && <p>Loading...</p>}

    {randomCoctail !== null && (
        <div>
        <p>{randomCoctail.strDrink}</p>
        <img src={randomCoctail.strDrinkThumb} alt={randomCoctail.strDrink} />
        </div>
    )}
    <button onClick={fetchRandomCoctails}>Changer le cocktail</button>
    {/* Le bouton à pour instruction via onClick de changer de cocktail aléatoirement à chaque fois qu'on clique. */}
    </div>
    <Footer/>
    </>
  )
};

export default RandomCocktailPage;