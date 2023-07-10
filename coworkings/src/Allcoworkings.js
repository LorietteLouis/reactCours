
import CoworkingShow from "./CoworkingShow";

const AllCoworkings = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="AllPlaces">
            {coworkingsFromFakeApi.map(coworking =>(
                <CoworkingShow coworking={coworking}/>
            ))}
        </div>
    )
}

export default AllCoworkings;