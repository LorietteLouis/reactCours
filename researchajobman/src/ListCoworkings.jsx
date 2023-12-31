import { useState } from "react";
import ShowCoworking from "./ShowCoworking";
const ListCoworkings = () => {

  const [coworkings, setCoworkings] = useState([]);
    
  const fetchCoworkings = async () => {
    if (coworkings.length === 0) {
      setTimeout (async () => {
      const coworkingsResponse = await fetch("/coworkings.json");
      const coworkingsData = await coworkingsResponse.json();



      setCoworkings(coworkingsData);
    },1500)
    };
  };
  fetchCoworkings();

    

      const [filter, setFilter] = useState("Bordeaux");

      const handleFilterClickBordeaux = () => {
        setFilter("Bordeaux");
      };

      const handleFilterClickMerignac = () => {
        setFilter("Mérignac");
      };
      const handleFilterClickLormont = () => {
        setFilter("Lormont");
      };
      const handleFilterClickEysines = () => {
        setFilter("Eysines");
      };
      const handleFilterClickBegle = () => {
        setFilter ("Bègle");
      };
      const handleFilterClickTalence = () => {
        setFilter ("Talence");
      };
      const handleFilterClickVillenave = () => {
        setFilter ("Villenave");
      };

      let filteredCoworkings = coworkings.filter(coworking => {
        if (filter === null) {
          return true;
        }
    
        return coworking.address === filter;
      });
    return (
        <section>
            <h2>Liste des coworkings</h2>

    
            <button onClick={handleFilterClickBordeaux}>Bordeaux</button>
            <button onClick={handleFilterClickMerignac}>Mérignac</button>
            <button onClick={handleFilterClickLormont}>Lormont</button>
            <button onClick={handleFilterClickEysines}>Eysines</button>
            <button onClick={handleFilterClickBegle}>Bègle</button>
            <button onClick={handleFilterClickTalence}>Talence</button>
            <button onClick={handleFilterClickVillenave}>Villenave</button>

            {filteredCoworkings.length === 0 ? (
              <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            ) : (
              <>
                {filteredCoworkings.map((coworking) => {
                    return  <ShowCoworking coworking={coworking}/>
                })}
              </>
            )}
    </section>
  );
};

export default ListCoworkings;