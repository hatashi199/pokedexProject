import logoNav from '../../assets/imgs/logo.png';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <>
            <header>
                <figure>
                    <img src={logoNav} alt='logo-pokeAMF' />
                </figure>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/'>Pokédex</Link>
                        </li>
                    </ul>
                </nav>
                <BiSearch size='2.5rem' color='#FFFFFF' />
            </header>
        </>
    );
};

export default MainHeader;
