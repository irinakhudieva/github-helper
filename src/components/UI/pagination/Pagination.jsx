import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({totalRepos, setCurrentPage, perPage, currentPage}) => {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos/perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="page-wrapper">
            {pageNumbers.map(p =>
                <button
                    onClick={() => setCurrentPage(p)} 
                    key={p}
                    className={p === currentPage ? styles.active : styles.page}
                >
                    {p}
                </button>
            )}
        </div>
    )
}

export default Pagination;

