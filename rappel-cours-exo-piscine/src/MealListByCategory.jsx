const MealListByCategory = ({ isLoading, mealsByCategory }) => {
    return (
      <div>
        <h2>Liste des recettes liées à la catégorie : </h2>
  
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <div>
            {mealsByCategory.map((meal) => {
              return (
                <div key={meal.idMeal}>
                  <h3>{meal.strMeal}</h3>
                  <img src={meal.strMealThumb} alt={meal.strMealThumb} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  
export default MealListByCategory;
