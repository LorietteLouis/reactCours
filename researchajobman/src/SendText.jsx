import { useState } from "react"
const SendText = () => {
    const [textData,setTextData] = useState({
        date: "",
        text: "",
        firstName:"",
        lastName:"",
        email:"",
    });
    const handleSubmitContact = (event) => {
        event.preventDefault();
    
        setTextData({
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          text: event.target.text.value,
          date: event.target.date.value,
        });
    };
    return(
        <>
            <h3>Créez votre histoire sur SF-Universe !</h3>
            <form onSubmit={handleSubmitContact}>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" name="firstName" />

                <label htmlFor="lastName">Nom</label>
                <input type="text" id="lastName" name="lastName" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="date">Une date factice </label>
                <input type="date" id="date" name="date"/>

                <label htmlFor="text">Votre histoire </label>
                <textarea id="text" cols="50" rows="10"></textarea>
                <button type="submit">Envoyer</button>
            </form>
            <p>
                Merci {textData.firstName} {textData.lastName} la galxie te le revaudra.
            </p>
        </>
    )
    }

export default SendText