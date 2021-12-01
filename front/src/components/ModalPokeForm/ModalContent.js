import React from "react";
import { MdOutlineClose } from "react-icons/md";
import AbilityFormSection from "../AbilityFormSection/AbilityFormSection";
import PokeTypes from "../PokeTypes/PokeTypes";

const ModalContent = ({ close, clicked, dataForm, dataAbilityForm }) => {
  const styleCloseButton = {
    position: "absolute",
    top: "3%",
    left: "3%",
    zIndex: 100,
    cursor: "pointer",
  };

  return (
    <>
      <MdOutlineClose
        size={"2rem"}
        color="#2c3337"
        onClick={close}
        style={styleCloseButton}
      />
      {dataForm && (
        <>
          <section>
            <figure className={dataForm.types[0].type.name}>
              <img src={clicked.sprite} alt="sprite_form" />
            </figure>
            <div>
              <h3>{clicked.pokemon.name}</h3>
              <PokeTypes dataTypes={dataForm.types} />
            </div>
          </section>
          <section>
            <AbilityFormSection
              dataAbilityForm={dataAbilityForm}
              dataForm={dataForm}
            />
          </section>
        </>
      )}
    </>
  );
};

export default ModalContent;
