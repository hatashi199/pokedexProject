import PokeTypes from '../PokeTypes/PokeTypes';

const PokeSprite = ({ dataPokemon }) => {
    const mainType = dataPokemon?.normal_form.types
        .filter((uniqueType) => uniqueType.slot === 1)
        .map(({ type }) => type.name)
        .join('');

    return (
        <div className={mainType + ' boxSprite'}>
            <figure key={dataPokemon?.namePokemon}>
                <img
                    src={
                        dataPokemon?.normal_form.sprites.other[
                            'official-artwork'
                        ].front_default
                    }
                    alt='sprite_pokemon'
                />
            </figure>
            <div className='boxSprite_Info'>
                <h3>{dataPokemon?.namePokemon}</h3>
                <PokeTypes dataTypes={dataPokemon.normal_form.types} />
            </div>
        </div>
    );
};

export default PokeSprite;
