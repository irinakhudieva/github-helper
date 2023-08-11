import React, { useCallback, useEffect, useState } from 'react';
import styles from './UserPage.module.css';
import Pagination from '../UI/pagination/Pagination';
import { userService } from '../../service/serviceUser';

const Repositories = ({username}) => {
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const getData = useCallback(
       async () => {
        try {
            const response = await userService.getRepositories(username);
            setRepos(response.data);
        } catch (error) {
            console.log('error', error)
        }
    }, [setRepos, username])
    

   useEffect(() => {
       username &&
       getData(username)
   }, [getData, username, currentPage])

   const lastReposIndex = currentPage * perPage;
   const firstReposIndex = lastReposIndex - perPage;
   const currentRepos = repos.slice(firstReposIndex,lastReposIndex);

  
    return (
        <div className={styles.repositories}>
           <h1>Repositories({repos.length})</h1>
           {currentRepos.map(r =>
                <div 
                    key={r.id}
                    className={styles.item}
                >
                    {r.name}
                </div>
          )}
           <Pagination 
                perPage={perPage}
                totalRepos={repos.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Repositories;
