import { useState } from "react";
const CreateOtherJob = () =>{
    const [nameJob, setNameJob] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {

      event.preventDefault();

      setNameJob(event.target.nameJob.value);
      setDescription(event.target.description.value);
      setAddress(event.target.address.value);


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

      <button type="submit">Créer</button>
      </form>
      <div>
        <ul>
          <li>Le metier rechercher : {nameJob}</li>
          <li>La description :{description}</li>
          <li>Votre adresse :{address}</li>
        </ul>
      </div>

      </>
    );



};

export default CreateOtherJob;