import CoworkingObject from "./CoworkingObject";

const AllCoworkings = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="AllPlaces">
            {coworkingsFromFakeApi.map(object =>(
                <CoworkingObject object={object}/>
            ))}
        </div>
    )
}

export default AllCoworkings;