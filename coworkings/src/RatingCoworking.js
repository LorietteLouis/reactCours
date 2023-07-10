import CoworkingShow from "./CoworkingShow";

const RatingCoworking = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="RatingPlaces">
            <h2>Les coworking les plus avancés.</h2>
            <div className ="ratingCss">
            {coworkingsFromFakeApi.map(coworking => coworking.rating >=4 &&(
                <CoworkingShow coworking={coworking}/>
            
            ))}
            </div>
        </div>
    )
}

export default RatingCoworking;

