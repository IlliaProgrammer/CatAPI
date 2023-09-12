import React from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';

import styles from "./Dislikes.module.css"


const Dislikes = () => {
    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>dislikes</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Dislikes;