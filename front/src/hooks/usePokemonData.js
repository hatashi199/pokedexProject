import { useEffect, useState } from 'react';
import { getAxios } from '../helpers';

const usePokemonData = (pokemon) => {
    const [infoPokemon, setInfoPokemon] = useState();

    const getPokemon = async () => {
        try {
            const pokemonData = await getAxios(
                `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            );
            setInfoPokemon(pokemonData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return { infoPokemon };
};

export default usePokemonData;
