



const CoworkingShow = ({coworking}) =>{


    return(
        <article className="myArticles" key={coworking.id}>
            <h3>{coworking.name}</h3>
            <p>Adresse: {coworking.address}, {coworking.city}</p>
            <img src={coworking.image} alt="coworking space" />
            <p className="rating">Note: {coworking.rating} sur 5</p>


        </article>
    )
}

export default CoworkingShow;