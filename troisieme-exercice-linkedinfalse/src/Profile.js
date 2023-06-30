const Profile = ({userInfosFromFakeApi}) => {
return (
  
    <div>
                <p>{userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</p>
                <p>Age :{userInfosFromFakeApi.age} ans</p>
                <p>email : {userInfosFromFakeApi.email}</p>
                <p>téléphone : {userInfosFromFakeApi.phone}</p>
                <p>Adresse : {userInfosFromFakeApi.adress}, {userInfosFromFakeApi.zipCode} {userInfosFromFakeApi.city}, {userInfosFromFakeApi.country}</p>
                <p>métier actuel : {userInfosFromFakeApi.job}</p>
    </div>
  );
};

export default Profile;