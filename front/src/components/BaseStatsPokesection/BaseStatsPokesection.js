import AbilitiesSection from "../AbilitiesSection/AbilitiesSection";

const BaseStatsPokesection = ({ dataStatsPoke }) => {
  return (
    <>
      {dataStatsPoke && (
        <div className="basestatsSection">
          <table className="statsTable">
            <tbody>
              {dataStatsPoke?.stats.map(({ stat, base_stat }) => {
                return (
                  <tr key={stat.name}>
                    <td className="statName">
                      {stat.name.replaceAll("-", " ")}
                    </td>
                    <td>{base_stat}</td>
                    <td className="lineBaseStat_Box">
                      <div className="lineBaseStat">
                        <div
                          style={{
                            width: Math.round((base_stat * 100) / 255) + "%",
                            backgroundColor: "#c0392b",
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <AbilitiesSection dataAbilities={dataStatsPoke?.abilities} />
        </div>
      )}
    </>
  );
};

export default BaseStatsPokesection;
