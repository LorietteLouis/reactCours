import SingleCocktail from "./SingleCocktail";

const LastCocktail = ({ publishedCocktails }) => {
  return (
      
    <div class="latestCock">
      {publishedCocktails.map(
        (cocktailContent, index) =>
          index >= publishedCocktails.length - 3 && (
            <div className = "lastCocktail">
              <SingleCocktail cocktailContent={cocktailContent} />
            </div>
          )
      )}
    </div>
  )
}
export default LastCocktail;