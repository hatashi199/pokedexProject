import PokeData from '../PokeData/PokeData';
import { useParams } from 'react-router-dom';
import usePokemonData from '../../hooks/usePokemonData';
import useSpecieData from '../../hooks/useSpecieData';
import PokeTypes from '../PokeTypes/PokeTypes';

const InfoCompletePokemon = () => {
    const { pokeName } = useParams();

    const { infoPokemon } = usePokemonData(pokeName);
    const { infoSpecie } = useSpecieData(pokeName);

    const mainType = infoPokemon?.types
        .filter((uniqueType) => uniqueType.slot === 1)
        .map(({ type }) => type.name)
        .join('');

    return (
        <section className='pokeInfoComplete center'>
            {infoPokemon && (
                <>
                    <section className='pokeInfo_Card'>
                        <figure className={mainType}>
                            <img
                                src={
                                    infoPokemon?.sprites.other[
                                        'official-artwork'
                                    ].front_default
                                }
                                alt='sprite_pokemon'
                            />
                        </figure>
                        <footer>
                            <h3>{infoSpecie?.name}</h3>
                            <PokeTypes dataTypes={infoPokemon?.types} />
                        </footer>
                    </section>
                    <PokeData
                        dataPokemon={infoPokemon}
                        dataSpecie={infoSpecie}
                    />
                </>
            )}
        </section>
    );
};

export default InfoCompletePokemon;
