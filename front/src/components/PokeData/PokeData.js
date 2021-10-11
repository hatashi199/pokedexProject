import { useState } from 'react';
import AboutPokesection from '../AboutPokesection/AboutPokesection';
import BaseStatsPokesection from '../BaseStatsPokesection/BaseStatsPokesection';
import PokeTypes from '../PokeTypes/PokeTypes';

const PokeData = ({ dataPokemon }) => {
    const [contentActive, setContentActive] = useState({
        about: true,
        baseStats: false,
        evolution: false,
        moves: false,
        forms: false,
    });

    const pokesectionActive = {
        borderBottom: '5px solid #fd1b1c',
    };

    return (
        <div className='pokeData_Box'>
            <header>
                <h3>{dataPokemon.namePokemon}</h3>
                <PokeTypes dataTypes={dataPokemon.normal_form.types} />
            </header>
            <ul>
                <li
                    style={contentActive.about ? pokesectionActive : null}
                    onClick={() =>
                        setContentActive({
                            about: true,
                            baseStats: false,
                            evolution: false,
                            moves: false,
                            forms: false,
                        })
                    }
                >
                    About
                </li>
                <li
                    style={contentActive.baseStats ? pokesectionActive : null}
                    onClick={() =>
                        setContentActive({
                            about: false,
                            baseStats: true,
                            evolution: false,
                            moves: false,
                            forms: false,
                        })
                    }
                >
                    Base Stats
                </li>
                <li
                    style={contentActive.evolution ? pokesectionActive : null}
                    onClick={() =>
                        setContentActive({
                            about: false,
                            baseStats: false,
                            evolution: true,
                            moves: false,
                            forms: false,
                        })
                    }
                >
                    Evolution
                </li>
                <li
                    style={contentActive.moves ? pokesectionActive : null}
                    onClick={() =>
                        setContentActive({
                            about: false,
                            baseStats: false,
                            evolution: false,
                            moves: true,
                            forms: false,
                        })
                    }
                >
                    Moves
                </li>
                <li
                    style={contentActive.forms ? pokesectionActive : null}
                    onClick={() =>
                        setContentActive({
                            about: false,
                            baseStats: false,
                            evolution: false,
                            moves: false,
                            forms: true,
                        })
                    }
                >
                    Forms
                </li>
            </ul>
            {contentActive.about && (
                <AboutPokesection dataAbout={dataPokemon} />
            )}
            {contentActive.baseStats && (
                <BaseStatsPokesection dataStats={dataPokemon} />
            )}
        </div>
    );
};

export default PokeData;
