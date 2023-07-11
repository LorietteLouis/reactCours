import { useState } from "react";
const Welcome = () => {

    const[displayWelcome, setDisplayWelcome] = useState(true)

    const handleClick = () => {
        setDisplayWelcome (!displayWelcome)
    };

    return (
        <>
        {displayWelcome && (
        <div className="welcome">
            <h1>WELCOME STRANGER !</h1>
        </div>
        )}
        <div className= "btn">   
            <button onClick={handleClick}>Thank you very much!</button>
        </div>
        </>
    );
};

export default Welcome;