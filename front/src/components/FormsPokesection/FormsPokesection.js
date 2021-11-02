import ModalPokeform from "../ModalPokeform/ModalPokeform";
import { useState } from "react";

const FormsPokesection = ({ dataFormSpecie }) => {
  const [modalActive, setModalActive] = useState(false);

  const pokemonForms = dataFormSpecie?.varieties
    ?.filter(({ is_default }) => !is_default)
    .map((form) => {
      const idPoke = form.pokemon.url.split("/")[6];

      return {
        ...form,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPoke}.png`,
      };
    });

  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);

  return (
    <>
      {dataFormSpecie && (
        <section className="formsSection">
          {pokemonForms.map((form) => (
            <div className="formSprite" key={form.pokemon.name}>
              <figure onClick={openModal} className="posRel">
                <img src={form.sprite} alt="formSprite" />
                <figcaption>
                  {form.pokemon.name.replaceAll("-", " ")}
                </figcaption>
              </figure>
              <ModalPokeform
                close={closeModal}
                modalActive={modalActive}
                formData={form}
              />
            </div>
          ))}
          {dataFormSpecie?.varieties.length <= 1 && <h3>No tiene formas</h3>}
        </section>
      )}
    </>
  );
};

export default FormsPokesection;
