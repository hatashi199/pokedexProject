import PokeSprite from "../PokeSprite/PokeSprite";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import { GoSearch } from "react-icons/go";
import { Input, Select } from "@chakra-ui/react";
import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs";

const PokemonList = () => {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokemonFilter, setPokemonFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(40);
  const [search, setSearch] = useState("");
  const [typePokedex, setTypePokedex] = useState("");
  const [selectPokedex, setSelectPokedex] = useState("national");

  useEffect(() => {
    const getInfoPokedex = async () => {
      try {
        setLoading(true);
        const data = await getAxios(
          `https://pokeapi.co/api/v2/pokedex/${selectPokedex}`
        );
        setPokemonInfo(data);
        setPokemonFilter(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoPokedex();
  }, [selectPokedex]);

  useEffect(() => {
    const getTypePokedex = async () => {
      try {
        const { count } = await getAxios("https://pokeapi.co/api/v2/pokedex");
        const data = await getAxios(
          `https://pokeapi.co/api/v2/pokedex?offset=0&limit=${count}`
        );

        const namesPokedex = data.results.map((name) => name.name);
        setTypePokedex(namesPokedex);
      } catch (error) {
        console.log(error);
      }
    };

    getTypePokedex();
  }, []);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = pokemonInfo?.pokemon_entries?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (filter) => {
    const searchFilter =
      pokemonFilter &&
      pokemonFilter.pokemon_entries.filter((item) =>
        item.pokemon_species.name.toLowerCase().includes(filter.toLowerCase())
      );
    setPokemonInfo({
      ...pokemonInfo,
      pokemon_entries: searchFilter,
    });
  };

  const handleSortA_Z = () => {
    const sorted = pokemonInfo.pokemon_entries.sort((a, b) => {
      if (a.pokemon_species.name > b.pokemon_species.name) {
        return 1;
      }

      if (a.pokemon_species.name < b.pokemon_species.name) {
        return -1;
      }
      return 0;
    });

    setPokemonInfo({ ...pokemonInfo, pokemon_entries: sorted });
  };

  const handleSortZ_A = () => {
    const sorted = pokemonInfo.pokemon_entries.sort((a, b) => {
      if (a.pokemon_species.name > b.pokemon_species.name) {
        return -1;
      }

      if (a.pokemon_species.name < b.pokemon_species.name) {
        return 1;
      }
      return 0;
    });

    setPokemonInfo({ ...pokemonInfo, pokemon_entries: sorted });
  };

  const handlePokedexSelect = (e) => {
    const pokedexSelected =
      typePokedex && typePokedex.find((pokedex) => e.target.value === pokedex);
    setSelectPokedex(pokedexSelected);
  };

  return (
    <>
      {pokemonInfo && (
        <section className="pokedexBox posRel">
          <h2 className="mainTitle_PokedexName">
            {pokemonInfo?.name + " Pokedex"}
          </h2>
          <header className="filterNav center">
            <div className="posRel searchBox">
              <Input
                variant="filled"
                sx={{
                  borderBottom: `2px solid #c0392b`,
                  width: `100%`,
                }}
                value={search}
                placeholder="Search Pokemon"
                type="search"
                onChange={handleOnChange}
                focusBorderColor="#c0392b"
              />
              <div className="searchIcon">
                <GoSearch size="1.3rem" color="#FFF" />
              </div>
            </div>
            <div className="orderPokedex_Filter">
              <div className="orderIcons">
                <div onClick={handleSortA_Z}>
                  <BsSortAlphaDown size="1.5rem" color="#FFF" />
                </div>
                <div onClick={handleSortZ_A}>
                  <BsSortAlphaDownAlt size="1.5rem" color="#FFF" />
                </div>
              </div>
              <Select
                variant="filled"
                value={selectPokedex}
                onChange={handlePokedexSelect}
                focusBorderColor="#c0392b"
              >
                {typePokedex &&
                  typePokedex.map((pokedex) => {
                    const firstCapitalize =
                      pokedex.charAt(0).toUpperCase() + pokedex.slice(1);
                    const pokedexName = firstCapitalize.split("-").join(" ");
                    return (
                      <option key={pokedexName} value={pokedex}>
                        {pokedexName}
                      </option>
                    );
                  })}
              </Select>
            </div>
          </header>
          {!loading ? (
            <>
              {currentPokemons.length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "1.5rem",
                  }}
                >
                  There isn't any pokemon with that{" "}
                  <span className="noPokeFilter">{search}</span> name or similar
                </p>
              )}
              <div className="pokemonList center">
                {currentPokemons?.map((pokemon) => {
                  const idPokeArray = pokemon?.pokemon_species.url.split("/");
                  const idSprite = idPokeArray[idPokeArray.length - 2];
                  return (
                    <Link
                      key={pokemon.entry_number}
                      to={{
                        pathname: `/pokemons/${idSprite}`,
                      }}
                    >
                      <PokeSprite dataPokemon={pokemon} />
                    </Link>
                  );
                })}
              </div>
              {currentPokemons.length > 0 && (
                <Pagination
                  totalElements={pokemonInfo.pokemon_entries.length}
                  elementsPerPage={pokemonPerPage}
                  paginate={(pageNumber) => setCurrentPage(pageNumber)}
                  updateCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              )}
            </>
          ) : (
            <Loading />
          )}
        </section>
      )}
    </>
  );
};

export default PokemonList;
