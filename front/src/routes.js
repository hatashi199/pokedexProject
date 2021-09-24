import Home from './pages/Home';
import Pokemons from './pages/Pokemons';

const routes = [
    {
        path: '/pokemons',
        page: Pokemons,
        label: 'Home',
    },
    {
        path: '/',
        page: Home,
        label: 'Home',
    },
];

export default routes;
