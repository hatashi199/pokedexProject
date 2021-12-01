import React from "react";

const AbilityFormSection = ({ dataAbilityForm, dataForm }) => {
  return (
    <>
      {dataAbilityForm &&
        dataAbilityForm.map((ability) => {
          const textFormAbility = ability.flavor_text_entries.filter(
            ({ language }) => language.name === "en"
          );

          // const isHidden =
          //   dataForm &&
          //   dataForm.abilities.find(
          //     (item) => item.ability.name === ability.name
          //   );
          console.log(dataAbilityForm);
          // console.log(isHidden);
          return (
            <div key={ability.name}>
              {/* <h4>{isHidden.is_hidden ? "Hidden Ability" : "Ability"}</h4> */}
              <h4>Ability</h4>
              <h5>{ability.name}</h5>
              <p>{textFormAbility[textFormAbility.length - 1].flavor_text}</p>
            </div>
          );
        })}
    </>
  );
};

export default AbilityFormSection;
