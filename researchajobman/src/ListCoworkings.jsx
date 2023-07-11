import { useState } from "react";
const ListCoworkings = () => {
    
    const coworkings = [
        {
          id: 1,
          name: "Coworking 1",
          address: "Bordeaux",
          phone: "06.15.75.48.12",
          img: "https://picsum.photos/200/300",
        },
        {
          id: 2,
          name: "Coworking 2",
          address: "Merignac",
          phone: "06.37.25.09.11",
          img: "https://picsum.photos/200/300",
        },
        {
          id: 3,
          name: "Coworking 3",
          address: "Bordeaux",
          phone: "06.15.51.33.64",
          img: "https://picsum.photos/200/300",
        },
        {
          id: 4,
          name: "Coworking 4",
          address: "Eysines",
          phone: "06.35.23.32.34",
          img: "https://picsum.photos/200/300",
        },
        {
          id: 5,
          name: "Coworking 5",
          address: "Lormont",
          phone: "06.36.19.17.58",
          img: "https://picsum.photos/200/300",
        },
      ];

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

      const filteredCoworkings = coworkings.filter((coworking) => {
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

            {filteredCoworkings.map((coworking) => {
                return (
                <div className="listCoworkings">
                <article key={coworking.id}>
                    <h3>{coworking.name}</h3>
                    <p>L'adresse : {coworking.address}</p>
                    <p>Numéro telephone : {coworking.phone}</p>
                    <img src={coworking.img} alt={coworking.name} />
                </article>
                </div>
                );
            })}
    </section>
  );
};

export default ListCoworkings;