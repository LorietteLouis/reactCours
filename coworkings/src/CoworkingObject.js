const CoworkingObject = ({object}) =>{
    return(
        <article className="myArticles" key={object.id}>
            <h3>{object.name}</h3>
            <p>Adresse: {object.address}, {object.city}</p>
            <img src={object.image} alt="coworking space" />
            <p className="rating">Note: {object.rating} sur 5</p>
        </article>
    )
}

export default CoworkingObject;