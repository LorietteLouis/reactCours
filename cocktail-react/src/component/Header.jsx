import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const search = event.target.search.value;

    navigate(`/search-results?search=${search}`);
  };
    return (
      <header className="header-top">
        <img className="header-top-logo"
          src="https://dcassetcdn.com/design_img/3995631/1112756/28196124/fyghpyqwhf0gdfn9rh3ztq2yx1_thumbnail.png"
          alt="Docplanner Group"
        />
        <h1>Sugar & Sol</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cocktails">Liste des cocktails</Link>
          </li>
          <li>
            <Link to="/cocktails/random">Cocktail aléatoire</Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search ..." />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
};

export default Header;