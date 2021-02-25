import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({productsPerPage, totalProducts, paginate, handlePrevious, handleNext}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item"><button className="page-link" onClick={handlePrevious}>Previous</button></li>
                    {pageNumbers.map(number => (
                            <li key={`page_${number}`} className="page-item"><button className="page-link" onClick={() => paginate(number)}>{number}</button></li>
                        )
                    )}
                    <li className="page-item"><button className="page-link" onClick={() => handleNext(pageNumbers.length)}>Next</button></li>
                </ul>
            </nav>
    );
}

Pagination.propTypes = {
    productsPerPage : PropTypes.number,
    totalProducts : PropTypes.number,
    paginate : PropTypes.func,
    handlePrevious : PropTypes.func,
    handleNext : PropTypes.func
}

export default Pagination;