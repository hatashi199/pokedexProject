import { Link } from 'react-router-dom';
import mainImg from '../../assets/imgs/mainImg.svg';
import ButtonLink from '../ButtonLink/ButtonLink';

const TitleSection = () => {
    return (
        <>
            <div className='mainTitle'>
                <figure>
                    <img src={mainImg} alt='mainImg' />
                </figure>
                <h1>Pokédex Personal</h1>
                <span>Realizado por Alejandro Mariño Fandiño</span>
                <ButtonLink white>
                    <Link to='/pokemons'>Ir a la Pokédex</Link>
                </ButtonLink>
            </div>
            <div className='bgArea'>
                <ul className='elements'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    );
};

export default TitleSection;
