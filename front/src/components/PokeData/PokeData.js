import { useState } from "react";
import AboutPokesection from "../AboutPokesection/AboutPokesection";
import BaseStatsPokesection from "../BaseStatsPokesection/BaseStatsPokesection";
import EvoPokesection from "../EvoPokesection/EvoPokesection";
import MovesPokesection from "../MovesPokesection/MovesPokesection";
import FormsPokesection from "../FormsPokesection/FormsPokesection";

const PokeData = ({ dataPokemon, dataSpecie }) => {
  const [contentActive, setContentActive] = useState({
    about: true,
    baseStats: false,
    evolution: false,
    moves: false,
    forms: false,
  });

  const pokesectionActive = {
    borderBottom: "5px solid #fd1b1c",
  };

  return (
    <>
      {dataPokemon && dataSpecie && (
        <div className="pokeData_Box">
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
            <AboutPokesection
              dataAboutPoke={dataPokemon}
              dataAboutSpecie={dataSpecie}
            />
          )}
          {contentActive.baseStats && (
            <BaseStatsPokesection dataStatsPoke={dataPokemon} />
          )}
          {contentActive.evolution && (
            <EvoPokesection dataEvoSpecie={dataSpecie} />
          )}
          {contentActive.moves && (
            <MovesPokesection dataMovePokemon={dataPokemon} />
          )}
          {contentActive.forms && (
            <FormsPokesection dataFormSpecie={dataSpecie} />
          )}
        </div>
      )}
    </>
  );
};

export default PokeData;
