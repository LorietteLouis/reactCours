import { useState } from "react";
import ShowCoworking from "./ShowCoworking"
const ListCoworkingsOptimized = () => {

  const [coworkings, setCoworkings] = useState([]);
    
  const fetchCoworkings = async () => {
    if (coworkings.length === 0) {
      const coworkingsResponse = await fetch("/coworkings.json");
      const coworkingsData = await coworkingsResponse.json();



      setCoworkings(coworkingsData);
    }
  };
  fetchCoworkings();

      
      const [filter, setFilter] = useState("Bordeaux");
      
      const handleFilterClickCity = (value) => {
        setFilter(value)
        
        
      }
      
      const filteredCoworkings = coworkings.filter((coworking) => {
        if (filter === null) {
          return true;
        }
    
        return coworking.address === filter;
      });
    return (
        <section>
            <h2>Liste des coworkings</h2>

    
            <button onClick={() =>handleFilterClickCity("Bordeaux")}>Bordeaux</button>
            <button onClick={() =>handleFilterClickCity("Mérignac")}>Mérignac</button>
            <button onClick={() =>handleFilterClickCity("Lormont")}>Lormont</button>
            <button onClick={() =>handleFilterClickCity("Eysines")}>Eysines</button>
            <button onClick={() =>handleFilterClickCity("Bègle")}>Bègle</button>
            <button onClick={() =>handleFilterClickCity("Talence")}>Talence</button>
            <button onClick={() =>handleFilterClickCity("Villenave")}>Villenave</button>

            {filteredCoworkings.map((coworking) => (
                   <ShowCoworking coworking={coworking}/>
            ))}
    </section>
  );
};

export default ListCoworkingsOptimized;