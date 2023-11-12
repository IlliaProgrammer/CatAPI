import React, { useEffect, useState } from 'react';
import styles from "./SearchBar.module.css"
import search from "../../../assets/svg/default/search.svg"
import { breedsApi } from '../../../services/BreedsService';
import { useDebounce } from '../../../hooks/debounce';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const debounced = useDebounce(inputValue);
    const [dropdown, setDropdown] = useState(false);
    const { data: breeds, isError: isBreedsError, isLoading: isBreedsLoading, isSuccess } = breedsApi.useFetchAllBreedsQuery("");

    useEffect(() => {
        if(debounced.length > 0 && breeds?.length! > 0){
            setDropdown(true)
        } else setDropdown(false);
    }, [debounced, breeds]);

    const filteredBreeds = breeds?.filter(breed => {
        return breed.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    return (
        <div className={styles.top}>
            <input type="text" className={styles.input_bar} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search for breeds by name"/>
            <div className={styles.dropdown}>
                {dropdown && filteredBreeds?.map((breedTitle, index) => (
                    <Link className={styles.breedOption} to={`/breed/${breedTitle.id}`} key={index}>{breedTitle.name}</Link>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;