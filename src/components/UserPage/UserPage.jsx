import React, { useEffect, useState } from 'react';
import styles from './UserPage.module.css';
import Header from '../SearchUser/SearchUser';
import { userService } from '../../API/API';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import User from './User';
import Loader from '../UI/loader/Loader';
import Repositories from './Repositories';

const UserPage = () => {
   
    const params = useParams();
    
    const [user, setUser] = useState({});

    const [fetchUserPage, isLoading, error] = useFetching( async (username) => {
        const response = await userService.getUserPage(username);
        console.log(response)
        setUser(response.data)
    });

    useEffect(() => {
        fetchUserPage(params.username);
    }, [])

    return (
        <div className={styles.userPage}>
            <Header />
            {isLoading 
                ? <Loader />
                : <div className={styles.page}>
                    <User user={user} /> 
                    <Repositories username={params} />
                  </div>
            }
            {error && <div>ERROR</div>}
        </div>
    )
}

export default UserPage;
