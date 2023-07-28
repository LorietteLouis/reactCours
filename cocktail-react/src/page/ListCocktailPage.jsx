import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const ListCocktailPage = () => {
  const [coctails, setCoctails] = useState([]);

  const fetchCoctails = async () => {
    const responseApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const responseJson = await responseApi.json();

    setCoctails(responseJson.drinks);
  };

  useEffect(()=>{
    fetchCoctails();
  },[]);

  return (
    <>
    <Header/>
    <div className="listCoctail">
      <h1>Coctails List</h1>
      <div>
        {coctails.map((coctail) => (
          <div key={coctail.idDrink}>
            <h2>{coctail.strDrink}</h2>
            <img src={coctail.strDrinkThumb} alt={coctail.strDrink} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ListCocktailPage;
