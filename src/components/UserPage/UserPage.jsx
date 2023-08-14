import React, { useCallback, useEffect, useState } from 'react';
import styles from './UserPage.module.css';
import SearchUser from '../SearchUser/SearchUser';
import { userService } from '../../service/serviceUser';
import { useParams } from 'react-router-dom';
import User from './User';
import Repositories from './Repositories';
import Error from '../Error/Error';
import Loader from '../UI/loader/Loader';

const UserPage = () => {
   const {username} = useParams(); 
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const getData = useCallback(
        async () => {
            try {
                setIsLoading(true);
                const response = await userService.getUserPage(username);
                setUser(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, 
        [setUser, username]
    );

   useEffect(() => {
       username &&
       getData(username)
   }, [getData, setUser, username]);

   return (
        <div className={styles.userPage}>
            <SearchUser />
            {error ? (
                <Error />
            ) : isLoading ? (
                <Loader />
                    ) : (
                    <div className={styles.page}>
                        <User user={user} />
                        <Repositories username={username} />
                    </div>
            )}
        </div>
   )
}

export default UserPage;
