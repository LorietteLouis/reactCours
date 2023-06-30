import SingleCocktail from "./SingleCocktail";

const CocktailsList = ({ publishedCocktails }) => {
  return (
    <div className="allCocktails">
      {publishedCocktails.map((cocktailContent) => {
        return (
          cocktailContent.isPublished && (
          <div className='cocktailList'>
            <SingleCocktail cocktailContent={cocktailContent}/>
          </div>
          )
        );
      })}
    </div>
  );
};

export default CocktailsList;