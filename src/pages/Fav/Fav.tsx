import React from 'react';
import GridComponent from '../../components/GridComponent/GridComponent';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import { favoutiteApi } from '../../services/FavouriteService';

import styles from "./Fav.module.css"

const Fav = () => {
    const { data: favs, isLoading, error, isSuccess, refetch } = favoutiteApi.useFetchAllFavouritesQuery("");

    if (isLoading) {
        return <div>Loading</div>;
    }

    // Ensure favs is an array and flatten it if needed
    const flattenedFavs = Array.isArray(favs) ? favs.flat() : [];

    // Transform the data
    const transformedArray = flattenedFavs.map((obj) => ({
        breeds: [],
        id: obj.image.id,
        url: obj.image.url,
    }));

    // Group images
    const groupedImages = [];
    for (let i = 0; i < transformedArray.length; i += 5) {
        groupedImages.push(transformedArray.slice(i, i + 5));
    }

    return (
        <div>
            <TopButtons />
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack />
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>Favourite</p>
                    </div>
                </div>
                <div>
                    {groupedImages.map((imageGroup, groupIndex) => (
                        <GridComponent key={groupIndex} images={imageGroup} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fav;