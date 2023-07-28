import React from 'react';

const Pagination = ({totalPages, page, changePage}) => {
    const pageNumbers = [];

    for(let i = 1; 1 <= Math.ceil(totalPages / page); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="page-wrapper">
            {pageNumbers.map(p =>
                <span
                    onClick={() => changePage(p)} 
                    key={p}
                    className={page === p ? 'page page-current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    )
}

export default Pagination;

