const Profile = () => {
    const userInfosFromFakeApi = {
        firstName: "John",
        lastName: "Doe",
        age: 42,
        email: "contact@johndoe.fr",
        phone: "0123456789",
        adress: "1 rue de la Paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        job: "Développeur web"
        };


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