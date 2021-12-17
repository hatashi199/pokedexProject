const PokeSprite = ({ dataPokemon }) => {
  const pokedexNumber =
    dataPokemon.entry_number < 10
      ? `#00${dataPokemon.entry_number}`
      : dataPokemon.entry_number < 100
      ? `#0${dataPokemon.entry_number}`
      : `#${dataPokemon.entry_number}`;

  const idSpriteArray = dataPokemon?.pokemon_species.url.split("/");
  const idSprite = idSpriteArray[idSpriteArray.length - 2];

  return (
    <div className="boxSprite posRel">
      <figure key={dataPokemon.sprite}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idSprite}.png`}
          alt="sprite_pokemon"
        />
      </figure>
      <div className="boxSprite_Info">
        <span className="idPokedex">{pokedexNumber}</span>
        <h3>{dataPokemon.pokemon_species.name}</h3>
      </div>
    </div>
  );
};

export default PokeSprite;
