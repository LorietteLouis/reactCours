import { useEffect, useState } from "react";

const ListCoctail = () => {
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
    <div className="listCoctail">
      <h1>Coctails List</h1>
      <div>
        {coctails.map((coctail) => (
          <div key={coctail.idDrink}>
            <h2>{coctail.strDrink}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCoctail;
