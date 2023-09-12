import React from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';

import styles from "./Likes.module.css"


const Likes = () => {
    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>likes</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Likes;