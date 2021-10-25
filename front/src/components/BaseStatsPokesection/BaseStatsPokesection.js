import AbilitiesSection from '../AbilitiesSection/AbilitiesSection';

const BaseStatsPokesection = ({ dataStatsPoke }) => {
    console.log(dataStatsPoke);
    return (
        <>
            {dataStatsPoke && (
                <div className='basestatsSection'>
                    <div className='statsList'>
                        <ul>
                            {dataStatsPoke?.stats.map(({ stat }) => {
                                return (
                                    <li key={stat.name}>
                                        <span className='statName'>
                                            {stat.name.replaceAll('-', ' ')}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul>
                            {dataStatsPoke?.stats.map(({ base_stat, stat }) => {
                                return (
                                    <li key={stat.name}>
                                        <span>{base_stat}</span>
                                        <div className='lineBaseStat'>
                                            <div
                                                style={{
                                                    width:
                                                        Math.round(
                                                            (base_stat * 100) /
                                                                255
                                                        ) + '%',
                                                    backgroundColor: '#c0392b',
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <AbilitiesSection
                        dataAbilities={dataStatsPoke?.abilities}
                    />
                </div>
            )}
        </>
    );
};

export default BaseStatsPokesection;
