import useEvolution from '../../hooks/useEvolution';

const EvoPokesection = ({ dataEvoSpecie }) => {
    const { evo } = useEvolution(dataEvoSpecie?.evolution_chain.url);

    console.log(evo);
    return (
        <section>
            {evo &&
                evo.map(({ name, sprite }) => {
                    return (
                        <div key={name}>
                            <span>{name}</span>
                            <figure>
                                <img src={sprite} alt='pokePic' />
                            </figure>
                        </div>
                    );
                })}
        </section>
    );
};

export default EvoPokesection;
