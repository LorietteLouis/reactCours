const ShowCoworking = ({coworking}) => {
    const handleDelete = (id) => {
        console.log("coworking supprimé", id);
    }
    return (
    <div className="listCoworkings">
    <article key={coworking.id}>
        <h3>{coworking.name}</h3>
        <p>L'adresse : {coworking.address}</p>
        <p>Numéro telephone : {coworking.phone}</p>
        <img src={coworking.img} alt={coworking.name} />
        <button onClick={() => handleDelete(coworking.id)}>Delete This</button>
    </article>
    </div>
    );
}

export default ShowCoworking;

