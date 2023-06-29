








const ArticlesList = () => {

    const articlesResponseFakeFromApi = [
      {
            id : 1,
            title : "L'intervention de la section Ratels",
            content : `contenu de l'histoire`,
            img :"https://pbs.twimg.com/media/DbjEBLiXkAAXFHh?format=jpg&name=4096x4096"
        },
        {
            id : 2,
            title : "Le secret du cube de Stella",
            content : `contenu de l'histoire`,
            img : "https://pbs.twimg.com/media/DbjEBLiXkAAXFHh?format=jpg&name=4096x4096"
        }
    ]
  return (
    <div>
      {/* 
        on fait une boucle sur la variable articlesResponseFakeFromApi 
        qui contient les articles (faussement) récupérés depuis l'API
        La fonction .map permet de faire une boucle sur un tableau (comme la 
        fonction foreach)
        La map prend en parametre une fonction qui sera executée pour chaque 
        élément du tableau
        Ici, pour chaque élément du tableau, on retourne du JSX, permettant
        de créer une balise article avec les données de l'article
      */}
      {articlesResponseFakeFromApi.map((article) => (
        <article>
          <p>{article.title}</p>
          <p>{article.content}</p>
          <img src={article.img} alt={article.title} />
        </article>
      ))}
    </div>
  );
};

export default ArticlesList;