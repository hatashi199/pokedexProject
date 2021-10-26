import { usePokeinfo } from "../../hooks/usePokeinfo";
import PokeSprite from "../PokeSprite/PokeSprite";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const numPokedex = 1;

  const { pokemonInfo, error } = usePokeinfo(
    `https://pokeapi.co/api/v2/pokedex/${numPokedex}`
  );

  return (
    <>
      {pokemonInfo && (
        <section className="pokedexBox">
          <h2>{pokemonInfo && pokemonInfo?.name + " Pokedex"}</h2>
          <div className="pokemonList center">
            {pokemonInfo &&
              pokemonInfo?.pokemon_entries?.map((pokemon) => {
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
      )}
      {!pokemonInfo && <h1>{error}</h1>}
    </>
  );
};

export default PokemonList;
