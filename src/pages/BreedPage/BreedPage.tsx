import React from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import { galleryApi } from '../../services/GalleryService';
import styles from "./BreedPage.module.css"
import { useParams } from 'react-router-dom';

const BreedPage = () => {
    const {id} = useParams()
    const {data: picture, isLoading, error, isSuccess} = galleryApi.useFetchAllGalleryQuery({
        breed: id,
        limit: 5,
    })

    const scrollToSlide = (index: number) => {
        const slideElement = document.getElementById(`slide-${index}`);
        if (slideElement) {
            slideElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>Breed</p>
                        
                    </div>
                    <div className={styles.page_title_id}>
                        <p className={styles.page_text_id}>{id}</p>
                        
                    </div>
                </div>
                <div className={styles.content_photo}>
                    <div className={styles.photo}>
                        {
                            isSuccess && 
                            picture.map((image:any, index: number) => (
                                <img key={`image-${index}`} src={image.url} alt="" className={styles.photoApi} id={`slide-${index}`} />
                            ))
                        }
                    </div>
                    <div className={styles.photo_buttons}>
                       
                        <div className={styles.slider_nav}>
                            <div onClick={() => scrollToSlide(0)}></div>
                            <div onClick={() => scrollToSlide(1)}></div>
                            <div onClick={() => scrollToSlide(2)}></div>
                            <div onClick={() => scrollToSlide(3)}></div>
                            <div onClick={() => scrollToSlide(4)}></div>
                        </div>
                     
                    </div>
                </div>
                <div className={styles.info}>
                        <div className={styles.breed_title}>
                            {isSuccess && picture[0].breeds[0].name}
                        </div>
                        <div className={styles.info_container}>
                            <div className={styles.temperament}>
                                <p className={styles.temperament_title}>Temperament:</p>
                                <p className={styles.temperament_info}>{isSuccess && picture[0].breeds[0].temperament}</p>
                            </div>
                            <div className={styles.origin}>
                                <ul className={styles.origin_list}>
                                    <li>Origin: <span className={styles.origin_span}>{isSuccess && picture[0].breeds[0].origin}</span></li>
                                    <li>Weight: <span className={styles.origin_span}>{isSuccess && picture[0].breeds[0].weight.imperial}</span></li>
                                    <li>Life span: <span className={styles.origin_span}>{isSuccess && picture[0].breeds[0].life_span}</span></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default BreedPage;