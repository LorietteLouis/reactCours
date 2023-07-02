import SingleArticle from "./SingleArticle"

const ArticleList = ({productsFromApi}) =>{

    return(
        <div>
            <h2>Tout les produits publiés</h2>
            <div className = "articleList-css">
            {productsFromApi.map(article =>(
                <SingleArticle article={article}/>
            ))}
            </div>
        </div>
    )
}

export default ArticleList