import PokeData from '../PokeData/PokeData';
import { useLocation } from 'react-router-dom';

const InfoCompletePokemon = () => {
    const { infoPokemon } = useLocation().state;

    const mainType = infoPokemon.normal_form.types
        .filter((uniqueType) => uniqueType.slot === 1)
        .map(({ type }) => type.name)
        .join('');

    return (
        <section className='pokeInfoComplete center'>
            <figure className={mainType}>
                <img
                    src={
                        infoPokemon.normal_form.sprites.other[
                            'official-artwork'
                        ].front_default
                    }
                    alt='sprite_pokemon'
                />
            </figure>
            <PokeData dataPokemon={infoPokemon} />
        </section>
    );
};

export default InfoCompletePokemon;
