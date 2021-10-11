import usePokeList from '../../hooks/usePokeList';
import PokeSprite from '../PokeSprite/PokeSprite';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const { pokeList } = usePokeList(1);

    return (
        <section className='pokedexBox'>
            <h2>{pokeList.pokedexName}</h2>
            <div className='pokemonList center'>
                {pokeList &&
                    pokeList?.dataPokemon?.map((pokemon) => {
                        return (
                            <Link
                                key={pokemon?.entry_number}
                                to={{
                                    pathname: `/pokemons/${pokemon.namePokemon}`,
                                    state: {
                                        infoPokemon: pokemon,
                                    },
                                }}
                            >
                                <PokeSprite dataPokemon={pokemon} />
                            </Link>
                        );
                    })}
            </div>
        </section>
    );
};

export default PokemonList;
