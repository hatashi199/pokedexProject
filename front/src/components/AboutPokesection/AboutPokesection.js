const AboutPokesection = ({ dataAbout }) => {
    return (
        <div className='aboutSection'>
            <div className='aboutSection_Header'>
                {dataAbout.descriptionPokedex &&
                    dataAbout.descriptionPokedex.map(({ flavor_text }) => {
                        return <p key={flavor_text}>{flavor_text}</p>;
                    })}
            </div>
            <div className='aboutSection_Data'>
                <ul>
                    <li>Specie</li>
                    <li>Category</li>
                    <li>Height</li>
                    <li>Weight</li>
                    <li>Weakness Types</li>
                </ul>
                <ul>
                    {dataAbout.genus &&
                        dataAbout.genus.map(({ genus }) => {
                            return <li key={genus}>{genus}</li>;
                        })}
                    {dataAbout.is_baby && <li>Baby</li>}
                    {dataAbout.is_legendary && <li>Legendary</li>}
                    {dataAbout.is_mythical && <li>Mythical</li>}
                    {dataAbout.is_normal && <li>Normal</li>}
                    <li>{dataAbout.normal_form.height / 10 + ' m'}</li>
                    <li>{dataAbout.normal_form.weight / 10 + ' kg'}</li>
                    <li>Types</li>
                </ul>
            </div>
            <figure className='aboutSection_Shiny'>
                <img
                    src={dataAbout.normal_form.sprites.front_shiny}
                    alt='shiny_form'
                />
                <figcaption>Shiny Form</figcaption>
            </figure>
        </div>
    );
};

export default AboutPokesection;
