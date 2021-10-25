import usePokedexList from '../../hooks/usePokedexList';
import PokeSprite from '../PokeSprite/PokeSprite';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const { pokemonPokedex } = usePokedexList(1);

    console.log(pokemonPokedex);

    return (
        <section className='pokedexBox'>
            <h2>
                {pokemonPokedex && pokemonPokedex?.namePokedex + ' Pokedex'}
            </h2>
            <div className='pokemonList center'>
                {pokemonPokedex &&
                    pokemonPokedex?.pokemons?.map((pokemon) => {
                        return (
                            <Link
                                key={pokemon.entry_number}
                                to={{
                                    pathname: `/pokemons/${pokemon.pokemon_species.name}`,
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
