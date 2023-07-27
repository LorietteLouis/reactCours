import{useEffect, useState} from "react"
const ListCategories = () => {
    const [categories, setCategories] = useState([]);
    const fetchCategories = async ()=>{
        const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const categoriesJs = await categoriesResponse.json();

        setCategories(categoriesJs.categories);
    };
    useEffect(()=>{
        fetchCategories()
    },[])
    //useEffect fait indiquera à react les données "dans notre cas une api de catégorie de Plât" qu'il doit faire appel dans un utilisateur vide "[]"
    //A chaque Màj "ou raffrechissement" useEffect donnera les nouvelles données.
    return(
        <div>
            <h2>categories</h2>
            {categories.map((category)=>{
            return (
          <div key={category.idCategory}>
            <h3>{category.strCategory}</h3>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
          </div>
        );
      })}
        </div>
    )
}
export default ListCategories;