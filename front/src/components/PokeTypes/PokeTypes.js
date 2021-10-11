import typesIcons from '../../typesIcons';
import { v4 as uuidv4 } from 'uuid';

const PokeTypes = ({ dataTypes }) => {
    return (
        <div className='pokemonType_s'>
            {dataTypes.map(({ type }) => {
                for (const iconType of Object.keys(typesIcons)) {
                    if (iconType === type.name) {
                        const TypeIcon = typesIcons[`${iconType}`];
                        return (
                            <div key={uuidv4()}>
                                <TypeIcon size='1.5rem' color='#2C3337' />
                                <span key={type.name}>{type.name}</span>
                            </div>
                        );
                    }
                }
            })}
        </div>
    );
};

export default PokeTypes;
