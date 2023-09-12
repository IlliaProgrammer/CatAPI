import React from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import { favoutiteApi } from '../../services/FavouriteService';

import styles from "./Fav.module.css"


const Fav = () => {

    const {data: favs, isLoading, error, isSuccess} = favoutiteApi.useFetchAllFavouritesQuery("")


    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>Favourite</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Fav;