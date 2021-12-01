import PokeSprite from "../PokeSprite/PokeSprite";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

const PokemonList = () => {
  const numPokedex = 1;

  const [pokemonInfo, setPokemonInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(40);

  useEffect(() => {
    const getInfoPokedex = async () => {
      try {
        setLoading(true);
        const data = await getAxios(
          `https://pokeapi.co/api/v2/pokedex/${numPokedex}`
        );
        setPokemonInfo(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("An error has ocurred getting the data");
      }
    };
    getInfoPokedex();
  }, [numPokedex]);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = pokemonInfo?.pokemon_entries?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <>
      {loading && <Loading />}
      {pokemonInfo && (
        <section className="pokedexBox">
          <h2>{pokemonInfo?.name + " Pokedex"}</h2>
          <div className="pokemonList center">
            {currentPokemons?.map((pokemon) => {
              return (
                <Link
                  key={pokemon.entry_number}
                  to={{
                    pathname: `/pokemons/${pokemon.entry_number}`,
                  }}
                >
                  <PokeSprite dataPokemon={pokemon} />
                </Link>
              );
            })}
          </div>
          <Pagination
            totalElements={pokemonInfo.pokemon_entries.length}
            elementsPerPage={pokemonPerPage}
            paginate={(pageNumber) => setCurrentPage(pageNumber)}
            updateCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </section>
      )}
      {!pokemonInfo && <h1>{error}</h1>}
    </>
  );
};

export default PokemonList;
