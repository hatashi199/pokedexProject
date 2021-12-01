import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";
import { FiPlusCircle } from "react-icons/fi";
import { BsDashCircle } from "react-icons/bs";

const AbilitiesSection = ({ dataAbilities }) => {
  const [abilityActive, setAbilityActive] = useState({
    element: "",
    active: false,
  });
  const [abilityInfo, setAbilityInfo] = useState("");

  useEffect(() => {
    const getAbilityInfo = async () => {
      try {
        const pokeAbilities = await Promise.all(
          dataAbilities?.map(async ({ ability }) => {
            const { flavor_text_entries } = await getAxios(ability.url);
            const flavorFilterEN = flavor_text_entries.filter(
              ({ language }) => language.name === "en"
            );

            const flavorAbility =
              flavorFilterEN[Number(flavorFilterEN.length) - 1].flavor_text;

            return {
              flavor: flavorAbility,
            };
          })
        );

        setAbilityInfo(pokeAbilities);
      } catch (error) {
        console.log(error);
      }
    };
    getAbilityInfo();
  }, [dataAbilities]);

  return (
    <div className="abilitiesSection">
      {dataAbilities &&
        dataAbilities.map(({ ability, is_hidden }, index) => {
          return (
            <section key={ability.name}>
              <div
                className="acordionHeader"
                onClick={() =>
                  setAbilityActive({
                    element: ability.name,
                    active:
                      abilityActive.element === ability.name
                        ? !abilityActive.active
                        : true,
                  })
                }
              >
                <h3>{is_hidden ? "Hidden Ability" : "Ability"}</h3>
                {abilityActive.active &&
                abilityActive.element === ability.name ? (
                  <BsDashCircle size="1.2rem" color="#2c3337" />
                ) : (
                  <FiPlusCircle size="1.2rem" color="#2c3337" />
                )}
              </div>
              <div
                className="abilityDetail"
                style={
                  abilityActive.element === ability.name && abilityActive.active
                    ? {
                        opacity: 1,
                        maxHeight: 100 + "px",
                        padding: 1 + "rem",
                      }
                    : null
                }
              >
                <h5>"{ability.name.replaceAll("-", " ")}"</h5>
                {abilityInfo && <p>{abilityInfo[index]?.flavor}</p>}
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default AbilitiesSection;
