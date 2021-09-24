import { useEffect, useState } from 'react';

const useGen1 = (gen) => {
    const [pokeGen, setPokeGen] = useState([]);

    const getPokemons = async () => {
        const { pokemon_species } = await (
            await fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
        ).json();

        const pokeListFiltered = await Promise.all(
            pokemon_species.map(async ({ url }) => {
                const { varieties } = await (await fetch(url)).json();
                const varietiesIsDefault = varieties.filter(
                    ({ is_default }) => is_default === true
                );
                return varietiesIsDefault;
            })
        );

        const infoPokemonGen = await Promise.all(
            pokeListFiltered.map(async (pokemonData) => {
                const infoPokemon = await (
                    await fetch(pokemonData[0].pokemon.url)
                ).json();
                return infoPokemon;
            })
        );

        const infoPokemonGen_Ordered = infoPokemonGen.sort((a, b) => {
            return a.id - b.id;
        });

        setPokeGen(infoPokemonGen_Ordered);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return { pokeGen };
};

export default useGen1;
