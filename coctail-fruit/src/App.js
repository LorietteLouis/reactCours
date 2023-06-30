import Header from './Header';
import './App.css';
import BarLateral from './BarreLateral';
import Footer from './Footer';
import LatestCocktail from './LastCocktailList'
import CocktailDay from './CocktailDay';
import CocktailsList from './CocktailList';
import RhumCocktail from './RhumCocktail';



function App() {
  const userFromApi= {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };
  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    }, {
      id: 5,
      name: "Bloody Mary",
      price: 8,
      ingredients: ["Vodka", "Jus de tomate", "Sauce Worcestershire"],
      isPublished: true,
    }, {
      id: 6,
      name: "Ti punch",
      price: 8,
      ingredients: ["Rhum", "Citron vert", "Sirop de canne"],
      isPublished: true,
    }
  ]; 

  const publishedCocktails = cocktailsFromApi.filter(cocktailContent => cocktailContent.isPublished);

  return (


    <>

            <Header userFromApi = {userFromApi}/>
            <BarLateral userFromApi={userFromApi}/>
            <div className = "cocktailMenu">
              <CocktailDay publishedCocktails = {publishedCocktails}/>
              <LatestCocktail publishedCocktails = {publishedCocktails}/>
              <CocktailsList publishedCocktails={publishedCocktails}/>
            </div>  
            <RhumCocktail publishedCocktails={publishedCocktails}/>
            <Footer/>
    </>
  );
}

export default App;
