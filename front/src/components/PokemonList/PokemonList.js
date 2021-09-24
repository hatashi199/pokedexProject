import useGen from '../../hooks/useGen/useGen';

const PokemonList = () => {
    const { pokeGen } = useGen(3);

    return (
        <div>
            {pokeGen &&
                pokeGen.map(({ name, sprites }) => (
                    <figure key={name}>
                        <img
                            src={sprites?.front_default}
                            alt='sprite_pokemon'
                        />
                        <figcaption>{name}</figcaption>
                    </figure>
                ))}
        </div>
    );
};

export default PokemonList;
