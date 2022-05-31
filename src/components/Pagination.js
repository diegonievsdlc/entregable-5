import React from 'react';

const Pagination = ({cardsPerPage, totalCards, paginate, curretPage}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    if(i < curretPage + 3 && i > curretPage - 3){
      pageNumbers.push(i)
    }
  }
  return (
    <div className='change-page'>
      {
          pageNumbers.map(number => (
              <button
                  onClick={() => paginate(number)} 
                  key={number}>
                      {number}
              </button>
          ))
      }
    </div>
  );
};

export default Pagination;