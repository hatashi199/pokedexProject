import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="slideRightMenu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemons">Pokédex</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
