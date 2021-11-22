import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { getAxios } from "../../helpers";

const ModalPokeform = ({ close, modalActive, formData }) => {
  console.log(formData);
  const [formInfo, setFormInfo] = useState("");

  useEffect(() => {
    const getFormInfo = async () => {
      try {
        const data = await getAxios(formData.pokemon.url);
        setFormInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFormInfo();
  }, [formData?.pokemon.url]);

  console.log(formInfo);
  return (
    <>
      {modalActive && formData && formInfo && (
        <section className="modalElement">
          <div className="pokeForm_Data">
            <section>
              <MdOutlineClose onClick={() => close()} />
              <figure>
                <img
                  src={formInfo.sprites.other["official-artwork"].front_default}
                  alt="pokeSprite"
                />
              </figure>
              <h3>{formInfo.name}</h3>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default ModalPokeform;
