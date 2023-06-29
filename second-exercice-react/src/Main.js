const meal = () => {
    const mealsListResponseFromFakeApi = [
        {
          id: 1,
          title: "Poulet au légumes",
          image: "https://picsum.photos/200/300",
          description: "Un bon poulet avec des légumes",
          isPublished: false
        },
        {
          id: 2,
          title: "Boeuf bourguignon",
          image: "https://picsum.photos/200/300",
          description: "Un bon boeuf bourguignon",
          isPublished: true
        },
        {
          id: 3,
          title: "Poisson aux légumes",
          image: "https://picsum.photos/200/300",
          description: "Un bon poisson avec des légumes",
          isPublished: true
        },
      ];
  
    return (
        <div>
        {/* je fais une boucle sur ma variable mealsListResponseFromFakeApi */}
        {mealsListResponseFromFakeApi.map((meal) => {
          // dans ma boucle, pour chaque élément, je retourne du jsx si la recette est publiée
          return (
            meal.isPublished && (
              // j'affiche le titre, l'image et la description de la recette
              <article>
                <h2>{meal.title}</h2>
                <img src={meal.image} alt={meal.title} />
                <p>{meal.description}</p>
              </article>
            )
          );
        })}
      </div>
    );
  };
export default meal;