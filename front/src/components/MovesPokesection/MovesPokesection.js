import { useEffect, useState } from "react";
import { getAxios } from "../../helpers";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

const MovesPokesection = ({ dataMovePokemon }) => {
  const [pokeMoves, setPokeMoves] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [movesPerPage] = useState(10);

  useEffect(() => {
    const getMoveInfo = async () => {
      try {
        setLoading(true);
        const infoMoves = await Promise.all(
          dataMovePokemon?.moves.map(async ({ move }) => {
            const data = await getAxios(move.url);
            return data;
          })
        );
        setPokeMoves(infoMoves);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMoveInfo();
  }, [dataMovePokemon.moves]);

  const indexOfLastMove = currentPage * movesPerPage;
  const indexOfFirstPokemon = indexOfLastMove - movesPerPage;
  const currentMoves = pokeMoves?.slice(indexOfFirstPokemon, indexOfLastMove);

  return (
    <>
      {loading && <Loading />}
      {pokeMoves && (
        <>
          <table className="movesTableData">
            <tbody>
              {currentMoves.map((item) => {
                const flavor = item.flavor_text_entries.filter(
                  ({ language }) => language.name === "en"
                );

                return (
                  <tr key={item.id}>
                    <td className="moveName">
                      {item.name.replaceAll("-", " ")}
                    </td>
                    <td>{flavor[flavor.length - 1].flavor_text}</td>
                    <td>
                      <span
                        className={item.type.name}
                        style={{
                          color: "#FFF",
                          padding: "0.5rem",
                          borderRadius: "6px",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.type.name}
                      </span>
                    </td>
                    <td>{item.damage_class.name}</td>
                    <td>{item.power === null ? "---" : item.power}</td>
                    <td>{item.accuracy === null ? "---" : item.accuracy}</td>
                    <td>{item.pp + "/" + item.pp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            totalElements={pokeMoves.length}
            elementsPerPage={movesPerPage}
            paginate={(pageNumber) => setCurrentPage(pageNumber)}
            updateCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default MovesPokesection;
