import React from 'react';
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.item_1}></div>
                <div className={styles.item_2}></div>
                <div className={styles.item_3}></div>
                <div className={styles.item_4}></div>
            </div>
        </div>
    );
};

export default Loader;