const Header = ({userInfosFromFakeApi}) => {
    return (
      <header className="header-top">
        <img className="header-top-logo"
          src="https://soyhuce.fr/content/uploads/2020/06/data-large.jpg"
          alt="Docplanner Group"
        />
     <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>
          Connecté en tant que {userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}
        </li>
      </ul>
    </header>
  );
};
  
  export default Header;