import { useEffect, useState } from "react";
import { getAxios } from "../../helpers";
import ModalContent from "../ModalPokeForm/ModalContent";
import { BackdropModal, StyledModal } from "../ModalPokeForm/StyledModal";

const FormsPokesection = ({ dataFormSpecie }) => {
  const [openModal, setOpenModal] = useState(false);
  const [clickedForm, setClickedForm] = useState("");
  const [formInfo, setFormInfo] = useState("");
  const [abilityFormInfo, setAbilityFormInfo] = useState("");

  const pokemonForms = dataFormSpecie?.varieties
    ?.filter(({ is_default }) => !is_default)
    .map((form) => {
      const idPoke = form.pokemon.url.split("/")[6];

      return {
        ...form,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPoke}.png`,
      };
    });

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setClickedForm(item.pokemon.name);
  };

  const clickedPokemonForm = pokemonForms?.find(
    (form) => form.pokemon.name === clickedForm
  );

  console.log(clickedPokemonForm);

  useEffect(() => {
    const getInfoForm = async () => {
      try {
        const dataForm =
          clickedPokemonForm &&
          (await getAxios(clickedPokemonForm?.pokemon.url));
        setFormInfo(dataForm);

        const dataAbility =
          dataForm &&
          (await Promise.all(
            dataForm.abilities.map(async ({ ability }) => {
              const abilityInfo = await getAxios(ability.url);
              return abilityInfo;
            })
          ));

        setAbilityFormInfo(dataAbility);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoForm();
  }, [clickedPokemonForm?.pokemon.url]);

  return (
    <>
      {dataFormSpecie && (
        <>
          <section className="formsSection">
            {pokemonForms.map((form) => (
              <div className="formSprite" key={form.pokemon.name}>
                <figure
                  className="posRel"
                  onClick={() => handleOpenModal(form)}
                >
                  <img src={form.sprite} alt="formSprite" />
                  <figcaption>
                    {form.pokemon.name.replaceAll("-", " ")}
                  </figcaption>
                </figure>
                <StyledModal
                  open={openModal}
                  onClose={handleCloseModal}
                  BackdropComponent={BackdropModal}
                >
                  <div
                    className={`posRel modalContent ${
                      formInfo && formInfo.types[0].type.name
                    }`}
                  >
                    {abilityFormInfo && (
                      <ModalContent
                        close={handleCloseModal}
                        clicked={clickedPokemonForm}
                        dataForm={formInfo}
                        dataAbilityForm={abilityFormInfo}
                      />
                    )}
                  </div>
                </StyledModal>
              </div>
            ))}
          </section>
          {dataFormSpecie?.varieties.length <= 1 && (
            <h3 className="noForms">It has no forms</h3>
          )}
        </>
      )}
    </>
  );
};

export default FormsPokesection;
