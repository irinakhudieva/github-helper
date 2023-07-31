import React, { useEffect, useState } from 'react';
import styles from './UserPage.module.css';
import Header from '../SearchUser/SearchUser';
import { userService } from '../../API/API';
import { useParams } from 'react-router-dom';
import User from './User';
import Repositories from './Repositories';

const UserPage = () => {
   
    const params = useParams();
    
    const [user, setUser] = useState({});

    const getData = async () => {
        try {
            const response = await userService.getUserPage(username);
            setUser(response.data);
        } catch (error) {
            console.log('error', error)
        }
   }

   useEffect(() => {
       username &&
       getData(username)
   }, [getData, setUser, username])

    return (
        <div className={styles.userPage}>
           <Header />
            <div className={styles.page}>
                <User user={user} /> 
                <Repositories username={username} />
            </div>
       </div>
    )
}

export default UserPage;
