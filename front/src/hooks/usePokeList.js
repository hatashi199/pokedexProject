import { useEffect, useState } from 'react';
import { getAxios } from '../helpers';

const usePokeList = (num) => {
    const [pokeList, setPokeList] = useState([]);

    const getAllPokemons = async () => {
        try {
            const { descriptions, pokemon_entries } = await getAxios(
                `https://pokeapi.co/api/v2/pokedex/${num}`
            );

            // Pokedex Name

            const [namePokedex] = descriptions.filter(
                ({ language }) => language.name === 'en'
            );

            const { description } = namePokedex;

            const pokemonsOfPokedex = await Promise.all(
                pokemon_entries.map(
                    async ({ entry_number, pokemon_species }) => {
                        const {
                            varieties,
                            genera,
                            generation,
                            flavor_text_entries,
                            is_baby,
                            is_legendary,
                            is_mythical,
                            evolution_chain,
                        } = await getAxios(pokemon_species.url);

                        // Normal Form

                        const [normal_form] = varieties.filter(
                            ({ is_default }) => is_default
                        );

                        // Alola Form

                        const alola_form = varieties.filter(({ pokemon }) =>
                            pokemon.name.includes('alola')
                        );

                        // Mega Evolution

                        const mega_evolution = varieties.filter(({ pokemon }) =>
                            pokemon.name.includes('mega')
                        );

                        // GMax Form

                        const gMax_form = varieties.filter(({ pokemon }) =>
                            pokemon.name.includes('gmax')
                        );

                        // Galar Form

                        const galar_form = varieties.filter(({ pokemon }) =>
                            pokemon.name.includes('galar')
                        );

                        // Genus

                        const genus = genera.filter(
                            ({ language }) => language.name === 'en'
                        );

                        // Generation and Region

                        const genInfo = await getAxios(generation.url);
                        const gen = {
                            generation: genInfo.name,
                            region: genInfo.main_region.name,
                        };

                        // Description Text PokedexBox

                        const descPokedex = flavor_text_entries
                            .filter(({ language, version }) => {
                                if (generation.name === 'generation-i') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'lets-go-pikachu'
                                    );
                                }

                                if (generation.name === 'generation-ii') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'soulsilver'
                                    );
                                }

                                if (generation.name === 'generation-iii') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'omega-ruby'
                                    );
                                }

                                if (generation.name === 'generation-iv') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'platinum'
                                    );
                                }

                                if (generation.name === 'generation-v') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'black-2'
                                    );
                                }

                                if (generation.name === 'generation-vi') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'x'
                                    );
                                }

                                if (generation.name === 'generation-vii') {
                                    return (
                                        (language.name === 'en' &&
                                            version.name === 'ultra-sun') ||
                                        (language.name === 'en' &&
                                            version.name === 'lets-go-pikachu')
                                    );
                                }

                                if (generation.name === 'generation-viii') {
                                    return (
                                        language.name === 'en' &&
                                        version.name === 'sword'
                                    );
                                }
                            })
                            .slice(0, 1);

                        return {
                            entry_number,
                            namePokemon: pokemon_species.name,
                            genus,
                            descriptionPokedex: descPokedex,
                            evoChain: evolution_chain.url,
                            is_baby,
                            is_legendary,
                            is_mythical,
                            is_normal:
                                !is_baby && !is_legendary && !is_mythical
                                    ? true
                                    : false,
                            gen: gen.generation,
                            region: gen.region,
                            normal_form,
                            alola_form:
                                alola_form.length === 0 ? 'None' : alola_form,
                            mega_evolution:
                                mega_evolution.length === 0
                                    ? 'None'
                                    : mega_evolution,
                            gMax_form:
                                gMax_form.length === 0 ? 'None' : gMax_form,
                            galar_form:
                                galar_form.length === 0 ? 'None' : galar_form,
                        };
                    }
                )
            );

            const dataPokemon = await Promise.all(
                pokemonsOfPokedex?.map(async (pokeData) => {
                    const infoPokemon = await getAxios(
                        pokeData.normal_form.pokemon.url
                    );
                    return {
                        ...pokeData,
                        normal_form: infoPokemon,
                    };
                })
            );

            setPokeList({
                pokedexName: description,
                dataPokemon,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    return { pokeList };
};

export default usePokeList;
