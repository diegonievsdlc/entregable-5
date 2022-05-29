import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="change-page">
      {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)} key={number}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
