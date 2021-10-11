import { Link } from 'react-router-dom';
import mainImg from '../../assets/imgs/mainLogo.svg';
import ButtonLink from '../ButtonLink/ButtonLink';
import { RiArrowRightSLine } from 'react-icons/ri';

const TitleSection = () => {
    return (
        <>
            <div className='mainTitle'>
                <figure>
                    <img src={mainImg} alt='mainImg' />
                </figure>
                <h1>Personal Pokédex</h1>
                <span>Made by Alejandro Mariño Fandiño</span>
                <ButtonLink white marTop>
                    <Link to='/pokemons'>
                        Pokédex
                        <RiArrowRightSLine size='2.5rem' />
                    </Link>
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
