import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";

const EvoPokesection = ({ dataEvoSpecie }) => {
  const [evo, setEvo] = useState("");

  useEffect(() => {
    const getEvoChain = async () => {
      try {
        const { chain } = await getAxios(dataEvoSpecie.evolution_chain.url);

        const evolChain = [];
        let evoData = chain;
        do {
          const evoDetails = evoData.evolution_details[0];
          console.log(evoData.evolves_to);

          const pkx = evoData.species.url.split("/")[6];
          console.log(pkx);

          evolChain.push({
            species_name: evoData.species.name,
            min_level: !evoDetails ? 1 : evoDetails.min_level,
            item: !evoDetails ? null : evoDetails.item,
            id: pkx,
            evolution: !!evoData.evolution_details.length,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkx}.png`,
          });

          evoData =
            evoData.evolves_to.length === 1
              ? evoData.evolves_to[0]
              : evoData.evolves_to;
        } while (evoData && evoData.hasOwnProperty("evolves_to"));

        setEvo(evolChain);

        console.log(evolChain);
      } catch (error) {
        console.log(error);
      }
    };
    getEvoChain();
  }, []);

  return (
    <section>
      {evo &&
        evo.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.species_name}</span>
              <figure>
                <img src={item.sprite} alt="pokePic" />
              </figure>
            </div>
          );
        })}
    </section>
  );
};

export default EvoPokesection;
