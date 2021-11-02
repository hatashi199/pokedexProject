import { MdOutlineClose } from "react-icons/md";

const ModalPokeform = ({ close, modalActive, formData }) => {
  console.log(formData);
  return (
    <>
      {modalActive && formData && (
        <section className="modalElement">
          <div className="pokeForm_Data">
            <p>{formData.pokemon.name}</p>
            <MdOutlineClose onClick={() => close()} />
          </div>
        </section>
      )}
    </>
  );
};

export default ModalPokeform;
