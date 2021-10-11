import { useEffect, useState } from 'react';
import MainNav from '../MainNav/MainNav';

const MenuOptions = () => {
    const [showMenu, setShowMnenu] = useState(false);

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (
                !e.target.matches(
                    '.hamburger, .hamburger-box, .hamburger-inner'
                )
            ) {
                setShowMnenu(false);
            }
        });
    }, []);

    return (
        <>
            <button
                className={
                    showMenu
                        ? 'hamburger hamburger--3dx is-active'
                        : 'hamburger hamburger--3dx'
                }
                type='button'
                onClick={() => setShowMnenu(!showMenu)}
            >
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>
            {showMenu && <MainNav />}
        </>
    );
};

export default MenuOptions;
