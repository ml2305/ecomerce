import React from 'react';

const Pagination = ({productsPerPage, totalProducts, paginate, handlePrevious, handleNext}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item"><button className="page-link" onClick={handlePrevious}>Previous</button></li>
                    {pageNumbers.map(number => {
                        return (
                            <li key={number} className="page-item"><button className="page-link" onClick={() => paginate(number)}>{number}</button></li>
                        );
                    })}
                    <li className="page-item"><button className="page-link" onClick={() => handleNext(pageNumbers.length)}>Next</button></li>
                </ul>
            </nav>
    );
}

export default Pagination;