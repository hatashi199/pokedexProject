import { useEffect, useState } from 'react';
import { getAxios } from '../helpers';

const usePokeinfo = (url) => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await getAxios(url);
                setPokemonInfo(data);
            } catch (error) {
                console.log(error);
                setError('An error has ocurred getting the data');
            }
        };
        getInfo();
    }, [url]);

    return { pokemonInfo, setPokemonInfo, error };
};

export default usePokeinfo;
