const Header = ({userFromApi}) => {
    return (
      <header className="header-top">
        <img className="header-top-logo"
          src="https://dcassetcdn.com/design_img/3995631/1112756/28196124/fyghpyqwhf0gdfn9rh3ztq2yx1_thumbnail.png"
          alt="Docplanner Group"
        />
        <h1>Sugar & Sol</h1>
     <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Cocktail Menu</li>
      </ul>
    </header>
  );
};
  
  export default Header;