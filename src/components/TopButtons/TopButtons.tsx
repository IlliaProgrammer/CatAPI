import React from 'react';
import { Link } from 'react-router-dom';
import { DISLIKES_ROUTE, FAVOURITE_ROUTE, LIKES_ROUTE } from '../../utils/consts';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from "./TopButtons.module.css"
import dislike from "../../assets/svg/default/dislike.svg"
import like from "../../assets/svg/default/like.svg"
import fav from "../../assets/svg/default/fav.svg"

const TopButtons = () => {
    return (
        <div className={styles.wrapper}>
            <SearchBar/>
            <ul className={styles.buttons}>
                <li className={styles.button}><Link to={LIKES_ROUTE}><img src={like} alt="" className={styles.icon}/></Link></li>
                <li className={styles.button}><Link to={FAVOURITE_ROUTE}><img src={fav} alt="" className={styles.icon}/></Link></li>
                <li className={styles.button}><Link to={DISLIKES_ROUTE}><img src={dislike} alt="" className={styles.icon}/></Link></li>
            </ul>
        </div>
    );
};

export default TopButtons;