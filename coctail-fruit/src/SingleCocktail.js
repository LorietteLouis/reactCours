const SingleCocktail = ({cocktailContent}) =>{
    return(
        <>
      <h2>{cocktailContent.name}</h2>
        <p>{cocktailContent.price} euros</p>
        <p>Ingrédients : {cocktailContent.ingredients}</p>
    </>
  )
}

export default SingleCocktail