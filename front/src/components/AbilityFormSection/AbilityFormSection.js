import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const AbilityFormSection = ({ dataAbilityForm }) => {
  return (
    <>
      <h4>Abilities</h4>
      {dataAbilityForm &&
        dataAbilityForm.map((ability) => {
          const textFormAbility = ability.flavor_text_entries.filter(
            ({ language }) => language.name === "en"
          );

          return (
            <>
              <Accordion key={ability.id} allowToggle>
                <AccordionItem>
                  <h3>
                    <AccordionButton className="acordionHeader">
                      Ability
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel className="abilityDetail">
                    <h5>"{ability.name.replaceAll("-", " ")}"</h5>
                    {textFormAbility && (
                      <p>{textFormAbility[0]?.flavor_text}</p>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </>
          );
        })}
    </>
  );
};

export default AbilityFormSection;
