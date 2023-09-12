import React from 'react';
import {  useNavigate } from 'react-router-dom';
import arrow from "../../../assets/svg/default/arrow.svg"
import styles from "./ArrowBack.module.css"

const ArrowBack = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button className={styles.back_button} onClick={() => navigate(-1)}><img src={arrow} alt="" className={styles.arrow}/></button>
        </div>
    );
};

export default ArrowBack;