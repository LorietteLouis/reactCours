import { useState } from "react";
const CreateJob = () =>{
    const[sendCreate, setSendCreate] = useState({
      nameJob: "En attente",
      description:"En attente",
      address:"En attente",
})
    const handleSubmit = (event) => {

      event.preventDefault();

    setSendCreate({
      nameJob : event.target.nameJob.value,
      description : event.target.description.value,
      address : event.target.address.value,
    })


      // console.log(nameJob+` `+description+` `+address);

    };

    return(
      <>
        <form onSubmit={handleSubmit}>
        <label>Nom du Job :</label>
        <input type="text" name="nameJob" />

        <label>Description :</label>
        <textarea name="description" cols="50" rows="5"></textarea>

        <label>Adresse :</label>
        <input type="text" name="address" />

        <button type="submit">Submit</button>
        </form>
        <div>
          <h2>Les informations envoyé</h2>
          <ul>
            <li>Le metier rechercher : {sendCreate.nameJob}</li>
            <li>La description :{sendCreate.description}</li>
            <li>Votre adresse :{sendCreate.address}</li>
          </ul>
        </div>

      </>
    );



};

export default CreateJob;