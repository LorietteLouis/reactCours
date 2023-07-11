const CreateJob = () =>{

    const handleSubmit = (event) => {

    event.preventDefault();


    const title = event.target.title.value;
    const description = event.target.description.value;
    const address = event.target.address.value;


    console.log(title+` `+description+` `+address);

    };

    return(

    <form onSubmit={handleSubmit}>
    <label>Nom du Job :</label>
    <input type="text" name="title" />

    <label>Description :</label>
    <textarea name="description" cols="50" rows="5"></textarea>

    <label>Adresse :</label>
    <input type="text" name="address" />

    <button type="submit">Créer</button>
  </form>

    );



};

export default CreateJob;