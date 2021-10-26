import PokeData from '../PokeData/PokeData';
import { useParams } from 'react-router-dom';
import PokeTypes from '../PokeTypes/PokeTypes';
import usePokeinfo from '../../hooks/usePokeinfo';

const InfoCompletePokemon = () => {
    const { pokeName } = useParams();

    const pokemon = usePokeinfo(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    const specie = usePokeinfo(
        `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
    );

    const mainType = pokemon?.pokemonInfo?.types
        .filter((uniqueType) => uniqueType.slot === 1)
        .map(({ type }) => type.name)
        .join('');

    return (
        <>
            <section className='pokeInfoComplete center'>
                {pokemon && (
                    <>
                        <section className='pokeInfo_Card'>
                            <figure className={mainType}>
                                <img
                                    src={
                                        pokemon.pokemonInfo?.sprites.other[
                                            'official-artwork'
                                        ].front_default
                                    }
                                    alt='sprite_pokemon'
                                />
                            </figure>
                            <footer>
                                <h3>{specie.pokemonInfo?.name}</h3>
                                <PokeTypes
                                    dataTypes={pokemon.pokemonInfo?.types}
                                />
                            </footer>
                        </section>
                        {pokemon && specie && (
                            <PokeData
                                dataPokemon={pokemon.pokemonInfo}
                                dataSpecie={specie.pokemonInfo}
                            />
                        )}
                    </>
                )}
            </section>
            {!pokemon && <h1>{pokemon.error}</h1>}
            {!specie && <h1>{specie.error}</h1>}
        </>
    );
};

export default InfoCompletePokemon;
