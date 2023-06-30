import SingleCocktail from "./SingleCocktail"

const RhumCocktail = ({publishedCocktails}) =>{

    return(
        <div className = "moreRhum">
            {publishedCocktails.map( cocktailContent => cocktailContent.ingredients.includes("Rhum") &&(
            <div className = "rhumYes">
                <SingleCocktail cocktailContent={cocktailContent}/>
            </div>
                ))}
        </div>
    )
}

export default RhumCocktail