import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import PokemonInfo from './pages/PokemonInfo';

const routes = [
    {
        path: '/pokemons',
        page: Pokemons,
        label: 'pokemons',
    },
    {
        path: '/pokemons/:pokeName',
        page: PokemonInfo,
        label: 'PokemonInfo',
    },
    {
        path: '/',
        page: Home,
        label: 'Home',
    },
];

export default routes;
