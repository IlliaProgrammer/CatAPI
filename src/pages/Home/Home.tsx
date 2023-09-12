import React from 'react';
import styles from "./Home.module.css"
import girl from "../../assets/images/girl.png"

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <img src={girl} alt=""/>
        </div>
    );
};

export default Home;