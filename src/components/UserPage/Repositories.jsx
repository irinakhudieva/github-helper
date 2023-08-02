import React, { useEffect, useState } from 'react';
import styles from './UserPage.module.css';
import Pagination from '../UI/pagination/Pagination';
import { useFetching } from '../../hooks/useFetching';
import { userService } from '../../API/API';
import Loader from '../UI/loader/Loader';

const Repositories = ({username}) => {
    const [repos, setRepos] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(5);

    const getData = async () => {
        try {
            const response = await userService.getRepositories(username);
            console.log(response);
            setRepos(response.data);
        } catch (error) {
            console.log('error', error)
        }
   }

   useEffect(() => {
       username &&
       getData(username)
   }, [getData, setRepos, username])

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className={styles.repositories}>
           <h1>Repositories({repos.length})</h1>
            {repos.map(r =>
                <div 
                    key={r.id}
                    className={styles.item}
                >
                    {r.name}
                </div>
          )}
           <Pagination 
                page={page}
                totalPages={repos.length}
                changePage={changePage}
            />
        </div>
    )
}

export default Repositories;
