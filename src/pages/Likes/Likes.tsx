import React from 'react';
import GridComponent from '../../components/GridComponent/GridComponent';
import Loader from '../../components/Loader/Loader';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import { votingApi } from '../../services/VotingService';

import styles from "./Likes.module.css"


const Likes = () => {

    const {data: likes, isLoading, error} = votingApi.useFetchAllVotesQuery("")


      const flattenedFavs = Array.isArray(likes) ? likes.flat() : [];

    const transformedArray = flattenedFavs.map((obj) => ({
        breeds: [],
        id: obj.image.id,
        url: obj.image.url,
        value: obj.value
    }));

    const filteredArray = transformedArray.filter(obj => obj.value === 1);
    const groupedImages = [];
    for (let i = 0; i < filteredArray.length; i += 5) {
        groupedImages.push(filteredArray.slice(i, i + 5));
    }

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
                {isLoading ? <Loader/> : groupedImages.map((imageGroup, groupIndex) => (
                    <GridComponent key={groupIndex} images={imageGroup} />
                    ))}
            </div>
        </div>
    );
};

export default Likes;