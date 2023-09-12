import React from 'react';
import styles from "./SearchBar.module.css"
import search from "../../../assets/svg/default/search.svg"

const SearchBar = () => {
    return (
        <div className={styles.top}>
            <input type="text" className={styles.input_bar} placeholder="Search for breeds by name"/>
        </div>
    );
};

export default SearchBar;