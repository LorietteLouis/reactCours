import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";

const ShowCocktailPage = () => {
    // On récupère l'id du cocktail dans l'URL.
    const [cocktail, setCocktail] = useState(null);
    const {id} = useParams()

const fetchShowCocktails = async () => {
    const responseApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    //${id} est l'id du cocktail récupéré dans l'URL.
    const responJs = await responseApi.json()

    setCocktail(responJs.drinks[0])
}
    useEffect(()=>{
        fetchShowCocktails()
    })
    return(
        <>
        <Header/>
        {cocktail &&(
        <div key={cocktail.idDrink}>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strInstructions}</p>
        </div>
        // On affiche les informations du cocktail
        )}
        <Footer/>
        </>
    )
}


export default ShowCocktailPage;