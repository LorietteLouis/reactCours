import CoworkingObject from "./CoworkingObject";

const RatingCoworking = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="AllPlaces">
            <h2>Les coworking les plus avancés.</h2>
            {coworkingsFromFakeApi.map(object => object.rating >=4 &&(
                <CoworkingObject object={object}/>
            ))}
        </div>
    )
}

export default RatingCoworking;

