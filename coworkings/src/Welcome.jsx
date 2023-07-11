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
            <p onClick={handleClick}> Thank you very much !</p>
        </div>
        </>
    );
};

export default Welcome;