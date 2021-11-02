import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

const Pagination = ({
  totalElements,
  elementsPerPage,
  paginate,
  updateCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalElements / elementsPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (currentPage >= 1) {
      updateCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage <= lastPage) {
      updateCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {totalElements && (
        <nav className="paginationBox">
          <ul className="pagination">
            {currentPage !== 1 && (
              <>
                <li onClick={() => updateCurrentPage(1)}>
                  <MdFirstPage />
                </li>
                <li onClick={previousPage}>
                  <MdKeyboardArrowLeft />
                </li>
              </>
            )}
            {pageNumbers.map((number) => (
              <li key={number} onClick={() => paginate(number)}>
                {number}
              </li>
            ))}
            {currentPage !== lastPage && (
              <>
                <li onClick={nextPage}>
                  <MdKeyboardArrowRight />
                </li>
                <li onClick={() => updateCurrentPage(lastPage)}>
                  <MdLastPage />
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
