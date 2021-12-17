import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AbilityFormSection = ({ dataAbilityForm, dataForm }) => {
  const [expanded, setExpanded] = useState("");

  return (
    <>
      <h4>Abilities</h4>
      {dataAbilityForm &&
        dataAbilityForm.map((ability) => {
          const textFormAbility = ability.flavor_text_entries.filter(
            ({ language }) => language.name === "en"
          );

          const handleChange = () => {
            setExpanded(ability.name);
          };
          // const isHidden =
          //   dataForm &&
          //   dataForm.abilities.find(
          //     (item) => item.ability.name === ability.name
          //   );
          // console.log(dataForm);
          // console.log(isHidden);
          return (
            <>
              <Accordion
                key={ability.name}
                expanded={expanded === ability.name}
                onChange={() => handleChange()}
              >
                {/* <h4>{isHidden.is_hidden ? "Hidden Ability" : "Ability"}</h4> */}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
                  sx={{
                    backgroundColor: "#c0392b",
                  }}
                >
                  <h5 className="abilityName">
                    {ability.name.split("-").join(" ")}
                  </h5>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FA8072" }}>
                  <p className="abilityInfo">
                    {textFormAbility[textFormAbility.length - 1].flavor_text}
                  </p>
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
    </>
  );
};

export default AbilityFormSection;
