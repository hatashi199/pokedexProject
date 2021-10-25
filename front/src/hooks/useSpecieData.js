import { useEffect, useState } from 'react';
import { getAxios } from '../helpers';

const useSpecieData = (specie) => {
    const [infoSpecie, setInfoSpecie] = useState();

    const getSpecie = async () => {
        try {
            const specieData = await getAxios(
                `https://pokeapi.co/api/v2/pokemon-species/${specie}`
            );
            setInfoSpecie(specieData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSpecie();
    }, []);

    return { infoSpecie };
};

export default useSpecieData;
