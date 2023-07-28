import React from 'react';
import styles from './UserPage.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUserFriends, faUser);

const User = ({user}) => {
    return (
        <div className={styles.userInfo}>
            <div>
                <img 
                    className={styles.userPhoto}
                    src={user.avatar_url} 
                     alt="userPhoto" 
                />
            </div>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.login}>{user.login}</div>
            <div className={styles.follow}>
                <div style={{marginRight: 30}}>
                    <FontAwesomeIcon icon="user-friends" />
                    {user.followers} followers 
                </div>
                <div>
                    <FontAwesomeIcon icon="user" />
                    {user.following} following
                </div>
            </div>
        </div>
    )
}

export default User;

