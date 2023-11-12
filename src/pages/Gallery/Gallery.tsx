import React, { useState, useCallback } from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import reload from "../../assets/svg/default/reload.svg";
import upload from "../../assets/svg/default/upload.svg";
import styles from "./Gallery.module.css";
import Modal from '../../components/Modal/Modal';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';
import { breedsApi } from '../../services/BreedsService';

const Gallery = () => {
    const [modalActive, setModalActive] = useState(false);
    const [selectedOrder, setOrder] = useState("RANDOM");
    const [selectedLimit, setSelectedLimit] = useState(10);
    const [selectedBreed, setSelectedBreed] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [refetchGallery, setRefetchGallery] = useState(false);
    const [rotateIcon, setRotateIcon] = useState(false);

    const { data: breeds, isError: isBreedsError, isLoading: isBreedsLoading, isSuccess,} = breedsApi.useFetchAllBreedsQuery("");

    const handleReloadClick = useCallback(() => {
        setRefetchGallery(true);
        setRotateIcon(true)
    
        setTimeout(() => {
            setRotateIcon(false);
        }, 100);
      }, []);

    const onLimitSelectChange = (e: any) => {
        setSelectedLimit(e.target.value);
    };
    const onOrderSelectChange = (e: any) => {
        setOrder(e.target.value);
    };

    const onBreedSelectChange = (e: any) => {
        setSelectedBreed(e.target.value);
    };

    const onTypeSelectChange = (e: any) => {
        setSelectedType(e.target.value);
    };



    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>gallery</p>
                    </div>
                    <div className={styles.upload} onClick={() => setModalActive(true)}>
                        <img src={upload} alt=""/>
                        <p className={styles.upload_text}>  
                         upload
                        </p>
                    </div>
                </div>
                <div className={styles.settings}>
                    <div className={styles.setting_row}>
                        <div className={styles.setting_field}>
                            <label className={styles.label}>Order</label>
                            <select name="select" className={styles.setting_select} onChange={onOrderSelectChange}>
                                <option value="RAND" selected>Random</option>
                                <option value="DESC">Desc</option>
                                <option value="ASC">Asc</option>
                            </select>
                        </div>
                        <div className={styles.setting_field}>
                            <label className={styles.label}>Type</label>
                            <select name="select" className={styles.setting_select} onChange={onTypeSelectChange}>
                                <option value="" selected>All</option>
                                <option value="jpg">Static</option>
                                <option value="gif">Animated</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.setting_row}>
                        <div className={styles.setting_field}>
                            <label className={styles.label}>Breed</label>
                            <select name="select" className={styles.setting_select} onChange={onBreedSelectChange}>
                                <option value="" selected>None</option>
                                {isSuccess && breeds.map((breed) => (
                                    <option key={breed.id} value={breed.id}>
                                        {breed.name}
                                    </option>
                                ))} 
                            </select>
                        </div>
                        <div className={styles.setting_field}>
                            <label className={styles.label}>Limit</label>
                            <div className={styles.test}>
                                <select name="select" className={styles.setting_select_short} onChange={onLimitSelectChange}>
                                    <option value="5">5</option>
                                    <option value="10" selected>10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                                <div className={styles.reload} onClick={handleReloadClick}>
                                    <img src={reload} className={`${rotateIcon ? styles.rotateIcon : ''}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <GalleryContainer
                        selectedBreed={selectedBreed}
                        limit={selectedLimit}
                        selectedOrder={selectedOrder}
                        selectedTypes={selectedType}
                        refetchProp={refetchGallery}
                        setRefetchProp={setRefetchGallery} 
                    />
                </div>
            </div>
            
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
};

export default Gallery;
