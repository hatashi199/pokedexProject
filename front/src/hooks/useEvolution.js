import { useState, useEffect } from 'react';
import { getAxios } from '../helpers';

const useEvolution = (dataEvo) => {
    const [evo, setEvo] = useState([]);

    const pokeEvos = [];

    const getEvoChain = async () => {
        try {
            const { chain } = await getAxios(dataEvo);

            const spriteFirst = await getAxios(
                `https://pokeapi.co/api/v2/pokemon/${chain.species.name}`
            );

            if (chain.species) {
                const evo1 = {
                    name: chain.species.name,
                    sprite: spriteFirst.sprites.other['official-artwork']
                        .front_default,
                };
                pokeEvos.push(evo1);

                if (chain.evolves_to.length > 0) {
                    chain.evolves_to.map(async (evolveTwo) => {
                        const spriteSecond = await getAxios(
                            `https://pokeapi.co/api/v2/pokemon/${evolveTwo.species.name}`
                        );

                        const evo2 = {
                            name: evolveTwo.species.name,
                            sprite: spriteSecond.sprites.other[
                                'official-artwork'
                            ].front_default,
                        };
                        pokeEvos.push(evo2);

                        if (evolveTwo.evolves_to.length > 0) {
                            evolveTwo.evolves_to.map(async (evolveThree) => {
                                const spriteThird = await getAxios(`
                                https://pokeapi.co/api/v2/pokemon/${evolveThree.species.name}
                                `);

                                const evo3 = {
                                    name: evolveThree.species.name,
                                    sprite: spriteThird.sprites.other[
                                        'official-artwork'
                                    ].front_default,
                                };

                                pokeEvos.push(evo3);
                            });
                        }
                    });
                }
            }
            setEvo(pokeEvos);
            console.log(pokeEvos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getEvoChain();
    }, []);

    return { evo };
};

export default useEvolution;
