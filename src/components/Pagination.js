import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate, curretPage, setCurretPage }) => {
  return (
    <div className="change-page">
        <button onClick={() => paginate('prev')}><i className='bx bxs-left-arrow'></i> Prev</button>
        <input type="text" value={curretPage} onChange={e => setCurretPage(e.target.value)}/>
        <p>de {Math.floor(totalCards / cardsPerPage)}</p>
        <button onClick={() => paginate('next')}>Next <i className='bx bxs-right-arrow' ></i></button>
    </div>
  );
};

export default Pagination;
