const PokeSprite = ({ dataPokemon }) => {
    const pokedexNumber =
        dataPokemon.entry_number < 10
            ? `#00${dataPokemon.entry_number}`
            : dataPokemon.entry_number < 100
            ? `#0${dataPokemon.entry_number}`
            : `#${dataPokemon.entry_number}`;

    return (
        <div className='boxSprite'>
            <figure key={dataPokemon.sprite}>
                <img src={dataPokemon.sprite} alt='sprite_pokemon' />
            </figure>
            <div className='boxSprite_Info'>
                <span>{pokedexNumber}</span>
                <h3>{dataPokemon.pokemon_species.name}</h3>
            </div>
        </div>
    );
};

export default PokeSprite;
