import SingleCocktail from "./SingleCocktail";

const CocktailDay = ({ publishedCocktails }) => {
  
const cocktailContent = publishedCocktails[Math.floor(Math.random()*publishedCocktails.length)]

  return (
    <div className = "cocktailDay">
      <h1>Le Cocktail du Jour !</h1>
      <SingleCocktail cocktailContent={cocktailContent}/>
    </div>
  )
}

export default CocktailDay;