const Header = ({cartFromApi}) => {
    return (
      <header className="header-top">
        <img className="header-top-logo"
          src="https://www.it-com.fr/wp-content/uploads/2016/03/LOGO-shake-your-ecommerce-logo.png"
          alt="Shake You're e-commerce"
        />
        <h1>Shake You're eCommerce</h1>
    <nav className = "navEcommerce">
     <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Offre</li>
        <li>
          <img className="iconebasket" src="../card.png" alt="panier"/> {cartFromApi.quantity} 
          <i>{cartFromApi.items[0].quantity}</i>
        </li>
      </ul>
    </nav> 
    </header>
  );
};
  
  export default Header;