import { Link } from 'react-router-dom';
import LogInInfo from '../LogInInfo/LogInInfo';

const MainNav = () => {
    return (
        <nav className='slideRightMenu'>
            <LogInInfo />
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pokemons'>Pokédex</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainNav;
