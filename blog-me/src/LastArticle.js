import SingleArticle from "./SingleArticle"

const LastArticle = ({productsFromApi}) =>{
    const sortedProductsByDate = productsFromApi.sort((a, b) =>(
        new Date(b.publishedAt) - new Date(a.publishedAt)
    ))
const lastThree = sortedProductsByDate.slice(0,3)

    return(
        <div>
            <h2>Tout les produits publiés les plus récents</h2>
            <div className = "lastArticle-css">
            {lastThree.map(article =>(
               <SingleArticle article={article}/>
            ))}
            </div>
        </div>
    )
}

export default LastArticle