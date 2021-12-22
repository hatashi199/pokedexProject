import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const AbilitiesSection = ({ dataAbilities }) => {
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
            <Accordion key={ability.name} allowToggle>
              <AccordionItem>
                <h3>
                  <AccordionButton className="acordionHeader">
                    {is_hidden ? "Hidden Ability" : "Ability"}
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className="abilityDetail">
                  <h5>"{ability.name.replaceAll("-", " ")}"</h5>
                  {abilityInfo && <p>{abilityInfo[index]?.flavor}</p>}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
};

export default AbilitiesSection;
