import React from 'react'
import styles from './Error.module.css';
import errorImg from '../../common/images/404-error.gif';

const Error = () => {
    return (
        <div className={styles.error}>
            <img src={errorImg} alt="" />
            <h1 className={styles.errorInfo}>Page Not Found</h1>
        </div>
        
    )
}

export default Error;
