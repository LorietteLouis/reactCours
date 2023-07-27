import{useEffect, useState} from "react"
const ListCategories = () => {
    const [categories, setCategories] = useState([]);
    const [mealsByCategory, setMealsByCategory] = useState([])
    //useState renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier.
    // Dans notre cas mealsByCategory et setMealsByCategory.
    const fetchCategories = async ( )=>{
        const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const categoriesJs = await categoriesResponse.json();

        setCategories(categoriesJs.categories);
    };
    useEffect(()=>{
        fetchCategories()
    },[])
    //useEffect fait indiquera à react les données "dans notre cas une api de catégorie de Plât" qu'il doit faire appel dans un utilisateur vide "[]"
    //A chaque Màj "ou raffrechissement" useEffect donnera les nouvelles données.

    const handleCategoryClick = async (titleCategory) => {
    
        const responseMeals = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${titleCategory}`)
        const mealsJs = await responseMeals.json()


        setMealsByCategory(mealsJs.meals)
    }
    return(
    <>
                <h2>Categories</h2>

                <>
                    <p>Recettes pour la catégorie sélectionnée :</p>
                    {mealsByCategory.map((meal) => {
                    return (
                        <div key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMealThumb} />
                        </div>
                    );
                    })}
                </>
            {categories.map((category)=>{
                return (
            <div key={category.idCategory}>
                <h3>{category.strCategory}</h3>
                <img src={category.strCategoryThumb} alt={category.strCategory} />
                <p>{category.strCategoryDescription}</p>
                <button onClick={() => handleCategoryClick(category.strCategory)}>Afficher toutes les recettes</button>
            </div>
        );
      })}
    </>
    )
}
export default ListCategories;