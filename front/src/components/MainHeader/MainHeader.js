import logoNav from "../../assets/imgs/mainLogo.svg";
import MenuOptions from "../MenuOptions/MenuOptions";

const MainHeader = () => {
  return (
    <>
      <header className="mainHeader">
        <a href="/pokemons" className="mainLogo">
          <figure>
            <img src={logoNav} alt="logo-pokeAMF" />
          </figure>
        </a>
        <MenuOptions />
      </header>
    </>
  );
};

export default MainHeader;
