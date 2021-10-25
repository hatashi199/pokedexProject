import { useEffect, useState } from 'react';
import { getAxios } from '../helpers';

const usePokedexList = (num) => {
    const [pokemonPokedex, setPokemonPokedex] = useState();

    const getPokemon_Pokedex = async () => {
        try {
            const { name, pokemon_entries } = await getAxios(
                `https://pokeapi.co/api/v2/pokedex/${num}`
            );

            const pokemonEntries = pokemon_entries.map((pokeInfo) => {
                return {
                    ...pokeInfo,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo.entry_number}.png`,
                };
            });

            setPokemonPokedex({
                namePokedex: name,
                pokemons: pokemonEntries,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPokemon_Pokedex();
    }, []);

    return { pokemonPokedex };
};

export default usePokedexList;
