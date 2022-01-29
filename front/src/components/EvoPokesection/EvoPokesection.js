import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const EvoPokesection = ({ dataEvoSpecie }) => {
  const [pokeEvos, setPokeEvos] = useState("");

  const idPokeEvolution = (stringId) => {
    const idPoke = stringId.split("/");
    return idPoke[idPoke.length - 2];
  };

  useEffect(() => {
    const getEvos = async () => {
      try {
        const { chain } = await getAxios(dataEvoSpecie.evolution_chain.url);
        const allEvos = [];

        const evo1 = {
          name: chain.species.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokeEvolution(
            chain.species.url
          )}.png`,
          id: Number(idPokeEvolution(chain.species.url)),
        };

        const evo2 =
          chain.evolves_to.length === 0
            ? ""
            : chain.evolves_to.map(({ species }) => {
                return {
                  name: species.name,
                  sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokeEvolution(
                    species.url
                  )}.png`,
                  id: Number(idPokeEvolution(species.url)),
                };
              });

        const [evo3] = chain.evolves_to.map((pokeEvo2) => {
          return (
            pokeEvo2.evolves_to.length !== 0 &&
            pokeEvo2.evolves_to.map(({ species }) => {
              return {
                name: species.name,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokeEvolution(
                  species.url
                )}.png`,
                id: Number(idPokeEvolution(species.url)),
              };
            })
          );
        });

        allEvos.push(evo1);
        evo2 && allEvos.push(evo2);
        evo3 && allEvos.push(evo3);

        setPokeEvos(allEvos);
      } catch (error) {
        console.log(error);
      }
    };
    getEvos();
  }, [dataEvoSpecie.evolution_chain.url]);

  console.log(pokeEvos);

  return (
    <section className="pokeEvos_Box">
      {pokeEvos && (
        <>
          <div className="pokeEvos_Section">
            <Link
              to={{ pathname: `/pokemons/${pokeEvos[0].id}` }}
              className="arrowSprite_Evo"
            >
              <figure>
                <img src={pokeEvos[0].sprite} alt="first_evo" />
                <figcaption>{pokeEvos[0].name}</figcaption>
              </figure>
            </Link>
          </div>

          {pokeEvos.length > 1 && (
            <div className="pokeEvos_Section">
              {Array.isArray(pokeEvos[1]) ? (
                pokeEvos[1].map((chainEvo) => {
                  return (
                    <Link
                      to={{ pathname: `/pokemons/${chainEvo.id}` }}
                      className="arrowSprite_Evo"
                      key={chainEvo.name}
                    >
                      <MdOutlineArrowForwardIos size="2rem" color="#2c3337" />
                      <figure>
                        <img src={chainEvo.sprite} alt="second_evo" />
                        <figcaption>{chainEvo.name}</figcaption>
                      </figure>
                    </Link>
                  );
                })
              ) : (
                <Link
                  to={{ pathname: `/pokemons/${pokeEvos[1].id}` }}
                  className="arrowSprite_Evo"
                >
                  <MdOutlineArrowForwardIos size="2rem" color="#2c3337" />
                  <figure>
                    <img src={pokeEvos[1].sprite} alt="second_evo" />
                    <figcaption>{pokeEvos[1].name}</figcaption>
                  </figure>
                </Link>
              )}
            </div>
          )}
          {pokeEvos.length > 2 && (
            <div className="pokeEvos_Section">
              {pokeEvos[2].map((chainEvo) => {
                return (
                  <Link
                    to={{ pathname: `/pokemons/${chainEvo.id}` }}
                    className="arrowSprite_Evo"
                    key={chainEvo.name}
                  >
                    <MdOutlineArrowForwardIos size="2rem" color="#2c3337" />
                    <figure>
                      <img src={chainEvo.sprite} alt="third_evo" />
                      <figcaption>{chainEvo.name}</figcaption>
                    </figure>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default EvoPokesection;
