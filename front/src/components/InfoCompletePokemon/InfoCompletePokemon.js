import PokeData from "../PokeData/PokeData";
import { useParams } from "react-router-dom";
import PokeTypes from "../PokeTypes/PokeTypes";
import { useEffect, useState } from "react";
import { getAxios } from "../../helpers";

const InfoCompletePokemon = () => {
  const { pokeId } = useParams();

  const [pokemonData, setPokemonData] = useState("");
  const [specieData, setSpecieData] = useState("");

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const pokemon = await getAxios(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
        setPokemonData(pokemon);

        const specie = await getAxios(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`
        );
        setSpecieData(specie);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonData();
  }, [pokeId]);

  return (
    <>
      {pokemonData && (
        <section className="pokeInfoComplete center">
          <section className="pokeInfo_Card">
            <figure className={pokemonData?.types[0]?.type?.name}>
              <img
                src={
                  pokemonData?.sprites.other["official-artwork"].front_default
                }
                alt="sprite_pokemon"
              />
            </figure>
            <footer>
              <h3>{specieData.name}</h3>
              <PokeTypes dataTypes={pokemonData?.types} />
            </footer>
          </section>
          {pokemonData && (
            <PokeData dataPokemon={pokemonData} dataSpecie={specieData} />
          )}
        </section>
      )}
    </>
  );
};

export default InfoCompletePokemon;
