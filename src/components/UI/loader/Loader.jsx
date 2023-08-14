import React from 'react';
import loader from '../../../common/images/activity_indicator.gif';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div>
       <img className={styles.loaderImg} src={loader} alt="loader" />
    </div>
  )
}

export default Loader;
