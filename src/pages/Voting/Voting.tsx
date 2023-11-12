import React from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import { galleryApi } from '../../services/GalleryService';
import styles from "./Voting.module.css"
import fav from "../../assets/svg/active/fav.svg"
import like from "../../assets/svg/active/like.svg"
import dislike from "../../assets/svg/active/dislike.svg"
import { votingApi } from '../../services/VotingService';
import { favoutiteApi } from '../../services/FavouriteService';
import Loader from '../../components/Loader/Loader';


const Voting = () => {
    const {data: picture, isLoading, error, isSuccess} = galleryApi.useFetchAllGalleryQuery({ limit: 1,})
    const [addFavourite] = favoutiteApi.useAddFavouriteMutation(); 
    const [votingUp] = votingApi.useVoteUpMutation()

    if (!isSuccess) {
        return <Loader />; // You can replace this with your loading indicator
    }
    

    const handleLikePost = (imageId: string) => {
        votingUp({
            "image_id": imageId,
            "sub_id": "user-123",
            "value": 1
        })
    }

    const handleFavPost = (imageId: string) => {
        addFavourite(imageId)
    }

    const handleDislikePost = (imageId: string) => {
        votingUp({
            "image_id": imageId,
            "sub_id": "user-123",
            "value": -1
        })
    }

    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>voting</p>
                    </div>
                </div>
                <div className={styles.content_photo}>
                    <div className={styles.photo}>
                        {
                            isSuccess && <img src={picture[0].url} alt="" className={styles.photoApi}/>
                        }
                    </div>
                    <div className={styles.photo_buttons}>
                        <ul className={styles.buttons}>
                            <li onClick={()=> handleLikePost(picture[0].id)}>
                                <img src={like} alt="" />
                            </li>
                            <li onClick={() => handleFavPost(picture[0].id)}>
                                <img src={fav} alt="" />
                            </li>
                            <li onClick={()=> handleDislikePost(picture[0].id)}>
                                <img src={dislike} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Voting;