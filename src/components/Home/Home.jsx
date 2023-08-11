import React from 'react';
import styles from './Home.module.css';
import SearchUser from '../SearchUser/SearchUser';


const Home = () => {
  return (
    <div>
      <SearchUser />
      <div className={styles.homePage}>
          <div className={styles.startInfo}>
            <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png" alt="" style={{width: 150, height: 150}}/>
            <div>Start with searching a <br />GitHub user</div>
          </div>
      </div>
    </div>
  )
}

export default Home;
