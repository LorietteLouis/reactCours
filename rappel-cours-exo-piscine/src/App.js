
import './App.css';
import Header from './Header';
import Footer from './Footer';
// import Main from './Main';
// import MealsList from './MealList';
// import RandomMeal from './RandomMeal';
// import SearchMeal from './SearchMeal';
import ListCategories from './ListCategories';

function App() {
  return (
    <>
     <Header/>
     {/* <MealsList/>
     <RandomMeal/> */}
     <ListCategories/>
     {/* <SearchMeal/> */}
      {/* <Main/> */}
     <Footer/>
    </>
  );
}

export default App;
