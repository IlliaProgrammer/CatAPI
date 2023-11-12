import React, {useState} from 'react';
import TopButtons from '../../components/TopButtons/TopButtons';
import ArrowBack from '../../components/UI/ArrowBack/ArrowBack';
import sortUp from "../../assets/svg/default/sortUp.svg"
import sortDown from "../../assets/svg/default/sortDown.svg"
import styles from "./Breeds.module.css"
import BreedsContainer from '../../components/BreedsContainer/BreedsContainer';
import { breedsApi } from '../../services/BreedsService';


const Breeds = () => {

    const [selectedBreed, setSelectedBreed] = useState("");
    const [selectedLimit, setSelectedLimit] = useState(10);
    const [selectedOrder, setSelectedOrder] = useState("RANDOM");
    const { data: breeds, isError: isBreedsError, isLoading: isBreedsLoading, isSuccess } = breedsApi.useFetchAllBreedsQuery("");



    const onBreedSelectChange = (e:any) => {
            setSelectedBreed(e.target.value);
    };

    const onLimitSelectChange = (e:any) => {
        setSelectedLimit(e.target.value);
    };
    
      if(isBreedsLoading){
        <div>loading</div>
      }

      if(isBreedsError){
        <div>eroor</div>
      }

    return (
        <div>
            <TopButtons/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <ArrowBack/>
                    <div className={styles.page_title}>
                        <p className={styles.page_text}>Breeds</p>
                    </div>
                    <select name="select" className={styles.setting_select} onChange={onBreedSelectChange}>
                        <option value="" selected>Any</option>
                        {isSuccess && breeds.map((breed:any) => (
                            <option key={breed.id} value={breed.id}>
                                {breed.name}
                            </option>
                        ))} 
                    </select>
                    <select name="select" className={styles.setting_select_short} onChange={onLimitSelectChange}>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                    </select>
                    <div className={styles.button} onClick={()=>setSelectedOrder("ASC")}>
                        <img src={sortUp}/>
                    </div>
                    <div className={styles.button} onClick={()=>setSelectedOrder("DESC")}>
                        <img src={sortDown}/>
                    </div>
                </div>
                
                <BreedsContainer breed={selectedBreed} limit={selectedLimit} order={selectedOrder}/>
            </div>
        </div>
    );
};

export default Breeds;