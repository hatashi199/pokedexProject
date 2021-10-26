import useEvolution from '../../hooks/useEvolution';

const EvoPokesection = ({ dataEvoSpecie }) => {
    const { evo } = useEvolution(dataEvoSpecie?.evolution_chain.url);

    return (
        <section>
            {/* {evo &&
                evo.map((item) => {
                    return (
                        <div key={item.name}>
                            <span>{item.name}</span>
                            <figure>
                                <img src={item.sprite} alt='pokePic' />
                            </figure>
                        </div>
                    );
                })} */}
        </section>
    );
};

export default EvoPokesection;
