import logoNav from '../../assets/imgs/mainLogo.svg';
import MenuOptions from '../MenuOptions/MenuOptions';

const MainHeader = () => {
    return (
        <>
            <header className='posRel'>
                <figure>
                    <img src={logoNav} alt='logo-pokeAMF' />
                </figure>
                <MenuOptions />
            </header>
        </>
    );
};

export default MainHeader;
