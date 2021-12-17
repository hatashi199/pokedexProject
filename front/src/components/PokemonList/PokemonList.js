import PokeSprite from "../PokeSprite/PokeSprite";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import { FormControl, InputBase, MenuItem, Select } from "@mui/material";
import { GoSearch } from "react-icons/go";

const PokemonList = () => {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokemonFilter, setPokemonFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(40);
  const [search, setSearch] = useState("");
  const [typePokedex, setTypePokedex] = useState("");
  const [selectPokedex, setSelectPokedex] = useState("national");
  const [orderSelect, setOrderSelect] = useState("");

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

  const orderSelectFilters = () => {
    if (orderSelect === "alfaASC") {
      pokemonInfo.pokemon_entries.sort((a, b) =>
        b.pokemon_species.name.localeCompare(a.pokemon_species.name)
      );
    }

    if (orderSelect === "alfaDESC") {
      pokemonInfo.pokemon_entries.sort((a, b) =>
        a.pokemon_species.name.localeCompare(b.pokemon_species.name)
      );
    }

    if (orderSelect === "numASC") {
      pokemonInfo.pokemon_entries.sort((a, b) =>
        a.entry_number > b.entry_number ? 1 : -1
      );
    }

    if (orderSelect === "numDESC") {
      pokemonInfo.pokemon_entries.sort((a, b) =>
        a.entry_number < b.entry_number ? 1 : -1
      );
    }
  };

  const handleOrderSelect = (e) => {
    setOrderSelect(e.target.value);
    orderSelectFilters();
  };

  const handlePokedexSelect = (e) => {
    const pokedexSelected =
      typePokedex && typePokedex.find((pokedex) => e.target.value === pokedex);
    setSelectPokedex(pokedexSelected);
  };

  return (
    <>
      {loading && <Loading />}
      {pokemonInfo && (
        <section className="pokedexBox posRel">
          <header className="mainTitle_Search center">
            <h2>{pokemonInfo?.name + " Pokedex"}</h2>
            <div className="posRel searchBox">
              <InputBase
                sx={{
                  borderBottom: `2px solid #c0392b`,
                  width: `100%`,
                }}
                value={search}
                placeholder="Search Pokemon"
                type="search"
                onChange={handleOnChange}
              />
              <GoSearch
                size="1.3rem"
                onClick={search.length > 0 ? handleOnChange : null}
                className="searchIcon"
              />
            </div>
            <div className="orderPokedex_Filter">
              <FormControl variant="standard">
                <Select value={orderSelect} onChange={handleOrderSelect}>
                  <MenuItem value="alfaASC">A - Z</MenuItem>
                  <MenuItem value="alfaDESC">Z - A</MenuItem>
                  <MenuItem value="numASC">Numérico Ascendente</MenuItem>
                  <MenuItem value="numDESC">Numérico Descendente</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <Select value={selectPokedex} onChange={handlePokedexSelect}>
                  {typePokedex &&
                    typePokedex.map((pokedex) => {
                      const firstCapitalize =
                        pokedex.charAt(0).toUpperCase() + pokedex.slice(1);
                      const pokedexName = firstCapitalize.split("-").join(" ");
                      return (
                        <MenuItem key={pokedexName} value={pokedex}>
                          {pokedexName}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </div>
          </header>
          {!loading && (
            <>
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
            </>
          )}
        </section>
      )}
    </>
  );
};

export default PokemonList;
