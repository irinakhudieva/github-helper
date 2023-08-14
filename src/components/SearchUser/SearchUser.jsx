import React, { useState } from 'react';
import styles from './SearchUser.module.css';
import MyInput from '../UI/input/MyInput';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
library.add(fab, faGithub, faSearch);

const SearchUser = () => {
    const [username, setUserName] = useState('');
    const navigate = useNavigate();

    return (
        <div className={styles.header}> 
            <NavLink to="/" className={styles.logo}>
                <FontAwesomeIcon 
                    icon={['fab', 'github']} 
                    style={{color: "#ffffff",}} 
                    size="2x"
                />
            </NavLink>
            <MyInput 
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Enter GitHub username' 
            />
            <button 
                onClick={() => navigate(`/user/${username}`)}
                className={styles.button}>
                    <FontAwesomeIcon 
                        icon="search" 
                        style={{color: '#ffffff'}} 
                        size="lg"
                    />
            </button>
        </div>
    )
}

export default SearchUser;
