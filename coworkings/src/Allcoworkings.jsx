import {useState} from "react";
import CoworkingShow from "./CoworkingShow";

const AllCoworkings = ({coworkingsFromFakeApi}) =>{
    const [displayCoworkings, setDisplayCoworkings] = useState(false)

    const handleClick = () => {
        setDisplayCoworkings(!displayCoworkings)
      };

    return(
        <div className="AllPlaces">
        <div className= "btn">   
            <button onClick={handleClick}>Afficher les coworkings</button>
        </div>
        {displayCoworkings && (
            <div className="coworkeAll">
            {coworkingsFromFakeApi.map(coworking =>(
                <CoworkingShow coworking={coworking}/>

            ))}
            </div>
        )}
        </div>
        
    )
}

export default AllCoworkings;