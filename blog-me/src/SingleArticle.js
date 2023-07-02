const SingleArticle = ({article}) =>{
    const publishedDate = (element) =>{
        const myDate = new Date(element).toDateString("M/Y")
        return myDate
    }

    return(
        <article>
        <h3>{article.name}</h3>
        <p>{article.price}</p>
        <p>{article.description}</p>
        <h4>{article.category}</h4>
        <p>{publishedDate(article.publishedAt)}</p>
    </article>
    )
}
export default SingleArticle