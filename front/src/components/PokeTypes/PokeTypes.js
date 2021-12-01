import typesIcons from "../../typesIcons";
import { v4 as uuidv4 } from "uuid";
import TypeBlock from "../TypeBlock/TypeBlock";

const PokeTypes = ({ dataTypes }) => {
  return (
    <div className="pokemonType_s">
      {dataTypes.map(({ type }) => {
        for (const iconType of Object.keys(typesIcons)) {
          if (iconType === type.name) {
            const TypeIcon = typesIcons[`${iconType}`];
            return <TypeBlock key={uuidv4()} TypeIcon={TypeIcon} type={type} />;
          }
        }
      })}
    </div>
  );
};

export default PokeTypes;
