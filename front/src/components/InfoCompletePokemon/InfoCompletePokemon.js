import PokeData from "../PokeData/PokeData";
import { useParams, useHistory } from "react-router-dom";
import PokeTypes from "../PokeTypes/PokeTypes";
import { useEffect, useState } from "react";
import { getAxios } from "../../helpers";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../Loading/Loading";

const InfoCompletePokemon = () => {
  const { pokeId } = useParams();

  const [pokemonData, setPokemonData] = useState("");
  const [specieData, setSpecieData] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        setLoading(true);
        const pokemon = await getAxios(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
        setPokemonData(pokemon);

        const specie = await getAxios(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`
        );
        setSpecieData(specie);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonData();
  }, [pokeId]);

  return (
    <>
      {!loading && pokemonData && specieData ? (
        <section className="pokeInfoComplete center">
          <section className="pokeInfo_Section1">
            <div className="pokeInfo_Card">
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
            </div>
            <div className="goBack_Icon" onClick={history.goBack}>
              <AiOutlineArrowLeft size="1.8rem" color="#FFF" />
            </div>
          </section>
          {pokemonData && (
            <PokeData dataPokemon={pokemonData} dataSpecie={specieData} />
          )}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default InfoCompletePokemon;
