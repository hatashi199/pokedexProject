import { IoMdMale, IoMdFemale } from 'react-icons/io';

const AboutPokesection = ({ dataAboutPoke, dataAboutSpecie }) => {
    const flavorFilterEN = dataAboutSpecie?.flavor_text_entries?.filter(
        (flavor) => flavor.language.name === 'en'
    );

    const lastFlavor =
        flavorFilterEN[Number(flavorFilterEN?.length) - 1]?.flavor_text;

    const genusFilterEN = dataAboutSpecie?.genera.filter(
        ({ language }) => language.name === 'en'
    );

    const genus = genusFilterEN[0].genus;

    const { is_baby, is_legendary, is_mythical } = dataAboutSpecie;
    const is_normal = !is_baby && !is_legendary && !is_mythical ? true : false;

    const femaleGenderRatio = dataAboutSpecie.gender_rate * 12.5;
    const maleGenderRatio = 12.5 * (8 - dataAboutSpecie.gender_rate);

    return (
        <>
            {dataAboutSpecie && dataAboutPoke && (
                <div className='aboutSection'>
                    <div className='aboutSection_Header'>
                        <p>{lastFlavor}</p>
                    </div>
                    <div className='aboutSection_Data'>
                        <ul>
                            <li>Specie</li>
                            <li>Category</li>
                            <li>Height</li>
                            <li>Weight</li>
                            <li>Gender Rate</li>
                            <li>Weakness Types</li>
                        </ul>
                        <ul>
                            <li>{genus}</li>
                            {is_baby && <li>Baby</li>}
                            {is_legendary && <li>Legendary</li>}
                            {is_mythical && <li>Mythical</li>}
                            {is_normal && <li>Normal</li>}
                            <li>{dataAboutPoke.height / 10 + ' m'}</li>
                            <li>{dataAboutPoke.weight / 10 + ' kg'}</li>
                            <li className='genderBar'>
                                {dataAboutSpecie.gender_rate === -1 ? (
                                    'No Gender'
                                ) : (
                                    <>
                                        <div className='male'>
                                            <span>
                                                {maleGenderRatio + ' %'}
                                            </span>
                                            <IoMdMale
                                                size='1.5rem'
                                                color='#4d90d5'
                                            />
                                        </div>
                                        <div className='female'>
                                            <span>
                                                {femaleGenderRatio + ' %'}
                                            </span>
                                            <IoMdFemale
                                                size='1.5rem'
                                                color='#ec8fe6'
                                            />
                                        </div>
                                    </>
                                )}
                            </li>
                            <li>Types</li>
                        </ul>
                    </div>
                    <figure className='aboutSection_Shiny'>
                        <img
                            src={dataAboutPoke.sprites.front_shiny}
                            alt='shiny_form'
                        />
                        <figcaption>Shiny Form</figcaption>
                    </figure>
                </div>
            )}
        </>
    );
};

export default AboutPokesection;
